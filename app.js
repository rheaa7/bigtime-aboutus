"use strict";

$( document ).ready(function() {
    
    //creates the google map and info window on the page 
    var mapOptions = {
        center: {lat: 47.65785, lng: -122.31342}, 
        zoom: 12 
    };
    
    var mapElem = document.getElementById('map');
    var map = new google.maps.Map(mapElem, mapOptions);
    var infoWin = new google.maps.InfoWindow();

    //resize the map based on the viewport height
    $(window).resize(function() {
        $("#map").height( (Number($(this).height())) - ($('#map').position().top) - 20); 

    });

var mn = $(".nav-bar");
  $(window).scroll(function() {
    if($(this).scrollTop() > 275) {
        mn.addClass("main-nav-scrolled");
        $("header").fadeOut();
    } else {
        mn.removeClass("main-nav-scrolled");
        $("header").fadeIn();
    }
  })
    
}); //DOM

