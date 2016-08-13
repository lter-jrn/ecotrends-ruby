/*
 * Bootstrap Image Gallery JS Example 2.9
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true */
/*global window, document, $ */

$(function () {
    'use strict';

    // Start slideshow button:
    $('#start-slideshow').button().click(function () {
        var options = $(this).data(),
            modal = $(options.target),
            data = modal.data('modal');
        if (data) {
            $.extend(data.options, options);
        } else {
            options = $.extend(modal.data(), options);
        }
        modal.find('.modal-slideshow').find('i')
            .removeClass('icon-play')
            .addClass('icon-pause');
        modal.modal(options);
    });

    // Toggle fullscreen button:
    $('#toggle-fullscreen').button().click(function () {
        var button = $(this),
            root = document.documentElement;
        if (!button.hasClass('active')) {
            $('#modal-gallery').addClass('modal-fullscreen');
            if (root.webkitRequestFullScreen) {
                root.webkitRequestFullScreen(
                    window.Element.ALLOW_KEYBOARD_INPUT
                );
            } else if (root.mozRequestFullScreen) {
                root.mozRequestFullScreen();
            }
        } else {
            $('#modal-gallery').removeClass('modal-fullscreen');
            (document.webkitCancelFullScreen ||
                document.mozCancelFullScreen ||
                $.noop).apply(document);
        }
    });

    $(".location_link").click(function(e){
    	e.preventDefault();
    	if ($(this).hasClass("bold")) {
    	    // single choice in string
    	    var nuts = $("#site_filter").val().replace(String(this.id), "");
    	    $("#site_filter").val(nuts);
    	    console.log($("#site_filter").val().replace(String(this.id), ""));
    	    if($("#site_filter").val() == ' ' || $("#site_filter").val() == ' ') {
    		      $("#all_locations").addClass("bold");
    	    }
    	    $(this).removeClass("bold");
    	}
    	else {
    	    $(this).addClass("bold");
    	    // if ($("#site_filter").val() == '') {
    		  //     $("#all_locations").removeClass("bold");
    		  //     $("#site_filter").val(this.id);
    	    // }
    	    // else {
    		  //     var stuff = $("#site_filter").val() + " " + this.id;
    		  //     $("#site_filter").val(stuff);
    	    // }
    	}
    });

    $(".ecosystem_link").click(function(e){
    	e.preventDefault();

    	if ($(this).hasClass("checked")) {
    	    // single choice in string
    	    var nuts = $("#ecosystems").val().replace(String(this.id), "");
    	    $("#ecosystems").val(nuts);
    	    console.log($("#ecosystems").val().replace(String(this.id), ""));
    	    if($("#ecosystems").val() == ' ' || $("#ecosystems").val() == ' ') {
    		$("#all_ecosystems").addClass("checked");
    	    }
    	    $(this).removeClass("checked");

    	}
    	else {
    	    $(this).addClass("checked");
    	    if ($("#ecosystems").val() == '') {
        		$("#all_ecosystems").removeClass("checked");
        		$("#ecosystems").val(this.id);
    	    } else {
    		    console.log("i am here right " + this.id );
        		var stuff = $("#ecosystems").val() + "-" + this.id;
        		$("#ecosystems").val(stuff);
        		console.log($("#ecosystem"));
    	    }
    	}
      $('#search-form').submit();
    });

    $(".biome_link").click(function(e){
    	e.preventDefault();

    	if ($(this).hasClass("checked")) {
    	    // single choice in string
    	    var nuts = $("#biome").val().replace(String(this.id), "");
    	    $("#biome").val(nuts);
    	    console.log($("#biome").val().replace(String(this.id), ""));
    	    if($("#biome").val() == ' ' || $("#biome").val() == ' ') {
    		$("#all_biome").addClass("checked");
    	    }
    	    $(this).removeClass("checked");

    	}
    	else {
    	    $(this).addClass("checked");
    	    if ($("#biome").val() == '') {
    		      $("#all_biome").removeClass("checked");
    		        $("#biome").val(this.id);
    	    } else {
    		    console.log("i am here right " + this.id );
    		    var stuff = $("#biome").val() + "-" + this.id;
    		    $("#biome").val(stuff);
    		    console.log($("#biome"));
    	    }
    	}
      $('#search-form').submit();
    });

    $(".topic_link").click(function(e){
    	e.preventDefault();

    	if ($(this).hasClass("checked")) {
    	    // single choice in string
    	    var nuts = $("#topic").val().replace(String(this.id), "");
    	    $("#topic").val(nuts);
    	    console.log($("#topic").val().replace(String(this.id), ""));
    	    if($("#topic").val() == ' ' || $("#topic").val() == ' ') {
    		    $("#all_topics").addClass("checked");
    	    }
    	    $(this).removeClass("checked");

    	}
    	else {
    	    $(this).addClass("checked");
    	    if ($("#topic").val() == '') {
    		    $("#all_topics").removeClass("checked");
    		    $("#topic").val(this.id);
    	    } else {
    		    console.log("i am here right " + this.id );
        		var stuff = $("#topic").val() + "-" + this.id;
        		$("#topic").val(stuff);
        		console.log($("#topic"));
    	    }
    	}
      $('#search-form').submit();
    });

    $(".subtopic_link").click(function(e){
    	e.preventDefault();
    	if ($(this).hasClass("bold")) {
    	    // single choice in string
    	    var nuts = $("#subtopic").val().replace(String(this.id), "");
    	    $("#subtopic").val(nuts);
    	    console.log($("#subtopic").val().replace(String(this.id), ""));
    	    if($("#subtopic").val() == ' ' || $("#subtopic").val() == ' ') {
    		$("#all_subtopics").addClass("bold");
    	    }
    	    $(this).removeClass("bold");

    	}
    	else {
    	    $(this).addClass("bold");
    	    if ($("#subtopic").val() == '') {
    		$("#all_subtopics").removeClass("bold");
    		$("#subtopic").val(this.id);
    	    }
    	    else {
    		var stuff = $("#subtopic").val() + "," + this.id;
    		$("#subtopic").val(stuff);
    	    }
    	}
    });

    $("#shooby").click(function(event) {
					      if ($("#shonby").is(":checked")) {
						  $("#both_off").val(false);
					      }
					      else {
						  $("#both_off").val(true);
					      }
						  $("#formmy").submit();
					 });

    $("#shonby").click(function(event) {
					      if ($("#shooby").is(":checked")) {
						  $("#both_off").val(false);
					      }
					      else {
						  $("#both_off").val(true);
					      }
						  $("#formmy").submit();
					 });
    var callSubmit = true;

    function setDates() {
      var min_date = $(".min-date").val();
      var max_date = $(".max-date").val();
      $("#min_date").val(min_date);
      $("#max_date").val(max_date);
    }

    $(".filter-button").click(function(){
        setDates();
        var checkedSites = [];
        var checkedSubTopics = [];
        var variables = [];
        var checkedEcosystems = [];
        var checkedBiome = [];
        var checkedTopics = [];
        $(".triggerbox").each(function(index){

            if(this.checked == true) {
                if(this.name == "site")
                  checkedSites.push(this.value);
                else if(this.name == "subtopic")
                  checkedSubTopics.push(this.value);
                else if(this.name == "variable")
                  variables.push(this.value);
                else if(this.name == "ecosystem")
                  checkedEcosystems.push(this.value);
                else if(this.name == "biome")
                  checkedBiome.push(this.value);
                else if(this.name == "topic")
                  checkedTopics.push(this.value);
            }
        });

        var fieldSites =  $("#site_filters");
        $(fieldSites).val("");
        for(var i = 0; i < checkedSites.length; i++) {

            var value = checkedSites[i] + ",";
            if(i == checkedSites.length - 1 ) {
                value = checkedSites[i];
            }

            $(fieldSites).val($(fieldSites).val() + value);
        }

        var ecoItems =  $("#ecosystems");
        $(ecoItems).val("");
        for(var i = 0; i < checkedEcosystems.length; i++) {


            var value = checkedEcosystems[i] + "-";

            if(i == checkedEcosystems.length - 1)
                value = checkedEcosystems[i];

            $(ecoItems).val($(ecoItems).val() + value);
        }

        var biomeItems =  $("#biome");
        $(biomeItems).val("");
        for(var i = 0; i < checkedBiome.length; i++) {


            var value = checkedBiome[i] + "-";

            if(i == checkedBiome.length - 1)
                value = checkedBiome[i];

            $(biomeItems).val($(biomeItems).val() + value);
        }
        var topicItems =  $("#topics");
        $(topicItems).val("");
        for(var i = 0; i < checkedTopics.length; i++) {


            var value = checkedTopics[i] + "-";

            if(i == checkedTopics.length - 1)
                value = checkedTopics[i];

            $(topicItems).val($(topicItems).val() + value);
        }

        var fieldtopics =  $("#subtopics");
        $(fieldtopics).val("");
        for(var i = 0; i < checkedSubTopics.length; i++) {


            var value = checkedSubTopics[i] + "-";

            if(i == checkedSubTopics.length - 1)
                value = checkedSubTopics[i];

            $(fieldtopics).val($(fieldtopics).val() + value);
        }

        var vars =  $("#variable_filters");
        $(vars).val("");
        for(var i = 0; i < variables.length; i++) {


            var value = variables[i] + "-";

            if(i == variables.length - 1)
                value = variables[i];

            $(vars).val($(vars).val() + value);
        }


       $("#search-form").submit();
        callSubmit = true;
    });

    $(".delete_keyword").click(function(e) {

      e.preventDefault();
      var word = $(this).attr("value").trim();
      var keywords = $('#keywords_field').val()
      console.log(keywords);
      keywords = keywords.replace(word+',', '');
      keywords = keywords.replace(','+word, '');
      keywords = keywords.replace(word, '');
      $('#keywords_field').val(keywords);
      $('#search-form').submit();

    });

    $(".green_arrow").click(function(){
        $("#search-form").submit();
        callSubmit = true;
    });

    //set all the check boxes

    function setCheckboxFilters() {
        callSubmit = false;
    }

    $(".moresites").click(function(e){
	      e.preventDefault();
	      $(this).parent().find(".more_items").show();
	      $(this).hide();
    });

    $(".add-datastore").click(function(e){
	var fa = $(this).find(".fa")
	fa.addClass("text-warning");
	var muck = $(this).find('.jsdocid').val();
	$.ajax({
	    method: "POST",
	    url: "datastores.json",
	    data: { docids: muck},
	    success: function(data){
		fa.removeClass("text-warning");
		fa.addClass("text-error");
	    }
	});
    });

    $(".location").click(function(e){
        /// I need to do this so we can search without entering a search term in the search box!
        /// filters on the left are just that and need to operate as they are.
        //window.location.href = "/search?utf8=✓&keywords=" + $(this).attr("value")

        var word = $(this).attr("value").trim();
        var keywords = $('#keywords_field').val()

        var fieldSites =  $("#site_filters");
        $(fieldSites).val(word);

        $("#search-form").submit();
         callSubmit = true;
    });

    $("#print-info").tooltip();

    $("#print-link").click(function(e){
        var dataUrl = document.getElementById('chart-0').toDataURL(); //attempt to save base64 string to server using this var
        var lineLegend = document.getElementsByClassName('line-legend')[0];
        var lineLegHTML = lineLegend.innerHTML;
        console.log(lineLegHTML);
        var windowContent = '<!DOCTYPE html>';
        windowContent += '<html>'
        windowContent += '<head><title>Ecotrends - Data Results</title></head>';
        windowContent += '<body>'
        windowContent += '<img src="' + dataUrl + '">';
        windowContent += '<ul style="color: #838383;font-weight: 300; font-size: 12px;">' + lineLegHTML + '<ul>';
        windowContent += '</body>';
        windowContent += '</html>';
        var printWin = window.open('','','width=340,height=260');
        printWin.document.open();
        printWin.document.write(windowContent);
        printWin.document.close();
        printWin.focus();
        printWin.print();
        printWin.close();
    });



    $(document).on('DOMNodeInserted', function(e) {
            if($(e.target).is('.line-legend')) {
                var arr = e.target;
                $(e.target).children().each(function(i, element){
                    var span = $(element).children('span').html('&nbsp;&nbsp;&nbsp;&nbsp;');
                });
            }
    });

});
