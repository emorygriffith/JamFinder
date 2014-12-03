(function() {

  App.Views.User = Parse.View.extend({

    tagName: 'ul',
    className: 'allPeople',

    events: {
      'click #submitLocation' : 'submitLocation'
    },

    template: _.template($('#userTemp').html()),

    initialize: function(options) {
      this.options = options;

      $('#bandMates').html(this.$el);

      this.render();


    },


    render: function() {

      var self = this;

      this.$el.empty();

      this.$el.append(this.template(App.user.toJSON()));

      App.loadMap(App.user.get('location')); //load map from main.js

      return this;

    },

    submitLocation: function(){
      console.log(App.userMarker.position);

      var location = {
        coords: {
          latitude: App.userMarker.position.k,
          longitude: App.userMarker.position.B
        }
      }

      App.user.set('location', location);

      App.user.save();



    }




  });


}());
