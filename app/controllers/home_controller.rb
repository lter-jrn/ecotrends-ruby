class HomeController < ApplicationController
  skip_before_filter :allow_only_signed_in
	layout "search", :only => :search
  def index
  end

  def about
  end

  def glossary
  end

  def infographics
  end

  def datastore
  end

  def search
  end

  def tester
  end

  def comparison
  end

  def dataset
  end

  def dataset2
  end
end
