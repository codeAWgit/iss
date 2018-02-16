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

//<!--
//For later if you want to use them. Bootstrap 4.0 and jQuery.
//<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
//<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
//  -->
//
//<!DOCTYPE html>
//<html>
//  <head>
//    <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>
//    <style> body {padding: 0; margin: 0;} </style>

//    <script src="file://C:/Users/A/Downloads/programming/P5.js_ISS/sketch.js"></script>
//  </head>
//  <body>
//  </body>
//</html>
//
//
//
////let nums = [100,25,12,72]
////
////let num = 55
//
//let earthImage
//
//function setup(){
//	createCanvas(1200,675)
//    earthImage = loadImage('https://4.bp.blogspot.com/-jW9BWkBS15c/T0Jw1TT5x1I/AAAAAAAAASs/AjwBeg6p0CA/s1600/Earth+Map.jpg')
//
//}
//
//function draw(){
//    background(earthImage)
////	ellipse(100,200,num,num)
////	rect(500,500,nums[0]*3,nums[3]*3)
//
//}
//
////console.log("Hi ya.")