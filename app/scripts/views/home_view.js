(function() {

  App.Views.Home = Parse.View.extend({

    tagName: 'ul',
    className: 'allPeople',

    events: {

    },

    template: _.template($('#homeTemp').html()),
    jamsTemplate: _.template($('#jamsTemplate').html()),

    initialize: function(options) {
      this.options = options;

      this.collection.off();
      this.collection.on('sync', this.jamQuery, this);




      this.jamQuery();
      this.render();

      $('#bandMates').html(this.$el);


    },

    jamQuery: function() {


      var self = this;

      var all_jams = new Parse.Query(App.Models.Jam);


      all_jams.find({
        success: function (results) {
          self.collection = results;

          console.log(results);

          _.each(results, function(p) {
              console.log(p.attributes.title);
              self.$el.append(self.jamsTemplate(p.toJSON()));

          });

        }
      });





    },

    render: function() {

      var self = this;





      this.$el.append(this.template(App.user.toJSON()));





      var profileMap = App.loadMap();


      //iterate through users and get their location
      setTimeout(function () {

        _.each(App.people.models, function(user){
            var location = user.get('location');

            var latLong = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

            var contentString = user.get('firstname') + ',  ' + user.get('instrument');

            var infowindow = new google.maps.InfoWindow({
              content: contentString
            });


            var marker = new google.maps.Marker({
              position: latLong,
              map: App.map
            });

            google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(App.map,marker);
            });

        });
      }, 5000);





      return this;

    },








  });


}());
