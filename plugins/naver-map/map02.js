// var mapOptions = {
//   center: new naver.maps.LatLng(37.536666445340444, 126.89517355935246),
//   zoom: 18,
// };
// var marker = new naver.maps.Marker({
//   position: new naver.maps.LatLng(37.3595704, 127.105399),
//   map: map
// });
// var map = new naver.maps.Map('map', mapOptions);



var HOME_PATH = window.HOME_PATH || '.';

var cityhall = new naver.maps.LatLng(37.56378153628886, 126.96189471080838),
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
        '   <h4>SK오앤에스 강북Access </h4>',
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
