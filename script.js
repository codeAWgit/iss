/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(() => {
    'use strict';        
    $("#getMessage").on('click', () => {
        $.getJSON('http://api.open-notify.org/iss-now.json', function (json) {
            let lat = JSON.stringify(json.iss_position.latitude).replace(/\"/g, '');
            let long = JSON.stringify(json.iss_position.longitude).replace(/\"/g, '');
            let mapsUrl = 'https://www.google.com/maps/search/' + lat + ',' + long + '/@' + lat + ',' + long + ',1z'; 
            
            $(".message").html('Latitude: ' + lat + '<br/><br/> Longitude: ' + long + '<br/><br/><a href="' + mapsUrl + '" target="_blank">Click to see on Google Maps</a>' + '<br/><br/>' + '<span id="json">' + JSON.stringify(json) + '</span>');
            
          }, 'jsonp')
        
           .fail(() => {
             console.log('Nope');
           })
        
          .always(() => {
           console.log('Done');
          });
     });
});