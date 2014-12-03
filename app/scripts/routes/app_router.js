(function(){

  App.Routers.AppRouter = Parse.Router.extend({

    routes: {
      'login': 'userLogin',
      'signup': 'userSignup',
      'user': 'userPage',
      'home': 'homePage'
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
    }





  });


}());
