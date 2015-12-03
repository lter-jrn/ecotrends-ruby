class SplashController < ApplicationController
  skip_before_filter :allow_only_signed_in
  def index
    @dataset_count ||= ExtracatMetadata.count
    @site_count ||= ExtracatMetadata.sites.count
  end
end
