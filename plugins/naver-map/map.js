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
        // '   <p style="padding:20px;">서울특별시 영등포구 선유로 49길 23 아이에스BIZ타워 2차 9F (07208)<br />',
        // '       <a href="http://www.skons.co.kr" target="_blank">http://www.skons.co.kr</a>',
        // '   </p>',
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
