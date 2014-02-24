// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .


$(document).ready(function() {
    var pepe = $.fn.fullpage({
        anchors: ['sec0','sec1','sec2', 'sec3'],
        menu: '#menu',
        scrollingSpeed: 2500,
        afterLoad: function(anchorLink, index){
            //using index
            if(index == '1'){
                $("#vp_nav").attr('class', 'navbar navbar-fixed-bottom');

            }
            else
            {
                $("#vp_nav").attr('class', 'navbar navbar-fixed-top');
            }
        }

    });
});


