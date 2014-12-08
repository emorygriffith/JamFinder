(function(){

  App.Routers.AppRouter = Parse.Router.extend({

    routes: {
      'login': 'userLogin',
      'signup': 'userSignup',
      'user': 'userPage',
      'home': 'homePage',
      'landing': 'landingPage',
      'otherProfile/:id': 'otherProfile',
      'addJam': 'addJam',
      'search': 'search',
      'singleJam/:id': 'singleJam'
    },

    userLogin: function() {

      new App.Views.Login();
    },

    userSignup: function() {
      new App.Views.Signup();
    },

    userPage: function() {
      new App.Views.User( { collection: App.people });
    },

    homePage: function() {
      new App.Views.Home( { collection: App.people });

    },

    landingPage: function() {
      new App.Views.Landing();
    },

    otherProfile: function(id) {

      var t = App.people.get(id);
      new App.Views.OtherProfile({ person: t});

    },

    addJam: function() {
      new App.Views.Add({ collection: App.jams});
    },

    search: function() {
      new App.Views.Search();
    },

    singleJam: function(id) {
      var t = App.jams.get(id);
      new App.Views.SingleJam({ jam: t});
    }





  });


}());
