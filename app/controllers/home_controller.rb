class HomeController < ApplicationController
  skip_before_filter :allow_only_signed_in
  layout "search", :only => :search
  layout "graph", :only => :graph
  require 'json'

  def index
  end

  def about
  end
  def graph

  end
  def glossary
    @terms = [{"Abundance" => "The number of individuals or the representation of the number of individuals of a species in a particular ecosystem. Unit: number of individuals/sampling area or sampling effort."},
{"Biogeochemistry" => "The biogeochemistry of ecosystems involves the movement or cycling of elements (e.g., sulfur, carbon, nitrogen) and compounds (e.g., water) through the biotic (e.g., plants, animals, microbes) and abiotic (e.g., soils, atmosphere) components of an ecosystem."},
{"Biomass" => "The mass per unit area of living material (plants, animals, microbes). Unit: g/m2 or kg/ha."},
{"Cover" => "The amount or proportion of surface area occupied by plants or animals. Unit: %."},
{"Decomposition" => "The breakdown of organic matter (e.g., litter) accompanied by the release of carbon dioxide and other inorganic compounds. It is a key process in nutrient cycling."},
{"Density" => "The number of individuals found in an area. Unit: #/m2 or #/ha."},
{"Fire disturbance" => "Area burned by a fire. Unit: ha, or % of area."},
{"Human population density" => "Number of people per unit area."},
{"Human population size" => "Number of people living in a specified geographic area at a specified time."},
{"Ice duration" => "The number of days in a year when a water body (e.g., lake, a part of an ocean) is covered by ice. Unit: days/year."},
{"Land use" => "Land use is the human modification of natural environment or wilderness into built environment such as farmland, pastures, and settlements."},
{"Litter" => "Recently fallen plant material that is only partially decomposed. Unit: %."},
{"Net primary production" => "The amount of carbon or energy (usually measured as biomass) fixed by primary producers (e.g., plants, algae) minus their respiratory loss. It can be used for growth and reproduction of primary producers, and is available for consumption by herbivores. Unit: g/m2/yr."},
{"Palmer drought severity index" => "Developed by Wayne Palmer in the 1960s and uses temperature and rainfall information in a formula to determine dryness. It uses a 0 as normal, and drought is shown in terms of minus numbers; for example, minus 2 is moderate drought, minus 3 is severe drought, and minus 4 is extreme drought."},
{"Plant phenology" => "The timing of life history events, such as initiation of growth, flowering and dormancy."},
{"Precipitation" => "The amount and pattern of rainfall and snowfall. Unit: cm"},
{"Precipitation chemistry" => "Concentration or total amount of an element (e.g., nitrogen, sulfur, calcium, chloride, phosphate) in precipitation. It can be expressed as volume-weighted concentration or deposition. Volume-weighted concentration is concentration per unit volume of precipitation (mg/L). It is measured on a subsample of precipitation and then converted to total volume of precipitation collected. Deposition is total amount of an element per unit of land area (kg/ha). It is converted from volume-weighted concentration based on the area receiving precipitation."},
{"Primary production" => "The amount of carbon or energy (usually measured as biomass) transformed from CO2 to organic carbon by primary producers (e.g., plants, algae) per unit area in a specified time period, usually seasonally or annually. Unit: g/m2/yr. Unit: cm"},
{"Sea level" => "Annual mean sea level is defined as the annual arithmetic means of hourly heights relative to the National Tidal Datum Epoch (i.e., the most recent mean sea level datum established by CO-OPS currently the mean sea level 1983-2001). Unit: m."},
{"Secchi disk" => "A circular disk created in 1865 by Pietro Angelo Secchi. It is used to measure water transparency in oceans and lakes. The disc is mounted on a pole or line, and lowered slowly down in the water. The depth at which the pattern on the disk is no longer visible is taken as a measure of the transparency of the water."},
{"Soil moisture" => "The total amount of water, including the water vapor, in an unsaturated soil. Unit: % by volume."},
{"Soil radiation" => "The visible and near visible (ultra violet and near infrared) radiation emitted from the sun received per unit area. Unit: MJ/m2 The temperature of soil at a specified depth. Unit: oC"},
{"Species diversity" => "Species diversity is a measure of the diversity within an ecological community that incorporates both species richness and the evenness of species' abundances."},
{"Species richness" => "The number of species in a community. Unit: number of species/sampling area or sampling effort."},
{"Storm disturbance" => "Number of major storms or hurricanes per year."},
{"Stream flow" => "Measured as stream discharge here, which is the volume of water moving down a stream or river per unit of time. Unit: L/s"},
{"Surface water chemistry" => "Concentration of an element (e.g., nitrogen, sulfur, calcium, chloride, phosphate) per unit volume of water in surface water (e.g., stream, lake, coastal water). Unit: mg/L."},
{"Water table" => "The underground depth at which point the ground is totally saturated with water. Unit: m."},
{"Water temperature" => "Unit: oC"},
{"Water turbidity" => "A measure of the degree to which the water looses its transparency due to the presence of suspended particulates. It is commonly measured by using a Secchi disk. Unit: m."},
{"Wind speed" => "Unit: m/s"}]
  end

  def infographics
    puts Rails.root
    @file = File.read("#{Rails.root}/public/images/infographics/infographics.json")
    @json_hash = JSON.parse(@file)
    @imagePath = ""
    # puts "here is the JSON :"
    #
    # @json_hash["images"].each do |key|
    #
    #   puts "key: #{key['image']['name']}"
    #
    # end
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

  def policies

  end
end
