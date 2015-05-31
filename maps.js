$(document).ready(function() {
  var mapCanvas = document.getElementById('map-canvas');
function initialize() {
  var LatLngObj;
  if (mapCanvas.dataset.map === "lakeside-29") {
    LatLngObj = {lat: 44.279491, lng: -73.979871};
  }
  else if (mapCanvas.dataset.map === "haystack-way") {
    LatLngObj = {lat: 44.301413, lng: -74.015083};
  }
  
  var mapOptions = {
    zoom: 16,
    center: LatLngObj,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
      position: LatLngObj,
      map: map
  });
  var contentString = '<div id="content">'+
      '<div>339 Whiteface Inn Lane</div>' +
      '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a href="https://www.google.com/maps/dir/Current+Location/44.279491,-73.979871">Directions</a></div>' +
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  infowindow.open(map,marker);
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
});