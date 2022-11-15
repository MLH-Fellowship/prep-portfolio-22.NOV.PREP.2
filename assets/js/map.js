
function initMap() {

  var image = {
    url: null,
    scaledSize: new google.maps.Size(30, 30),
    origin: new google.maps.Point(0,0), 
    anchor: new google.maps.Point(0, 0),
}


var locations = [
  ['Nora Waterloo, Canada', 51.213890, -102.4627768, 'assets/img/nora.jpg#custom_marker' ],
  ['Namita, Delhi, India ',28.7041, 77.1025 , 'assets/img/Namita.jpg#custom_marker'],
  ['Khiem, San Diago, USA', 32.715736, -117.161087, 'assets/img/Khiem.jpg#custom_marker'],
  ['Ahmed, Cairo, Egypt', 30.0444, 31.2357, 'assets/img/ahmed.jpg#custom_marker'],
  ['Ivy, Nairobi, Kenya', 1.2921, 36.8219, 'assets/img/ivy.jpg#custom_marker'],
  ['Mansi, Chhattisyarh, India', 21.2787, 81.8661, 'assets/img/mansi.jpg#custom_marker'],
  ['Khoa, Vancouver, Canada', 49.277696,  -122.11555, 'assets/img/khoa.jpg#custom_marker'],
  ['Yusuf, Urecht, Netherlands', 52.0907, 5.1214, 'assets/img/yusuf.jpg#custom_marker'],
  ['Shivam, Patna, India', 25.5941,85.1376, 'assets/img/shivam.jpg#custom_marker'],
  ['Young, Seoul, South Korea', 37.5665, 126.9780, 'assets/img/young.jpg#custom_marker'],
  ['Bhawna, New Delhi, India', 29.6139, 78.2090, 'assets/img/bhawna.jpg#custom_marker'],
  ['Arman, Vancouver, Canada', 50.2610, -123.2488, 'assets/img/arman.jpg#custom_marker'],
  ['Carly, New York, USA', 40.7128, -74.0060, 'assets/img/carly.jpg#custom_marker'],
  ['Cynthia, Rwanda, Africa', 1.9403, 29.8739, 'assets/img/cynthia.jpg#custom_marker'],

];

var map = new google.maps.Map(document.getElementById('mapCanvas'), {
  zoom: 2,
  center: new google.maps.LatLng(38.9637, 35.2433),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {  
  image.url = locations[i][3];
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map,
    icon: image,
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}
}
window.initMap = initMap;
