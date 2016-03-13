module AddressHelper

  def formatted_address(address_hash)
    delivery_point = address_hash["deliveryPoint"]
    city = address_hash["city"]
    state = address_hash["administrativeArea"]
    zip = address_hash["postalCode"]
    contry = address_hash["contry"]

    html_string = ""

    if delivery_point.nil? == false
      if delivery_point.kind_of?(String) == true
        delivery_point = delivery_point.split(",")
      end

      delivery_point.each_with_index do |point, index|

        if index < 1
          html_string += "#{point}, "
        else
          html_string += "#{point}</br>"
        end

      end
    end

    html_string += "#{city}, #{state} #{zip} #{contry}</br>"

  end
end