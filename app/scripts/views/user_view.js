(function() {

  App.Views.User = Parse.View.extend({

    tagName: 'ul',
    className: 'allPeople',

    events: {},

    template: _.template($('#userTemp').html()),

    initialize: function(options) {
      this.options = options;

      this.collection.off();
      this.collection.on('sync', this.postQuery, this);


      $('#bandMates').append(this.$el);

      this.render();

      // this.peopleQuery();

    },

    // peopleQuery: function() {
    //
    //   var self = this;
    //
    //   var thisUser = new Parse.Query(Parse.User);
    //
    //   thisUser.equalTo('name', App.user.get('name'));
    //
    //   thisUser.find({
    //     success: function (results) {
    //       console.log('results is: ' + results);
    //       self.collection = results;
    //       console.log('collection is now: ' + self.collection);
    //       self.render();
    //     },
    //
    //     error: function(error, user){
    //       console.log('Error: ' + error.message);
    //     }
    //   });
    //
    // },


    render: function() {

      var self = this;

      this.$el.empty();

      this.$el.append(this.template(App.user.toJSON()));

      // _.each(self.collection, function(p) {
      //   var rendered = self.template(p.toJSON());
      //   self.$el.append(self.template(p.toJSON()));
      // });

      return this;

    }


  });


}());
