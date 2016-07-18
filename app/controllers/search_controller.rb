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
    @topics = ExtracatMetadata.group(:topic).select(:topic)
    @biome = ExtracatMetadata.group(:biome).select(:biome)
    #starts here: Used to split the locations into groups of 20
    items, @items = @items.dup, []
    @items.push(items.shift(20)) until items.empty?
    # ends here
    @variable_name = []
    @the_sites = []
    @sites_filtered = params[:site_filter].present? ? params[:site_filter].split() : []
    @subtopics_filtered = params[:subtopic].present? ? params[:subtopic].split("-") : []
    @topics_filtered = params[:topic].present? ? params[:topic].split("-") : []
    @biome_filtered = params[:biome].present? ? params[:biome].split("-") : []
    @variable_filtered = params[:variable_filters].present? ? params[:variable_filters].split("-") : []
    @all_search_terms = params[:keywords].present? ? params[:keywords] : []
    @search_params = search_params.except("page")
    @total_search_count = @search.nil? ? 0 : @search.count


    unless @search.blank?
      @results = @search.page(params[:page])
      @min_date = params[:min_date] || @search.map(&:begin_date).min
      @max_date = params[:max_date] || @search.map(&:end_date).max
      @search_term = params[:keywords]
      @raw_sites = ExtracatMetadata.search(search_params).map(&:site_name).sort.uniq
      @the_sites = @raw_sites.first(10)
      @more_sites = @raw_sites - @the_sites if @raw_sites.present?
      @variable_names = ExtracatMetadata.search(search_params).map(&:variable_name).sort.uniq
      @sub_topics = ExtracatMetadata.search(search_params).map(&:subtopic).sort.uniq

      if !params[:keywords].present? and !params[:site_filters].present? and !params[:subtopics].present? and !params[:topic].present? and !params[:variable_filters].present? and !params[:biome].present?
        @results = nil
        @total_search_count = 0
      end



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
    params.permit(:site_name, :id, :search_term, :keywords, :page, :variable_filters, :site, :min_date, :max_date, :site_filters, :topic, :subtopics, :biome, :biome_filters)
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
