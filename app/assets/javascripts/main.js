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
    $(".triggerbox").change(function(){
	this.form.submit()
    });
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


    // $(".remove-datastore").click(function(e){
    // 	var fa = $(this).find(".fa")
    // 	fa.addClass("text-warning");
    // 	var muck = $(this).find('.jsdocid').val();
    // 	$.ajax({
    // 	    method: "POST",
    // 	    url: "datastores.json",
    // 	    data: { docids: muck},
    // 	    success: function(data){
    // 		fa.removeClass("text-warning");
    // 		fa.addClass("text-error");
    // 	    }
    // 	});
    // });

    //print functions
    $("#print-link").click(function(e){
        var dataUrl = document.getElementById('chart-0').toDataURL(); //attempt to save base64 string to server using this var
        var lineLegend = document.getElementsByClassName('line-legend')[0];
        var lineLegHTML = lineLegend.innerHTML;
        console.log(lineLegHTML);
        var windowContent = '<!DOCTYPE html>';
        windowContent += '<html>'
        windowContent += '<head><title>Ecotrends - Comparing Datasets</title></head>';
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
});
