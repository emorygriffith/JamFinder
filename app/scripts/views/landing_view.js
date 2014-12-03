(function() {

  App.Views.Landing = Parse.View.extend({

    tagName: 'ul',
    className: 'land',

    events: {},

    template: $('landingTemp').html(),

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






  });


}());
