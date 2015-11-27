require 'csv'
class SearchController < ApplicationController
  before_filter :search_setup, :only => [:index]
  layout :get_layout, only: :show
  def index
    @search = ExtracatMetadata.search(search_params)
    @variables = []
    @the_sites = []
    unless @search.blank?
      @results = @search.page(params[:page])
      @search_term = params["keywords"]
      @the_sites = ExtracatMetadata.search(search_params).map(&:site_name).sort.uniq
      @variables = ExtracatMetadata.search(search_params).map(&:variable_name).sort.uniq
    end
  end
  def show
    @data_record, @data = ExtracatMetadata.get_values(params[:id])
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
    params.permit(:site_name, :id, :keywords, :page, :variable_name, :site)
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
