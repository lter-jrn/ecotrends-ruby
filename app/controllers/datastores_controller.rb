class DatastoresController < ApplicationController
  def index
    @datastores = SavedDataset.where(iduser: current_user_id) #.includes(:extracat_metadata)
  end

  def create
    if params[:docid].present? && current_user.present?
      s = SavedDataset.new
      s.iduser = current_user_id
      s.docid = params[:docid] #see if this works
      is_not = s.save ? "" : "not "
    end
    redirect_to datastores_path, notice: "Dataset was #{is_not}saved"
  end
end
