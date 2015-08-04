class SearchController < ApplicationController
  before_filter :search_setup
  def index

  end
  def show
    @data = ExtracatMetadata.get_values(params[:id])
  end
  def create
    @results = ExtracatMetadata.search(search_params)
    @search_term = params["keywords"]
    respond_to do |format|
      format.html { render :index }
    end
  end

  def search_params
    params.permit(:site_name, :id, :keywords)
    #binding.pry
  end
  def search_setup
    @sites = ExtracatMetadata.sites
    @ids = ExtracatMetadata.limit(20)
  end
end
