Parse.initialize("WyPAizSEao3Qzn2Jq3RhIbEBbgNvqZdMZJegZG20", "yAvPrABaY6PJRcIT4DM8pJfbopAEsE2HRn2dS9YD");
(function() {


  //create a new instance of our collection
  App.people = new App.Collections.People();
  App.jams = new App.Collections.Jams();

  //fetch server-side posts
  App.people.fetch().done(function() {

    App.jams.fetch().done(function() {

      App.router = new App.Routers.AppRouter();

      Parse.history.start();

    });
});




App.userMarker = null;

App.loadMap = function(position) {
    var map;
    //Google Maps API Shenanigans
    var createMap = function (location) {
        //get the user's current location
        var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

        var mapOptions = {
          center: currentLocation,
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        App.map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);


        App.userMarker = new google.maps.Marker({
          position: currentLocation,
          map: App.map,
          draggable:true,
          title: 'Title Here'
        });


      };

    if (position == null) {
      navigator.geolocation.getCurrentPosition(createMap);
    } else {
      createMap(position, App.map);
    }
    //console.log(map);
    return map;
};


  // Log Out Button
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
