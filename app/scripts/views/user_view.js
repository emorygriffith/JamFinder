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


    },


    render: function() {

      var self = this;

      this.$el.empty();

      this.$el.append(this.template(App.user.toJSON()));

      return this;

    }


  });


}());
