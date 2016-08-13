require 'csv'
require 'open-uri'

class SearchController < ApplicationController
  before_filter :search_setup, :only => [:index]
  layout :get_layout, only: :show
  def index
    if params[:search_term] != ""
      if params[:keywords].present?
        keywords = params[:keywords].split(",")
        if params[:search_term].present? and keywords.include?(params[:search_term]) == false
          if keywords.count >= 1
            params[:keywords] += ",#{params[:search_term]}"
          else
            params[:keywords] = params[:search_term];
          end
        end
      else
        params[:keywords] = params[:search_term];
      end
    end

    if params[:site_filters].nil? == false
      @site_filters = params[:site_filters].split(',')
    end

    if params[:subtopics].nil? == false
      @subtopic_filters = params[:subtopics].split('-')
    end



    @search = ExtracatMetadata.search(search_params)

    @items = ExtracatMetadata.group(:site, :site_name).select(:site, :site_name).order(:site_name => "ASC").to_a

    #starts here: Used to split the locations into groups of 20
    items, @items = @items.dup, []
    @items.push(items.shift(20)) until items.empty?
    # ends here
    @variable_name = []
    @the_sites = []
    @sites_filtered = params[:site_filter].present? ? params[:site_filter].split() : []
    @subtopics_filtered = params[:subtopic].present? ? params[:subtopic].split("-") : []
    @topics_filtered = params[:topics].present? ? params[:topics].split("-") : []
    @all_topics = ExtracatMetadata.group(:topic).select(:topic).order(:topic => "ASC").to_a.compact.uniq
    @biome_filtered = params[:biome].present? ? params[:biome].split("-") : []
    @allbiome = ExtracatMetadata.group(:biome).select(:biome).order(:biome => "ASC").to_a

    #ExtracatMetadata.search({}).map(&:biome).compact.uniq

    @all_biome = []
    @allbiome.each do |bitem|

      if bitem[:biome].present?
        item = bitem[:biome].split("|")
        if item.kind_of?(Array)
          @all_biome.concat(item)
        else
          @all_biome << item
        end
      end
    end
    @all_biome = @all_biome.uniq
    @all_biome.compact.sort

    @ecosystems_filtered = params[:ecosystems].present? ? params[:ecosystems].split("-") : []

    @all_ecosystems = ExtracatMetadata.search(:ecosystem).map(&:ecosystem).compact.sort.uniq

    @variable_filtered = params[:variable_filters].present? ? params[:variable_filters].split("-") : []

    all_variables_before = ExtracatMetadata.group(:variable_name).select(:variable_name).order(:variable_name => "ASC").to_a

    @all_variables = []
    all_variables_before.each do |var_item|
      if var_item[:variable_name].present?
        @all_variables.push(var_item[:variable_name])
      end
    end
    @all_variables.compact.uniq.sort

    @all_search_terms = params[:keywords].present? ? params[:keywords] : []
    @search_params = search_params.except("page")
    @total_search_count = @search.nil? ? 0 : @search.count

    @all_sub_topics = ExtracatMetadata.search(:subtopic).map(&:subtopic).compact.sort.uniq

    if @search.blank? == false
      @results = @search.page(params[:page])
      @min_date = @search.map(&:begin_date).min
      @max_date = @search.map(&:end_date).max
      @search_term = params[:keywords]

      @raw_sites = ExtracatMetadata.search(:site_name).map(&:site_name).compact.sort.uniq
      @the_sites = @raw_sites.first(10)
      @more_sites = @raw_sites - @the_sites if @raw_sites.present?
      @variable_names = ExtracatMetadata.search(search_params).map(&:variable_name).compact.sort.uniq
      @sub_topics = ExtracatMetadata.search(search_params).map(&:subtopic).compact.sort.uniq
      @biome_before_split = ExtracatMetadata.search(search_params).map(&:biome).compact
      @biome = []
      @biome_before_split.each do |biome|
        if biome
          item = biome.split("|")
          if item.kind_of?(Array)
            @biome.concat(item)
          else
            @biome << item
          end
        end
      end

      @biome.sort.uniq

      @ecosystems = ExtracatMetadata.search(search_params).map(&:ecosystem).compact.sort.uniq
      @topics = ExtracatMetadata.search(search_params).map(&:topic).compact.sort.uniq

      if !params[:keywords].present? and !params[:site_filters].present? and !params[:subtopics].present? and !params[:topics].present? and !params[:variable_filters].present? and !params[:biome].present? and !params[:ecosystems].present?
        @results = nil
        @total_search_count = 0
      end

    else

      @search_term = params[:keywords]
      @min_date = params[:min_date]
      @max_date = params[:max_date]
      @raw_sites = @sites_filtered
      @the_sites = @raw_sites.first(10)
      @more_sites = @raw_sites - @the_sites if @raw_sites.present?
      @variable_names = @variable_filters
      @sub_topics = @subtopics_filtered
      @biome = @biome_filtered
      @ecosystems = @ecosystems_filtered
      @topics = @topics_filtered

      @results = nil
      @total_search_count = 0
    end

  end
  def show
    @print = params[:print].present?
    @id = params[:id]
    @data_record, @data = ExtracatMetadata.get_values(@id)

    ident_array = @data_record.docid.split('.')
    response = open("https://pasta.lternet.edu/package/data/eml/#{ident_array[0]}/#{ident_array[1]}/newest").read

    doiResp = open("https://pasta.lternet.edu/package/doi/eml/#{ident_array[0]}/#{ident_array[1]}/#{ident_array[2]}").read

    @data_url = "https://pasta.lternet.edu/package/data/eml/#{ident_array[0]}/#{ident_array[1]}/newest/#{response}"
    @metadata_url = "https://pasta.lternet.edu/package/metadata/eml/#{ident_array[0]}/#{ident_array[1]}/newest"
    @show_lines = params[:shooby].blank? ? true : false
    @show_plots = params[:shonby].blank? ? true : false
    if params[:both_off].present?
      if (@show_plots.present? && @show_lines.present?) && (params[:both_off] == "true")
        @show_lines = false
        @show_plots = false
      elsif (@show_plots.blank? && @show_lines.blank?) && params[:both_off] == "false"
        @show_lines = true
        @show_plots = true
      end
    end
    respond_to do |format|
      format.html
      format.csv do
          @csv_string = CSV.generate do |csv|

          # header row
            csv << [@data_record.timescale.gsub("ly", ""), @data_record.variable_name]
            # data rows
            @data.each do |datum|
              csv << [datum[:year], datum[:observation]]
            end
          end
          # send the data to the browser
          send_data @csv_string,
          :type => 'text/plain; charset=iso-8859-1; header=present',
          :disposition => "attachment; filename=#{@data_record.variable_name}--#{@data_record.begin_date.to_date.year}-#{@data_record.end_date.to_date.year}.csv"
      end
    end
  end

  def metadata
    puts "Here are the Params: #{params}"
    if params[:dataset]
      begin
        doc = Nokogiri::XML(open(params[:dataset].to_s)) do |config|
          config.options = Nokogiri::XML::ParseOptions::NOERROR
        end
        @xml_hash = Hash.from_xml("<root>#{doc.to_s}</root>");
      rescue => ex
        puts "error message : #{ex.message}"
      end

    end
  end

  def data
    @data_record, @data = ExtracatMetadata.get_values(params[:id])

    @csv_string = CSV.generate do |csv|

      # header row
      csv << [@data_record.timescale.gsub("ly", ""), @data_record.variable_name]
      # data rows
      @data.each do |datum|
        csv << [datum[:year], datum[:observation]]
      end
    end

    @csv_table = CSV.new(@csv_string)
    puts "here is the array : #{@csv_table}"
  end

  def test

  end

  private

  def search_params
    params.permit(:site_name, :id, :search_term, :keywords, :page, :variable_filters, :site, :min_date, :max_date, :site_filters, :topic,
    :topics, :subtopics, :biome, :biome_filters, :ecosystems, :ecosytem_filters)
  end

  def search_setup
    @sites = ExtracatMetadata.sites
    @ids = ExtracatMetadata.limit(20)
  end

  def get_layout
    if params[:print]
      "print"
    else
      "application"
    end
  end

end
