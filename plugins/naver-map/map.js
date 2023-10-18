

var HOME_PATH = window.HOME_PATH || '.';

var cityhall = new naver.maps.LatLng(37.53623023718519, 126.89503377521618),
    map = new naver.maps.Map('map', {
        center: cityhall.destinationPoint(0, 100),
        zoom: 17,
    }),
    marker = new naver.maps.Marker({
        map: map,
        position: cityhall
    });

var contentString = [
        '<div class="text-center">',
        '   <h4>SK오앤에스 본사 </h4>',
        '</div>'
    ].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString,
    borderColor: "#FF7A00",
    borderWidth: 2,
    maxWidth: 500,
});

naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
});

infowindow.open(map, marker);
