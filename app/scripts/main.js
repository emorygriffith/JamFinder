Parse.initialize("WyPAizSEao3Qzn2Jq3RhIbEBbgNvqZdMZJegZG20", "yAvPrABaY6PJRcIT4DM8pJfbopAEsE2HRn2dS9YD");
(function() {


  //create a new instance of our collection
  App.people = new App.Collections.People();

  //fetch server-side posts
  App.people.fetch().done(function() {

    App.router = new App.Routers.AppRouter();

    Parse.history.start();

  });

  var map;
  function initialize(location) {

    console.log(location);

    var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

    var mapOptions = {
      center: currentLocation,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

    var marker = new google.maps.Marker({
      position: currentLocation,
      map: map
    });
}
  google.maps.event.addDomListener(window, 'load', initialize);

  $(document).ready(function () {

    navigator.geolocation.getCurrentPosition(initialize);

  });


  // Log Out
  $('#logOut').on('click', function (e) {
    e.preventDefault();
    Parse.User.logOut();
    App.updateUser();
    App.router.navigate('login', {trigger: true});
  });


  // Update User
  App.updateUser = function (){
    App.user = Parse.User.current();
    var currentUser;
    if (App.user == null){
      currentUser = '';
    } else {
      currentUser = 'Welcome ' + App.user.attributes.username;
    }
    $('#welcomeText').html(currentUser);
  };
  App.updateUser();






}());
