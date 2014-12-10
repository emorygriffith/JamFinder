(function(){

  App.Routers.AppRouter = Parse.Router.extend({

    routes: {
      'login': 'userLogin',
      'signup': 'userSignup',
      'user': 'userPage',
      'home': 'homePage',
      '': 'landingPage',
      'otherProfile/:id': 'otherProfile',
      'addJam': 'addJam',
      'search': 'search',
      'singleJam/:id': 'singleJam'
    },


    landingPage: function() {
      new App.Views.Landing();
      $('.header').addClass('hide');




    },

    userLogin: function() {

      new App.Views.Login();
      $('.header').removeClass('hide');





    },

    userSignup: function() {
      new App.Views.Signup();
    },

    userPage: function() {
      new App.Views.User( { collection: App.people });
      $('#logout').removeClass('hide');
      $('#home').removeClass('hide');
      $('#addjam').removeClass('hide');
      $('#search').removeClass('hide');
    },

    homePage: function() {
      new App.Views.Home( { collection: App.people });
      $('#logout').removeClass('hide');
      $('#addjam').removeClass('hide');
      $('#search').removeClass('hide');


    },



    otherProfile: function(id) {

      var t = App.people.get(id);
      new App.Views.OtherProfile({ person: t});
      $('#logout').removeClass('hide');
      $('#addjam').removeClass('hide');
      $('#search').removeClass('hide');

    },

    addJam: function() {
      new App.Views.Add({ collection: App.jams});
      $('#logout').removeClass('hide');
      $('#home').removeClass('hide');
      $('#separateDiv').css("display", "none");

    },

    search: function() {
      new App.Views.Search();
      $('#separateDiv').css("display", "none");
      $('#logout').removeClass('hide');
      $('#addjam').removeClass('hide');
    },

    singleJam: function(id) {
      var t = App.jams.get(id);
      new App.Views.SingleJam({ jam: t});
      $('#search').removeClass('hide');
      $('#logout').removeClass('hide');
      $('#home').removeClass('hide');
      $('#separateDiv').css("display", "none");
    }





  });


}());
