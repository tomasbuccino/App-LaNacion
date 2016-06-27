function initialize() {

var gps = navigator.geolocation.getCurrentPosition(

function (position) {

	 var latitude = position.coords.latitude;
     var longitude = position.coords.longitude;
     var geolocpoint = new google.maps.LatLng(latitude, longitude);

	var mapOptions = {
  	center: geolocpoint, //{ lat: position.coords.latitude, lng: position.coords.longitude},
  	zoom: 18,

};

var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
 
var you = new google.maps.Marker({
    position: geolocpoint,
    map: map,
    title: "Dis be You!",
    animation: google.maps.Animation.DROP 

	});

var villagecaballito = new google.maps.Marker({
    position: new google.maps.LatLng(-34.6185305, -58.4374863),
    map: map,
    title: "Village Caballito!",
    animation: google.maps.Animation.DROP 

	});

var atlasflores = new google.maps.Marker({
    position: new google.maps.LatLng(-34.629335, -58.462382),
    map: map,
    title: "Atlas Flores!",
    animation: google.maps.Animation.DROP 

	});

var hoytsabasto = new google.maps.Marker({
    position: new google.maps.LatLng(-34.603329, -58.410789),
    map: map,
    title: "Hoyts Abasto!",
    animation: google.maps.Animation.DROP 

	});



 }
 );
};
