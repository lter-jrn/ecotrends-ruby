require 'csv'
class SearchController < ApplicationController
  before_filter :search_setup, :only => [:index]
  layout :get_layout, only: :show
  def index
    @search = ExtracatMetadata.search(search_params)
    @items = ExtracatMetadata.group(:site, :site_name).select(:site, :site_name).order(:site_name => "ASC").to_a
    #starts here: Used to split the locations into groups of 20
    items, @items = @items.dup, []
    @items.push(items.shift(20)) until items.empty?
    # ends here
    @variables = []
    @the_sites = []
    @sites_filtered = params[:site_filter].present? ? params[:site_filter].split() : []
    unless @search.blank?
      @results = @search.page(params[:page])
      @min_date = params[:min_date] || @search.map(&:begin_date).min
      @max_date = params[:max_date] || @search.map(&:end_date).max
      @search_term = params[:keywords]
      @raw_sites = ExtracatMetadata.search(search_params).map(&:site_name).sort.uniq
      @the_sites = @raw_sites.first(10)
      @more_sites = @raw_sites - @the_sites if @raw_sites.present?
      @variables = ExtracatMetadata.search(search_params).map(&:subtopic).sort.uniq
    end
  end
  def show
    @data_record, @data = ExtracatMetadata.get_values(params[:id])
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

  def test

  end

  private

  def search_params
    params.permit(:site_name, :id, :keywords, :page, :variable_name, :site, :min_date, :max_date, :site_filter)
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
