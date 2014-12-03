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

      this.$el.html(this.template(App.user.toJSON()));

      App.loadMap(App.user.get('location')); //load map from main.js


      return this;

    },








  });


}());
