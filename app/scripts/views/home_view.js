(function() {

  App.Views.Home = Parse.View.extend({

    tagName: 'ul',
    className: 'allPeople',

    events: {
      'submit #createJam': 'addingJam'
    },

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
      setTimeout(function () {

        _.each(App.people.models, function(user){
            var location = user.get('location');

            var latLong = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
            console.log(latLong);


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

    addingJam: function (e) {
      e.preventDefault();

      var j = new Parse.Models.Jam({
        title: $('#title').val(),
        host: $('#host').val(),
        location: $('#location').val(),
        members: $('#members').val(),
        date: $('#date').val(),
        public: $('#public').val()
      });

      console.log(jam);


      j.save(null, {
        success: function() {
          App.jams.add(j);
        }
      });

    }









  });


}());
