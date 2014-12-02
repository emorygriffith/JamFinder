(function(){

  App.Routers.AppRouter = Parse.Router.extend({

    routes: {
      'login': 'userLogin',
      'signup': 'userSignup',
      'user': 'userPage'
    },

    userLogin: function() {

      new App.Views.Login();
    },

    userSignup: function() {
      new App.Views.Signup();
    },

    userPage: function() {
      new App.Views.User( { collection: App.people });
    }





  });


}());
