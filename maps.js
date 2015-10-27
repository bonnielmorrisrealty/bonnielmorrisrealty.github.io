$(document).ready(function() {
  var mapCanvas = document.getElementById('map-canvas');
function initialize() {
  var LatLngObj;
  var contentString = '';
  if (mapCanvas.dataset.map === "lakeside-29") {
    LatLngObj = {lat: 44.312425, lng: -74.002874};
    contentString = '<div id="content">'+
      '<div>339 Whiteface Inn Lane</div>' +
      '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a href="https://www.google.com/maps/dir/Current+Location/44.312425,-74.002874">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "haystack-pines") {
    LatLngObj = {lat: 44.301413, lng: -74.015083};
    contentString = '<div id="content">'+
      '<div>32 Haystack Pines</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a href="https://www.google.com/maps/dir/Current+Location/44.301413,-74.015083">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "dierview-brookhill") {
    LatLngObj = {lat: 44.312351, lng: -74.004124};
    contentString = '<div id="content">'+
       '<div>316 Whiteface Inn Lane</div>' +
      '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a href="https://www.google.com/maps/dir/Current+Location/44.312351,-74.004124">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "brookside-cabin") {
    LatLngObj = {lat: 44.311574, lng: -74.004124};
    contentString = '<div id="content">'+
       '<div>352 Whiteface Inn Lane</div>' +
      '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a href="https://www.google.com/maps/dir/Current+Location/44.311574,-74.003670">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "cozy-cone") {
    LatLngObj = {lat: 44.311758, lng: -74.004124};
    contentString = '<div id="content">'+
       '<div>351 Whiteface Inn Lane</div>' +
      '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a href="https://www.google.com/maps/dir/Current+Location/44.311758,-74.002847">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "owls-nest") {
    LatLngObj = {lat: 44.314559, lng: -74.004940};
    contentString = '<div id="content">'+
       '<div>13 Overlook Way</div>' +
      '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a href="https://www.google.com/maps/dir/Current+Location/44.314559,-74.004940">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "lakeside-16") {
    LatLngObj = {lat: 44.312425, lng: -74.002874};
    contentString = '<div id="content">'+
       '<div>339 Whiteface Inn Lane</div>' +
      '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a href="https://www.google.com/maps/dir/Current+Location/44.312425,-74.002874">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "balsams-townhome") {
    LatLngObj = {lat: 44.266220, lng: -73.977010};
    contentString = '<div id="content">'+
       '<div>16 Rustic Way</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a href="https://www.google.com/maps/dir/Current+Location/44.266220,-73.977010">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "sandbrook") {
    LatLngObj = {lat: 44.266220, lng: -73.977010};
    contentString = '<div id="content">'+
       '<div>22 Hemlock Way</div>' +
       '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a href="https://www.google.com/maps/dir/Current+Location/44.311867,-74.005353">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "knollwood-cabin") {
    LatLngObj = {lat: 44.279491, lng: -73.979871};
    contentString = '<div id="content">'+
       '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a href="https://www.google.com/maps/dir/Current+Location/44.279491,-73.979871">Directions</a></div>' +
      '</div>';
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