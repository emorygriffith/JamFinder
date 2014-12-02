(function() {

  App.Views.Signup = Parse.View.extend({

    tagName: 'ul',
    className: 'allPeople',

    events: {
      'submit #signUp': 'signingUp'
    },

    template: $('#signupForm').html(),

    initialize: function(options) {
      this.options = options;


      $('#bandMates').html(this.$el);

      this.render();


    },

    render: function() {

      this.$el.html(this.template);

      var self = this;

      return this;

    },

    signingUp: function (e) {
      e.preventDefault();

      var person = new Parse.User({

        username: $('#username').val(),
        password: $('#password').val(),
        name: $('#name').val(),
        instrument: $('#instrument').val(),
        style: $('#style').val(),
        commitment: $('#commitment').val()        
      });

      console.log(person);


      person.signUp();

    }






  });


}());
