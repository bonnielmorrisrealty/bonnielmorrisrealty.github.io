function initMap() {}

$(document).ready(function() {
  var mapCanvas = document.getElementById('map-canvas');
initMap = function() {
  var LatLngObj;
  var contentString = '';
  if (mapCanvas.dataset.map === "haystack-pines") {
    LatLngObj = {lat: 44.301413, lng: -74.015083};
    contentString = '<div id="content">'+
      '<div>32 Haystack Pines</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.301413,-74.015083">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "dierview-brookhill") {
    LatLngObj = {lat: 44.312351, lng: -74.004124};
    contentString = '<div id="content">'+
       '<div>316 Whiteface Inn Lane</div>' +
      '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.312351,-74.004124">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "lakeside-16") {
    LatLngObj = {lat: 44.312425, lng: -74.002874};
    contentString = '<div id="content">'+
       '<div>339 Whiteface Inn Lane</div>' +
      '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.312425,-74.002874">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "balsams-townhome") {
    LatLngObj = {lat: 44.266220, lng: -73.977010};
    contentString = '<div id="content">'+
       '<div>16 Rustic Way</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.266220,-73.977010">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "sandbrook") {
    LatLngObj = {lat: 44.266220, lng: -73.977010};
    contentString = '<div id="content">'+
       '<div>22 Hemlock Way</div>' +
       '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.311867,-74.005353">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "knollwood-cabin") {
    LatLngObj = {lat: 44.279491, lng: -73.979871};
    contentString = '<div id="content">'+
       '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.279491,-73.979871">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "camp-brady") {
    LatLngObj = {lat: 44.311574, lng: -74.003670};
    contentString = '<div id="content">'+
      '<div>352 Whiteface Inn Ln.</div>' +
       '<div>Whiteface Club &amp; Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.311574,-74.003670">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "camp-tarshish") {
    LatLngObj = {lat: 44.117374, lng: -73.427161};
    contentString = '<div id="content">'+
      '<div>106 Presbury Point Rd</div>' +
      '<div>Westport, NY 12993</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.117374,-73.427161">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "cummings-road-complex") {
    LatLngObj = {lat: 44.281072, lng: -73.987814};
    contentString = '<div id="content">'+
      '<div>52 Cummings Rd</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.281072,-73.987814">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "morningside-lodge") {
    LatLngObj = {lat: 44.282313, lng: -73.979047};
    contentString = '<div id="content">'+
      '<div>20 Dunn Way, #42</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.282313,-73.979047">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "hemlock-way") {
    LatLngObj = {lat: 44.311668, lng: -74.006866};
    contentString = '<div id="content">'+
      '<div>Whiteface Club & Resort</div>' +
      '<div>4 Hemlock Way #7</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.311668,-74.006866">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "chillax-lodge") {
    LatLngObj = {lat: 44.311668, lng: -74.006866};
    contentString = '<div id="content">'+
      '<div>Whiteface Club & Resort</div>' +
      '<div>4 Hemlock Way #6</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.311668,-74.006866">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "morning-moose-lodge") {
    LatLngObj = {lat: 44.282313, lng: -73.979047};
    contentString = '<div id="content">'+
      '<div>20 Dunn Way, #45</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.282313,-73.979047">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "balsams-townhome-3") {
    LatLngObj = {lat: 44.265867, lng: -73.976409};
    contentString = '<div id="content">'+
      '<div>4 Rustic Way</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/ 44.265867,-73.976409">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "graceland-lodge") {
    LatLngObj = {lat: 44.308150, lng: -74.006493};
    contentString = '<div id="content">'+
      '<div>Whiteface Club & Resort</div>' +
      '<div>8 Spread Eagle Way</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/ 44.308150,-74.006493">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "brookhill-50") {
    LatLngObj = {lat: 44.308150, lng: -74.006493};
    contentString = '<div id="content">'+
      '<div>Whiteface Club & Resort</div>' +
      '<div>Brookhill 50</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/ 44.308150,-74.006493">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "placid-peaks") {
    LatLngObj = {lat: 44.281072, lng: -73.987814};
    contentString = '<div id="content">'+
      '<div>52 Cummings Rd</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.281072,-73.987814">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "sandbrook-townhome") {
    LatLngObj = {lat: 44.310860, lng: -74.004416};
    contentString = '<div id="content">'+
      '<div>Whiteface Club & Resort</div>' +
      '<div>Sandbrook Townhome #14</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.310860,-74.004416">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "loon-loj") {
    LatLngObj = {lat: 44.312937, lng: -74.002791};
    contentString = '<div id="content">'+
      '<div>Whiteface Club & Resort</div>' +
      '<div>331 Whiteface Inn Lane</div>' +
      '<div>Lakeside 5</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.312937,-74.002791">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "cervo-lodge") {
    LatLngObj = {lat: 44.312937, lng: -74.002791};
    contentString = '<div id="content">'+
      '<div>Cervo Lodge</div>' +
      '<div>Liberty Hill</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.268560,-73.976880">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "sunset-loj") {
    LatLngObj = {lat: 44.289490, lng: -73.977070};
    contentString = '<div id="content">'+
      '<div>37 Garden Way</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.289490,-73.977070">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "dreaming-tree-loj") {
    LatLngObj = {lat: 44.291530, lng: -73.989020};
    contentString = '<div id="content">'+
      '<div>125 Greenwood Street</div>' +
      '<div>Unit #2</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.291530,-73.989020">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "bobsled-lodge") {
    LatLngObj = {lat: 44.237910, lng: -73.940080};
    contentString = '<div id="content">'+
      '<div>61 Coyote Way</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.237910,-73.940080">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "olympic-condo") {
    LatLngObj = {lat: 44.3119100, lng: -74.006750};
    contentString = '<div id="content">'+
      '<div>4 Hemlock Way</div>' +
      '<div>Whiteface Club Resort</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.311910,-74.006750">Directions</a></div>' +
      '</div>';
  }
  else if (mapCanvas.dataset.map === "morningside-22") {
    LatLngObj = {lat: 44.282270, lng: -73.979540};
    contentString = '<div id="content">'+
      '<div>25 Dunn Way</div>' +
      '<div>Morningside Townhomes</div>' +
      '<div>Lake Placid, NY 12946</div>' +
      '<div><a rel="noopener" target="_blank" href="https://www.google.com/maps/dir/Current+Location/44.282270,-73.979540">Directions</a></div>' +
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
});