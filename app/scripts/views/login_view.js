(function() {

  App.Views.Login = Parse.View.extend({
    tagName: 'ul',
    className: 'allPeople',

    events: {
      'submit #logIn': 'loggingIn'
    },

    template: $('#loginForm').html(),

    initialize: function(options) {
      this.options = options;

      $('#bandMates').html(this.$el);

      $('#separateDiv').css("display", "none");

      this.render();


    },

    render: function() {

      this.$el.html(this.template);

      var self = this;

      return this;

    },

    loggingIn: function (e) {
      e.preventDefault();

      var username = $('#username').val();
      var password = $('#password').val();

      Parse.User.logIn(username, password, {
        success: function (user) {
          App.updateUser();
          App.router.navigate('#/home', {trigger: true});
          console.log(username + ' is logged in');
          // console.log(user);
        },
        error: function (user, error) {
          alert("Error: " + error.message);
        }
      });

    }


  });


}());
