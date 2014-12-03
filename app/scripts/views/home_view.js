(function() {

  App.Views.Home = Parse.View.extend({

    tagName: 'ul',
    className: 'allPeople',

    events: {},

    template: _.template($('#homeTemp').html()),

    initialize: function(options) {
      this.options = options;


      $('#bandMates').html(this.$el);

      this.render();


    },

    render: function() {

      var self = this;

      this.$el.empty();

      this.$el.append(this.template(App.user.toJSON()));


      //iterate through users and get their location
      _.each(App.people.models, function(user){
          var storedLocation = user.get('location');

          App.loadMap(storedLocation); //load map from main.js
          console.log(storedLocation.coords);
          console.log(storedLocation.coords.latitude, storedLocation.coords.longitude);
      });

      return this;

    },








  });


}());
