
function initMap() {
    var image = {
      url: null,
      scaledSize: new google.maps.Size(30, 30),
      origin: new google.maps.Point(0,0), 
      anchor: new google.maps.Point(0, 0),
  }
  
  
  var locations = [
    ['Nora, Canada', 51.213890, -102.4627768, 'assets/img/nora.jpg#custom_marker' ],
    ['Namita, Delhi ',28.7041, 77.1025 , 'assets/img/Namita.jpg#custom_marker'],
    ['Khiem, San Diago', 32.715736, -117.161087, 'assets/img/Khiem.jpg#custom_marker'],
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
  