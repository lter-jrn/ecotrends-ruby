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
	    if ($("#site_filter").val() == '') {
		$("#all_locations").removeClass("bold");
		$("#site_filter").val(this.id);
	    }
	    else {
		var stuff = $("#site_filter").val() + " " + this.id;
		$("#site_filter").val(stuff);
	    }
	}
    });

    $(".topic_link").click(function(e){
	e.preventDefault();

	if ($(this).hasClass("bold")) {
	    // single choice in string
	    var nuts = $("#topic").val().replace(String(this.id), "");
	    $("#topic").val(nuts);
	    console.log($("#topic").val().replace(String(this.id), ""));
	    if($("#topic").val() == ' ' || $("#topic").val() == ' ') {
		$("#all_topics").addClass("bold");
	    }
	    $(this).removeClass("bold");

	}
	else {
	    $(this).addClass("bold");
	    if ($("#topic").val() == '') {
		$("#all_topics").removeClass("bold");
		$("#topic").val(this.id);
	    }
	    else {
		console.log("i am here right " + this.id );
		var stuff = $("#topic").val() + "-" + this.id;
		$("#topic").val(stuff);
		console.log($("#topic"));
	    }
	}
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
    $("[name='shooby']").bootstrapSwitch({size: 'mini',
					  onSwitchChange: function(event, state) {
					      if ($("#shonby").is(":checked")) {
						  $("#both_off").val(false);
					      }
					      else {
						  $("#both_off").val(true);
					      }
						  $("#formmy").submit();
					      }
					 });

    $("[name='shonby']").bootstrapSwitch({size: 'mini',
					  onSwitchChange: function(event, state) {
					      if ($("#shooby").is(":checked")) {
						  $("#both_off").val(false);
					      }
					      else {
						  $("#both_off").val(true);
					      }
						  $("#formmy").submit();
					      }
					 });
    var callSubmit = true;

    $(".triggerbox").change(function(){

        var checkedSites = [];
        var checkedTopics = [];
        $(".triggerbox").each(function(index){

            if(this.checked == true) {
                if(this.name == "site")
                    checkedSites.push(this.value);
                else
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

        console.log($(fieldSites).val());

        var fieldtopics =  $("#subtopics");
        $(fieldtopics).val("");
        for(var i = 0; i < checkedTopics.length; i++) {


            var value = checkedTopics[i] + "-";

            if(i == checkedTopics.length - 1)
                value = checkedTopics[i];

            $(fieldtopics).val($(fieldtopics).val() + value);
        }

        console.log($(fieldtopics).val());

        //if(callSubmit == true)
	     //   this.form.submit();

        callSubmit = true;
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
        window.location.href = "/search?utf8=✓&keywords=" + $(this).attr("value")
    });


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
