Parse.initialize("WyPAizSEao3Qzn2Jq3RhIbEBbgNvqZdMZJegZG20", "yAvPrABaY6PJRcIT4DM8pJfbopAEsE2HRn2dS9YD");
(function() {


  //create a new instance of our collection
  App.people = new App.Collections.People();

  //fetch server-side posts
  App.people.fetch().done(function() {

    App.router = new App.Routers.AppRouter();

    Parse.history.start();

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
