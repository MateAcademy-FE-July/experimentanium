"use strict";
function initMap() {
    var uluru = { lat: 50.437929, lng: 30.5064236 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
};

$(function () {
    $.datepicker.setDefaults(
        $.extend($.datepicker.regional[''])
    );
    $('#datepicker').datepicker();
});