/**
  *   '$RCSfile$'
  *   Copyright:   2005 University of New Mexico
  *
  *   '$Author: stummalapalli $'
  *   '$Date: 2010-07-13 11:14:12 -0600 (Tue, 13 Jul 2010) $'
  *   '$Revision: 2866 $'
  * 
  * This program is free software; you can redistribute it and/or modify
  * it under the terms of the GNU General Public License as published by
  * the Free Software Foundation; either version 2 of the License, or
  * (at your option) any later version.
  *
  * This program is distributed in the hope that it will be useful,
  * but WITHOUT ANY WARRANTY; without even the implied warranty of
  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  * GNU General Public License for more details.
  *
  * You should have received a copy of the GNU General Public License
  * along with this program; if not, write to the Free Software
  * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
  *
  */
  var markers = [
  {
    'lat':  44.21,
    'lon':  -122.26,
    'id':   "AND",
    'site': "H. J. Andrews Experimental Forest",
    'url':  "http://andrewsforest.oregonstate.edu/",
    'pdf':  "AND_SiteDesc.pdf",
    'html': "<b>H. J. Andrews Experimental Forest, Oregon, USA.</b><hr /><a href='#H. J. Andrews Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(394)</a> <br/><a href='http://andrewsforest.oregonstate.edu/' target='_blank'>http://andrewsforest.oregonstate.edu/</a><br/><a href='./assets/pdfs/AND_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service,<br/>Long Term Ecological Research Network"
},

{
    'lat':  68.63,
    'lon':  -149.60,
    'id':   "ARC",
    'site': "Arctic LTER",
    'url':  "http://ecosystems.mbl.edu/ARC/",
    'pdf':  "ARC_SiteDesc.pdf",
    'html': "<b>Arctic, Massachusetts, USA.</b><hr /><a href='#Arctic LTER' onClick='keywordSearch()' class='searchsubcat'>Datasets(74)</a><br/><a href='http://ecosystems.mbl.edu/ARC/' target='_blank'>http://ecosystems.mbl.edu/ARC/</a><br/><a href='./assets/pdfs/ARC_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  35.48,
    'lon':  -82.63,
    'id':   "BEN",
    'site': "Bent Creek Experimental Forest",
    'url':  "http://www.srs.fs.usda.gov/bentcreek/",
    'pdf':  "BEN_SiteDesc.pdf",
    'html': "<b>Bent Creek Experimental Forest, North Carolina, USA.</b><hr />  <a href='#Bent Creek Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(86)</a> <br/><a href='http://www.srs.fs.usda.gov/bentcreek/' target='_blank'>http://www.srs.fs.usda.gov/bentcreek/</a><br/><a href='./assets/pdfs/BEN_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  39.10,
    'lon':  -76.30,
    'id':   "BES",
    'site': "Baltimore Ecosystem Study LTER",
    'url':  "http://www.beslter.org/",
    'pdf':  "BES_SiteDesc.pdf",
    'html': "<b>Baltimore Ecosystem Study LTER, Maryland, USA.</b><hr /> <a href='#Baltimore Ecosystem Study LTER' onClick='keywordSearch()' class='searchsubcat'>Datasets(158)</a><br/><a href='http://www.beslter.org/' target='_blank'>http://www.beslter.org/</a><br/><a href='./assets/pdfs/BES_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  40.67,
    'lon':  -121.17,
    'id':   "BLA",
    'site': "Blacks Mountain Experimental Forest",
    'url':  "http://www.fs.fed.us/psw/ef/blacks_mountain/",
    'pdf':  "BLA_SiteDesc.pdf",
    'html': "<b>Blacks Mountain Experimental Forest, California, USA.</b><hr /><a href='#Blacks Mountain Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(48)</a><br/><a href='http://www.fs.fed.us/psw/ef/blacks_mountain/' target='_blank'>http://www.fs.fed.us/psw/ef/blacks_mountain/</a><br/><a href='./assets/pdfs/BLA_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  64.80,
    'lon':  -148.00,
    'id':   "BNZ",
    'site': "Bonanza Creek",
    'url':  "http://www.lter.uaf.edu/",
    'pdf':  "BNZ_SiteDesc.pdf",
    'html': "<b>Bonanza Creek, Alaska, USA.</b><hr /><a href='#Bonanza Creek' onClick='keywordSearch()' class='searchsubcat'>Datasets(70)</a><br/><a href='http://www.lter.uaf.edu/' target='_blank'>http://www.lter.uaf.edu/</a><br/><a href='./assets/pdfs/BNZ_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service,<br/>Long Term Ecological Research Network"
},
{
    'lat':  33.43,
    'lon':  -111.93,
    'id':   "CAP",
    'site': "Central Arizona - Phoenix Urban LTER",
    'url':  "http://caplter.asu.edu/",
    'pdf':  "CAP_SiteDesc.pdf",
    'html': "<b>Central Arizona - Phoenix LTER, Arizona, USA.</b><hr /><a href='#Central Arizona - Phoenix LTER' onClick='keywordSearch()' class='searchsubcat'>Datasets(119)</a><br/><a href='http://caplter.asu.edu/' target='_blank'>http://caplter.asu.edu/</a><br/><a href='./assets/pdfs/CAP_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  32.87,
    'lon':  -120.28,
    'id':   "CCE",
    'site': "California Current Ecosystem",
    'url':  "http://ccelter.sio.ucsd.edu/",
    'pdf':  "CCE_SiteDesc.pdf",
    'html': "<b>California Current Ecosystem, California, USA.</b><hr /><a href='#California Current Ecosystem' onClick='keywordSearch()' class='searchsubcat'>Datasets(68)</a><br/><a href='http://ccelter.sio.ucsd.edu/' target='_blank'>http://ccelter.sio.ucsd.edu/</a><br/><a href='./assets/pdfs/CCE_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  45.40,
    'lon':  -93.20,
    'id':   "CDR",
    'site': "Cedar Creek Natural History Area",
    'url':  "http://www.lter.umn.edu/",
    'pdf':  "CDR_SiteDesc.pdf",
    'html': "<b>Cedar Creek Natural History Area LTER, Minnesota, USA.</b><hr /><a href='#Cedar Creek Natural History Area LTER' onClick='keywordSearch()' class='searchsubcat'>Datasets(2363)</a><br/><a href='http://www.lter.umn.edu/' target='_blank'>http://www.lter.umn.edu/</a><br/><a href='./assets/pdfs/CDR_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  45.07,
    'lon':  -123.97,
    'id':   "CHE",
    'site': "Cascade Head Experimental Forest",
    'url':  "http://www.fsl.orst.edu/chef/",
    'pdf':  "CHE_SiteDesc.pdf",
    'html': "<b>Cascade Head Experimental Forest, Oregon, USA.</b><hr /><a href='#Cascade Head Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(35)</a><br/><a href='http://www.fsl.orst.edu/chef/' target='_blank'>http://www.fsl.orst.edu/chef/</a><br/><a href='./assets/pdfs/CHE_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  33.03,
    'lon':  -91.95,
    'id':   "CRO",
    'site': "Crossett Experimental Forest",
    'url':  "http://www.srs.fs.usda.gov/4159/CEF.html",
    'pdf':  "CRO_SiteDesc.pdf",
    'html': "<b>Crossett Experimental Forest, Arizona, USA.</b><hr /><a href='#Crossett Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(69)</a><br/><a href='http://www.srs.fs.usda.gov/4159/CEF.html' target='_blank'>http://www.srs.fs.usda.gov/4159/CEF.html</a><br/><a href='./assets/pdfs/CRO_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  39.38,
    'lon':  -123.67,
    'id':   "CSP",
    'site': "Caspar Creek Experimental Watershed",
    'url':  "http://www.fs.fed.us/psw/ef/caspar_creek/",
    'pdf':  "CSP_SiteDesc.pdf",
    'html': "<b>Caspar Creek Experimental Watershed, California, USA.</b><hr /><a href='#Caspar Creek Experimental Watershed' onClick='keywordSearch()' class='searchsubcat'>Datasets(76)</a><br/><a href='http://www.fs.fed.us/psw/ef/caspar_creek/' target='_blank'>http://www.fs.fed.us/psw/ef/caspar_creek/</a><br/><a href='./assets/pdfs/CSP_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  35.00,
    'lon':  -83.50,
    'id':   "CWT",
    'site': "Coweeta",
    'url':  "http://coweeta.ecology.uga.edu/",
    'pdf':  "CWT_SiteDesc.pdf",
    'html': "<b>Coweeta, Georgia, USA.</b><hr /><a href='#Coweeta' onClick='keywordSearch()' class='searchsubcat'>Datasets(910)</a> <br/><a href='http://coweeta.ecology.uga.edu/' target='_blank'>http://coweeta.ecology.uga.edu/</a><br/><a href='./assets/pdfs/CWT_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service,<br/>Long Term Ecological Research Network"
},
{
    'lat':  43.53,
    'lon':  -119.02,
    'id':   "EOARC",
    'site': "Eastern Oregon Agricultural Research Center",
    'url':  "http://oregonstate.edu/dept/EOARC/",
    'pdf':  "EOARC_SiteDesc.pdf",
    'html': "<b>Eastern Oregon Agricultural Research Center, Oregon, USA.</b><hr /><a href='#Eastern Oregon Agricultural Research Center' onClick='keywordSearch()' class='searchsubcat'>Datasets(10)</a><br/><a href='http://oregonstate.edu/dept/EOARC/' target='_blank'>http://oregonstate.edu/dept/EOARC/</a><br/><a href='./assets/pdfs/EOARC_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>Agricultural Research Service"
},
{
    'lat':  25.47,
    'lon':  -80.85,
    'id':   "FCE",
    'site': "Florida Coastal Everglades",
    'url':  "http://fcelter.fiu.edu/",
    'pdf':  "FCE_SiteDesc.pdf",
    'html': "<b>Florida Coastal Everglades, Florida, USA.</b><hr /><a href='#Florida Coastal Everglades' onClick='keywordSearch()' class='searchsubcat'>Datasets(2203)</a><br/><a href='http://fcelter.fiu.edu/' target='_blank'>http://fcelter.fiu.edu/</a><br/><a href='./assets/pdfs/FCE_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  39.05,
    'lon':  -79.69,
    'id':   "FER",
    'site': "Fernow Experimental Forest",
    'url':  "http://www.fs.fed.us/ne/parsons/fefhome.htm",
    'pdf':  "FER_SiteDesc.pdf",
    'html': "<b>Fernow Experimental Forest, West Virginia, USA.</b><hr /><a href='#Fernow Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(138)</a><br/><a href='http://www.fs.fed.us/ne/parsons/fefhome.htm' target='_blank'>http://www.fs.fed.us/ne/parsons/fefhome.htm</a><br/><a href='./assets/pdfs/FER_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  39.91,
    'lon':  -105.88,
    'id':   "FRA",
    'site': "Fraser Experimental Forest",
    'url':  "http://www.fs.fed.us/rm/fraser/",
    'pdf':  "FRA_SiteDesc.pdf",
    'html': "<b>Fraser Experimental Forest, Colorado, USA.</b><hr /><a href='#Fraser Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(66)</a><br/><a href='http://www.fs.fed.us/rm/fraser/' target='_blank'>http://www.fs.fed.us/rm/fraser/</a><br/><a href='./assets/pdfs/FRA_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  46.26,
    'lon':  -105.53,
    'id':   "FTK",
    'site': "Fort Keogh",
    'url':  "http://www.ars.usda.gov/Main/site_main.htm?modecode=54-34-00-00",
    'pdf':  "FTK_SiteDesc.pdf",
    'html': "<b>Fort Keogh, Montana, USA.</b><hr /><a href='#Fort Keogh' onClick='keywordSearch()' class='searchsubcat'>Datasets(153)</a><br/><a href='http://www.ars.usda.gov/Main/site_main.htm?modecode=54-34-00-00' target='_blank'>http://www.ars.usda.gov/Main/site_main.htm?modecode=54-34-00-00</a><br/><a href='./assets/pdfs/FTK_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>Agricultural Research Service"
},
{
    'lat':  31.43,
    'lon':  -81.37,
    'id':   "GCE",
    'site': "Georgia Coastal Ecosystems",
    'url':  "http://gce-lter.marsci.uga.edu/lter/",
    'pdf':  "GCE_SiteDesc.pdf",
    'html': "<b>Georgia Coastal Ecosystems, Georgia, USA.</b><hr /><a href='#Georgia Coastal Ecosystems' onClick='keywordSearch()' class='searchsubcat'>Datasets(380)</a><br/><a href='http://gce-lter.marsci.uga.edu/lter/' target='_blank'>http://gce-lter.marsci.uga.edu/lter/</a><br/><a href='./assets/pdfs/GCE_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  41.38,
    'lon':  -106.26,
    'id':   "GLA",
    'site': "Glacier Lakes Ecosystems Experiments Site",
    'url':  "http://www.fs.fed.us/rmrs/experimental-forests/glacier-lake-ecosystem-experiments-site/",
    'pdf':  "GLA_SiteDesc.pdf",
    'html': "<b>Glacier Lakes Ecosystems Experiments Site, Colorado, USA.</b><hr /><a href='#Glacier Lakes Ecosystems Experiments Site' onClick='keywordSearch()' class='searchsubcat'>Datasets(91)</a><br/><a href='http://www.fs.fed.us/rmrs/experimental-forests/glacier-lake-ecosystem-experiments-site/' target='_blank'>http://www.fs.fed.us/rmrs/experimental-forests/glacier-lake-ecosystem-experiments-site/</a><br/><a href='./assets/pdfs/GLA_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  34.88,
    'lon':  -98.00,
    'id':   "GRL",
    'site': "Grazinglands Research Laboratory",
    'url':  "http://ars.usda.gov/Main/site_main.htm?modecode=62-18-00-00",
    'pdf':  "GRL_SiteDesc.pdf",
    'html': "<b>Grazinglands Research Laboratory, Oklahoma, USA.</b><hr /><a href='#Grazinglands Research Laboratory' onClick='keywordSearch()' class='searchsubcat'>Datasets(78)</a><br/><a href='http://ars.usda.gov/Main/site_main.htm?modecode=62-18-00-00' target='_blank'>http://ars.usda.gov/Main/site_main.htm?modecode=62-18-00-00</a><br/><a href='./assets/pdfs/GRL_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>Agricultural Research Service"
},
{
    'lat':  31.06,
    'lon':  -97.35,
    'id':   "GSW",
    'site': "Grassland Soil and Water Research Laboratory",
    'url':  "http://www.ars.usda.gov/Main/site_main.htm?modecode=62-06-00-00",
    'pdf':  "GSWRL_SiteDesc.pdf",
    'html': "<b>Grassland Soil and Water Research Laboratory, Texas, USA.</b><hr /><a href='#Grassland Soil and Water Research Laboratory' onClick='keywordSearch()' class='searchsubcat'>Datasets(63)</a><br/><a href='http://www.ars.usda.gov/Main/site_main.htm?modecode=62-06-00-00' target='_blank'>http://www.ars.usda.gov/Main/site_main.htm?modecode=62-06-00-00</a><br/><a href='./assets/pdfs/GSWRL_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>Agricultural Research Service"
},
{
    'lat':  30.63,
    'lon':  -89.05,
    'id':   "HAR",
    'site': "Harrison Experimental Forest",
    'url':  "http://www.srs.fs.usda.gov/organization/exforest/",
    'pdf':  "HAR_SiteDesc.pdf",
    'html': "<b>Harrison Experimental Forest, Mississippi, USA.</b><hr /><a href='#Harrison Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(36)</a><br/><a href='http://www.srs.fs.usda.gov/organization/exforest/' target='_blank'>http://www.srs.fs.usda.gov/organization/exforest/</a><br/><a href='./assets/pdfs/HAR_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  43.94,
    'lon':  -71.75,
    'id':   "HBR",
    'site': "Hubbard Brook",
    'url':  "http://www.hubbardbrook.org/",
    'pdf':  "HBR_SiteDesc.pdf",
    'html': "<b>Hubbard Brook, New Hampshire, USA.</b><hr /><a href='#Hubbard Brook' onClick='keywordSearch()' class='searchsubcat'>Datasets(231)</a><br/><a href='http://www.hubbardbrook.org/' target='_blank'>http://www.hubbardbrook.org/</a><br/><a href='./assets/pdfs/HBR_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  42.50,
    'lon':  -72.20,
    'id':   "HFR",
    'site': "Harvard Forest",
    'url':  "http://harvardforest.fas.harvard.edu/",
    'pdf':  "HFR_SiteDesc.pdf",
    'html': "<b>Harvard Forest, Massachusetts, USA.</b><hr /><a href='#Harvard Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(1070)</a><br/><a href='http://harvardforest.fas.harvard.edu/' target='_blank'>http://harvardforest.fas.harvard.edu/</a><br/><a href='./assets/pdfs/HFR_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  32.62,
    'lon':  -106.74,
    'id':   "JRN",
    'site': "Jornada Basin",
    'url':  "http://jornada.nmsu.edu/lter",
    'pdf':  "JRN_SiteDesc.pdf",
    'html': "<b>Jornada Basin, New Mexico, USA.</b><hr /><a href='#Jornada Basin' onClick='keywordSearch()' class='searchsubcat'>Datasets(133)</a><br/><a href='http://jornada.nmsu.edu/lter' target='_blank'>http://jornada.nmsu.edu/lter</a><br/><a href='./assets/pdfs/JRN_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>Agricultural Research Service,<br/>Long Term Ecological Research Network"
},
{
    'lat':  42.40,
    'lon':  -85.40,
    'id':   "KBS",
    'site': "Kellogg Biological Station",
    'url':  "http://lter.kbs.msu.edu/",
    'pdf':  "KBS_SiteDesc.pdf",
    'html': "<b>Kellogg Biological Station, Michigan, USA.</b><hr /><a href='#Kellogg Biological Station' onClick='keywordSearch()' class='searchsubcat'>Datasets(945)</a><br/><a href='#Blacks Mountain Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(45)</a><a href='http://lter.kbs.msu.edu/' target='_blank'>http://lter.kbs.msu.edu/</a><br/><a href='./assets/pdfs/KBS_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  39.10,
    'lon':  -96.40,
    'id':   "KNZ",
    'site': "Konza Prairie",
    'url':  "http://www.konza.ksu.edu/KNZ/default.aspx",
    'pdf':  "KNZ_SiteDesc.pdf",
    'html': "<b>Konza Prairie, Kansas, USA.</b><hr /><a href='#Konza Prairie' onClick='keywordSearch()' class='searchsubcat'>Datasets(333)</a><br/><a href='http://www.konza.ksu.edu/KNZ/default.aspx' target='_blank'>http://www.konza.ksu.edu/KNZ/default.aspx</a><br/><a href='./assets/pdfs/KNZ_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  18.30,
    'lon':  -65.80,
    'id':   "LUQ",
    'site': "Luquillo Experimental Forest",
    'url':  "http://luq.lternet.edu/",
    'pdf':  "LUQ_SiteDesc.pdf",
    'html': "<b>Luquillo Experimental Forest, Puerto Rico, USA.</b><hr /><a href='#Luquillo Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(377)</a><br/><a href='http://luq.lternet.edu/' target='_blank'>http://luq.lternet.edu/</a><br/><a href='./assets/pdfs/LUQ_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service,<br/>Long Term Ecological Research Network"
},
{
    'lat':  40.29,
    'lon':  -105.66,
    'id':   "LVW",
    'site': "Loch Vale Watershed Research Project",
    'url':  "http://www.nrel.colostate.edu/projects/lvws/",
    'pdf':  "LVW_SiteDesc.pdf",
    'html': "<b>Loch Vale Watershed Research Project, Colorado, USA.</b><hr /><a href='#Loch Vale Watershed Research Project' onClick='keywordSearch()' class='searchsubcat'>Datasets(106)</a><br/><a href='http://www.nrel.colostate.edu/projects/lvws/' target='_blank'>http://www.nrel.colostate.edu/projects/lvws/m</a><br/><a href='./assets/pdfs/LVW_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Geological Survey"
},
{
    'lat':  47.53,
    'lon':  -93.47,
    'id':   "MAR",
    'site': "Marcell Experimental Forest",
    'url':  "http://nrs.fs.fed.us/ef/locations/mn/marcell/",
    'pdf':  "MAR_SiteDesc.pdf",
    'html': "<b>Marcell Experimental Forest, Minnesota, USA.</b><hr /><a href='#Marcell Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(96)</a><br/><a href='http://nrs.fs.fed.us/ef/locations/mn/marcell/' target='_blank'>http://nrs.fs.fed.us/ef/locations/mn/marcell/</a><br/><a href='./assets/pdfs/MAR_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  -77.00,
    'lon':  162.52,
    'id':   "MCM",
    'site': "McMurdo Dry Valleys",
    'url':  "http://www.mcmlter.org/",
    'pdf':  "MCM_SiteDesc.pdf",
    'html': "<b>McMurdo Dry Valleys,   ,Antarctica.</b><hr /><a href='#McMurdo Dry Valleys' onClick='keywordSearch()' class='searchsubcat'>Datasets(43)</a><br/><a href='http://www.mcmlter.org/' target='_blank'>http://www.mcmlter.org/</a><br/><a href='./assets/pdfs/MCM_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  -17.50,
    'lon':  -149.83,
    'id':   "MCR",
    'site': "Moorea Coral Reef",
    'url':  "http://mcr.lternet.edu/",
    'pdf':  "MCR_SiteDesc.pdf",
    'html': "<b>Moorea Coral Reef, Moorea Island, USA.</b><hr /><a href='#Moorea Coral Reef' onClick='keywordSearch()' class='searchsubcat'>Datasets(27)</a><br/><a href='http://mcr.lternet.edu/' target='_blank'>http://mcr.lternet.edu/</a><br/><a href='./assets/pdfs/MCR_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  46.00,
    'lon':  -89.70,
    'id':   "NTL",
    'site': "North Temperate Lakes",
    'url':  "http://lter.limnology.wisc.edu/",
    'pdf':  "NTL_SiteDesc.pdf",
    'html': "<b>North Temperate Lakes, Wisconsin, USA.</b><hr /><a href='#North Temperate Lakes' onClick='keywordSearch()' class='searchsubcat'>Datasets(585)</a><br/><a href='http://lter.limnology.wisc.edu/' target='_blank'>http://lter.limnology.wisc.edu/</a><br/><a href='./assets/pdfs/NTL_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  39.99,
    'lon':  -105.38,
    'id':   "NWT",
    'site': "Niwot Ridge",
    'url':  "http://culter.colorado.edu/NWT/",
    'pdf':  "NWT_SiteDesc.pdf",
    'html': "<b>Niwot Ridge, Colorado, USA.</b><hr /><a href='#Niwot Ridge' onClick='keywordSearch()' class='searchsubcat'>Datasets(106)</a><br/><a href='http://culter.colorado.edu/NWT/' target='_blank'>http://culter.colorado.edu/NWT/</a><br/><a href='./assets/pdfs/NWT_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  -64.70,
    'lon':  -64.00,
    'id':   "PAL",
    'site': "Palmer Station",
    'url':  "http://pal.lternet.edu/",
    'pdf':  "PAL_SiteDesc.pdf",
    'html': "<b>Palmer Station,   , Antarctica.</b><hr /><a href='#Palmer Station' onClick='keywordSearch()' class='searchsubcat'>Datasets(25)</a><br/><a href='http://pal.lternet.edu/' target='_blank'>http://pal.lternet.edu/</a><br/><a href='./assets/pdfs/PAL_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  42.76,
    'lon':  -70.89,
    'id':   "PIE",
    'site': "Plum Island Ecosystems",
    'url':  "http://ecosystems.mbl.edu/PIE/",
    'pdf':  "PIE_SiteDesc.pdf",
    'html': "<b>Plum Island Ecosystems, Massachusetts, USA.</b><hr /><a href='#Plum Island Ecosystems' onClick='keywordSearch()' class='searchsubcat'>Datasets(101)</a><br/><a href='http://ecosystems.mbl.edu/PIE/' target='_blank'>http://ecosystems.mbl.edu/PIE/</a><br/><a href='./assets/pdfs/PIE_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  48.35,
    'lon':  -116.68,
    'id':   "PRI",
    'site': "Priest River Experimental Forest",
    'url':  "http://forest.moscowfsl.wsu.edu/ef/pref/",
    'pdf':  "PRI_SiteDesc.pdf",
    'html': "<b>Priest River Experimental Forest, Idaho, USA.</b><hr /><a href='#Priest River Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(58)</a><br/><a href='http://forest.moscowfsl.wsu.edu/ef/pref/' target='_blank'>http://forest.moscowfsl.wsu.edu/ef/pref/</a><br/><a href='./assets/pdfs/PRI_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  43.60,
    'lon':  -116.19,
    'id':   "RCE",
    'site': "Reynolds Creek Experimental Watershed",
    'url':  "http://ars.usda.gov/Main/site_main.htm?modecode=53-62-00-00",
    'pdf':  "RCE_SiteDesc.pdf",
    'html': "<b>Reynolds Creek Experimental Watershed, Idaho, USA.</b><hr /><a href='#Reynolds Creek Experimental Watershed' onClick='keywordSearch()' class='searchsubcat'>Datasets(68)</a><br/><a href='http://ars.usda.gov/Main/site_main.htm?modecode=53-62-00-00' target='_blank'>http://ars.usda.gov/Main/site_main.htm?modecode=53-62-00-00</a><br/><a href='./assets/pdfs/RCE_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>Agricultural Research Service"
},
{
    'lat':  33.13,
    'lon':  -80.82,
    'id':   "SAN",
    'site': "Santee Experimental Forest",
    'url':  "http://www.srs.fs.usda.gov/charleston/santee/",
    'pdf':  "SAN_SiteDesc.pdf",
    'html': "<b>Santee Experimental Forest, South Carolina, USA.</b><hr /><a href='#Santee Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(68)</a><br/><a href='http://www.srs.fs.usda.gov/charleston/santee/' target='_blank'>http://www.srs.fs.usda.gov/charleston/santee/</a><br/><a href='./assets/pdfs/SAN_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  34.42,
    'lon':  -119.95,
    'id':   "SBC",
    'site': "Santa Barbara Coastal",
    'url':  "http://sbc.lternet.edu/",
    'pdf':  "SBC_SiteDesc.pdf",
    'html': "<b>Santa Barbara Coastal, California, USA.</b><hr /><a href='#Santa Barbara Coastal' onClick='keywordSearch()' class='searchsubcat'>Datasets(778)</a><br/><a href='http://sbc.lternet.edu/' target='_blank'>http://sbc.lternet.edu/</a><br/><a href='./assets/pdfs/SBC_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  34.35,
    'lon':  -106.88,
    'id':   "SEV",
    'site': "Sevilleta",
    'url':  "http://sev.lternet.edu/",
    'pdf':  "SEV_SiteDesc.pdf",
    'html': "<b>Sevilleta, New Mexico, USA.</b><hr /><a href='#Sevilleta' onClick='keywordSearch()' class='searchsubcat'>Datasets(414)</a><br/><a href='http://sev.lternet.edu/' target='_blank'>http://sev.lternet.edu/</a><br/><a href='./assets/pdfs/SEV_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network,<br/>U.S. Fish and Wildlife Service"
},
{
    'lat':  40.80,
    'lon':  -104.80,
    'id':   "SGS",
    'site': "Shortgrass Steppe",
    'url':  "http://sgs.cnr.colostate.edu/",
    'pdf':  "SGS_SiteDesc.pdf",
    'html': "<b>Shortgrass Steppe, Colorado, USA.</b><br/><a href='#Shortgrass Steppe' onClick='keywordSearch()' class='searchsubcat'>Datasets(420)</a><br/><a href='http://sgs.cnr.colostate.edu/' target='_blank'>http://sgs.cnr.colostate.edu/</a><br/><a href='./assets/pdfs/SGS_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>Agricultural Research Service,<br/>Long Term Ecological Research Network"
},
{
    'lat':  36.42,
    'lon':  -99.40,
    'id':   "SPR",
    'site': "Southern Plains Range Research Station",
    'url':  "http://www.sprrs.usda.gov/",
    'pdf':  "SPRRS_SiteDesc.pdf",
    'html': "<b>Southern Plains Range Research Station, Oklahoma, USA.</b><hr /><a href='#Southern Plains Range Research Station' onClick='keywordSearch()' class='searchsubcat'>Datasets(36)</a><br/><a href='http://www.sprrs.usda.gov/' target='_blank'>http://www.sprrs.usda.gov/</a><br/><a href='./assets/pdfs/SPRRS_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>Agricultural Research Service"
},
{
    'lat':  31.80,
    'lon':  -110.90,
    'id':   "SRE",
    'site': "Santa Rita Experimental Range",
    'url':  "http://cals.arizona.edu/SRER/",
    'pdf':  "SRER_SiteDesc.pdf",
    'html': "<b>Santa Rita Experimental Range, Arizona, USA.</b><hr /><a href='#Santa Rita Experimental Range' onClick='keywordSearch()' class='searchsubcat'>Datasets(1095)</a><br/><a href='http://cals.arizona.edu/SRER/' target='_blank'>http://cals.arizona.edu/SRER/</a><br/><a href='./assets/pdfs/SRER_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>University of Arizona"
},
{
    'lat':  34.50,
    'lon':  -89.44,
    'id':   "TAL",
    'site': "Tallahatchie Experimental Forest",
    'url':  "http://www.srs.fs.usda.gov/organization/exforest/",
    'pdf':  "TAL_SiteDesc.pdf",
    'html': "<b>Tallahatchie Experimental Forest, Mississippi, USA.</b><hr /><a href='#Tallahatchie Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(62)</a><br/><a href='http://www.srs.fs.usda.gov/organization/exforest/' target='_blank'>http://www.srs.fs.usda.gov/organization/exforest/</a><br/><a href='./assets/pdfs/TAL_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
},
{
    'lat':  37.28,
    'lon':  -75.91,
    'id':   "VCR",
    'site': "Virginia Coast Reserve",
    'url':  "http://www.vcrlter.virginia.edu/",
    'pdf':  "VCR_SiteDesc.pdf",
    'html': "<b>Virginia Coast Reserve, Virginia, USA.</b><hr /><a href='#Virginia Coast Reserve' onClick='keywordSearch()' class='searchsubcat'>Datasets(175)</a><br/><a href='http://www.vcrlter.virginia.edu/' target='_blank'>http://www.vcrlter.virginia.edu/</a><br/><a href='./assets/pdfs/VCR_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>Long Term Ecological Research Network"
},
{
    'lat':  35.58,
    'lon':  -84.17,
    'id':   "WBW",
    'site': "Walker Branch Watershed",
    'url':  "http://walkerbranch.ornl.gov/",
    'pdf':  "WBW_SiteDesc.pdf",
    'html': "<b>Walker Branch Watershed, Tennessee, USA.</b><hr /><a href='#Walker Branch Watershed' onClick='keywordSearch()' class='searchsubcat'>Datasets(107)</a><br/><a href='http://walkerbranch.ornl.gov/' target='_blank'>http://walkerbranch.ornl.gov/</a><br/><a href='./assets/pdfs/WBW_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Energy"
},
{
    'lat':  31.71,
    'lon':  -110.06,
    'id':   "WGEW",
    'site': "Walnut Gulch Experimental Watershed",
    'url':  "http://www.tucson.ars.ag.gov/unit/gis/wg.html",
    'pdf':  "WGEW_SiteDesc.pdf",
    'html': "<b>Walnut Gulch Experimental Watershed, Arizona, USA.</b><hr /><a href='#Walnut Gulch Experimental Watershed' onClick='keywordSearch()' class='searchsubcat'>Datasets(207)</a><br/><a href='http://www.tucson.ars.ag.gov/unit/gis/wg.html' target='_blank'>http://www.tucson.ars.ag.gov/unit/gis/wg.html</a><br/><a href='./assets/pdfs/WGEW_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>Agricultural Research Service"
},
{
    'lat':  45.81,
    'lon':  -121.98,
    'id':   "WIN",
    'site': "Wind River Experimental Forest",
    'url':  "http://www.fs.fed.us/pnw/exforests/wind-river/",
    'pdf':  "WIN_SiteDesc.pdf",
    'html': "<b>Wind River Experimental Forest, Oregon, USA.</b><hr /><a href='#Wind River Experimental Forest' onClick='keywordSearch()' class='searchsubcat'>Datasets(30)</a><br/><a href='http://www.fs.fed.us/pnw/exforests/wind-river/' target='_blank'>http://www.fs.fed.us/pnw/exforests/wind-river/</a><br/><a href='./assets/pdfs/WIN_SiteDesc.pdf'  target='_blank'>Download PDF Info Sheet</a><br/><b>Agencies:</b><br/>U.S. Department of Agriculture,<br/>U.S. Forest Service"
} 
];

