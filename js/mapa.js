function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -16.457389199999998, lng: -71.5315308},
          scrollwheel: false,
          zoom: 8
        });
      }

var marker = new google.maps.Marker({
   position: myLatLng,
   map: map,
   title: 'Aquí hellooo!',
icon: "image/bloggif_58a70bf41eac6.png"
 }); 