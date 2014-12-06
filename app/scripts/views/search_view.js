(function() {

  App.Views.Search = Parse.View.extend({

    tagName: 'ul',
    className: 'allPeople',

    events: {

    },

    template: $('#searchTemp').html(),

    initialize: function() {



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
