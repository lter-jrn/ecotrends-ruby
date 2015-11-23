class DatastoresController < ApplicationController
  def index
    @datastores = SavedDataset.where(iduser: current_user_id) #.includes(:extracat_metadata)
  end


  def compare
    @data = setup_dataset(params)
    #binding.pry
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

  def destroy
    is_not = "not "
    @saved_dataset = SavedDataset.where(idsave: params[:id])
    if @saved_dataset.present?
      @saved_dataset.first.destroy
      is_not = ""
    end

    redirect_to datastores_path, notice: "Dataset was #{is_not}deleted"
  end
  # 1. based on the docid from the site, we have to know the label range of the # of years from all comparable graphs.
  # 2. based on the label range, we can search for the 'year' it is available and print obs in the data array or nil
  # 3. continue for all of them in the docids array from the site.
  def setup_dataset(params)
    #labels need a min and max the year array and then to print out each one in the range...maybe?
    @dataset_array, @labels = ExtracatMetadata.get_values_by_docid(params[:docids])
    {      labels: @labels,      datasets: set_dataset_array(@labels)   }
  end
  #probably don't need map but just going with flow.
  def set_dataset_array(labels)
    puts labels
    arr = []
    @dataset_array.each_with_index do |data_set, index|
      arr << prettify_data_set(data_set, index, labels)
    end
    puts arr
    arr
  end

  def prettify_data_set(data_set, index = 0, labels)
    colour = pick_colour(index)
    {
      label: data_set[:record].variable_name,
      fillColor: "rgba(#{colour},0.2)",
      strokeColor: "rgba(#{colour},1)",
      pointColor: "rgba(#{colour},1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(#{colour},1)",
      data: clean_up_data(data_set, labels)
        }
  end

  def clean_up_data(data_set, labels)
    puts " I am dataset: #{data_set}"
    labels.map do |year|
      data_set[:datum].has_key?(year.to_s) ? data_set[:datum][year.to_s] : nil
    end
  end

  def pick_colour(index)
    # binding.pry
    # colour1 = index % 3 ? colour_value(index) : 0
    # colour2 = index % 2 ? colour_value(index) : 0
    # colour3 = index % 5 ? colour_value(index) : 0
    # "#{colour1},#{colour2},#{colour3}"
    case index
    when 0
      "255, 0, 0"
    when 1
      "0, 255, 0"
    when 2
      "0, 0, 255"
    else
      "#{100 - index}, #{index}, #{index + 150}"
    end

  end

  # def colour_value(index)
  #   puts index
  #   (255 - index)/(index == 0 ? 1 : index)
  # end
end