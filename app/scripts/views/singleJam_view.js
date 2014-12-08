(function() {

  App.Views.SingleJam = Parse.View.extend({

    tagName: 'ul',
    className: 'singleJam',

    events: {},

    template: _.template($('#singlejamTemp').html()),

    initialize: function(options) {
      this.options= options;

      this.render();

      $('#bandMates').html(this.$el);




    },

    render: function() {

      this.$el.empty();
        console.log(this.options);
      this.$el.append(this.template(this.options.jam.toJSON()));


      var self = this;

      return this;

    },



  });


}());
