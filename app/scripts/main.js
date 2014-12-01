Parse.initialize("WyPAizSEao3Qzn2Jq3RhIbEBbgNvqZdMZJegZG20", "yAvPrABaY6PJRcIT4DM8pJfbopAEsE2HRn2dS9YD");
(function() {


  //create a new instance of our collection
  App.people = new App.Collections.People();

  //fetch server-side posts
  App.people.fetch().done(function() {

    App.router = new App.Routers.AppRouter();

    Parse.history.start();

  });


}());
