class DatastoresController < ApplicationController
  def index
    @datastores = SavedDataset.where(iduser: current_user_id) #.includes(:extracat_metadata)
  end

  def create
    is_not = "not "
    if params[:docids].present? && current_user.present?
      params[:docids].each do |doc|
        s = SavedDataset.new
        s.iduser = current_user_id
        s.docid = doc #see if this works
        is_not = "" if s.save
      end

    end
    redirect_to datastores_path, notice: "Dataset was {is_not}saved"
  end
end
