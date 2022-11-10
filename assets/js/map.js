function initMap() {
    const defaultLocation = { lat: 38.963745, lng: 35.243320};
    const Nora = { lat:43.4643, lng:-80.5204  };
    const Yong = { lat:43.4643, lng:-90.5204  };
    const Namita = { lat: 28.626626, lng: 77.093529 };
    const Khiem = { lat: 36.7783 ,lng: -119.4179 };

    const map = new google.maps.Map(document.getElementById("mapCanvas"), {
        zoom: 2,
        center:defaultLocation,
   
   
    });
	
    
    var contentString1 = '<div id="content">'+
        '<h1 style="font-size:20px;">Nora Chamseddin</h1>' +'<div id="bodyContent">'+ 
            '<div style="float:left; width:20%;"><img src="<img src="info.jpg" " width="120" height="80"/></div>' + '<p Waterloo, ON, Canada </p>' +
    '</div>' 
  '</div>';


    const infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });
	
    
    const markerNora = new google.maps.Marker({
        position: Nora,
        map: map,
        title: 'Nora Chamseddin'
    });
     const marker2 = new google.maps.Marker({
        position: Namita,
        map: map,
        title: 'Namita Arya'
    });
  
    const marker3 = new google.maps.Marker({
        position: Khiem,
        map: map,
        title: 'Khiem'
    });

    const marker4 = new google.maps.Marker({
        position: Yong,
        map: map,
        title: 'Yong'
    });

    
    google.maps.event.addListener(markerNora, 'click', function() {
        infowindow1.open(map, markerNora);
    });
    
}

window.initMap = initMap;