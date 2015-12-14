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
						  console.log("i am i said");
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
						  console.log("i am i said");
						  $("#both_off").val(false);
					      }
					      else {
						  $("#both_off").val(true);
					      }
						  $("#formmy").submit();
					      }
					     });
});
