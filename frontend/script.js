mapboxgl.accessToken = 'pk.eyJ1IjoidGFoZXJhYmJhcyIsImEiOiJjbHN3aTRkY2YweHU4MmlxdG5veXQzYm9oIn0.9FA7D696-r1TmIv_iPYPeA'; // Replace with your Mapbox access token
var map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [83.37471942739644, 17.78016440112741], // starting position [lng, lat]
  zoom: 16 // starting zoom
});

// Add a marker to the map
var marker = new mapboxgl.Marker()
  .setLngLat([83.37471942739644, 17.78016440112741]) // Marker [lng, lat] coordinates
  .addTo(map); // Add the marker to the map

//   17.781853608855133, 83.37750291130067
// 17.78016440112741, 83.37471942739644