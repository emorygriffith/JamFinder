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

      var profileMap = App.loadMap();

      //iterate through users and get their location
      console.log(App.map);
      setTimeout(function () {
        console.log(App.map);
        _.each(App.people.models, function(user){
            var location = user.get('location');
            var latLong = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

            new google.maps.Marker({
              position: latLong,
              map: App.map
            });

             //load map from main.js
            console.log(latLong);
        });
      }, 5000);

      return this;

    },








  });


}());
