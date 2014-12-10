(function() {

  App.Views.Landing = Parse.View.extend({

    tagName: 'ul',
    className: 'landing',

    events: {},

    template: $('#landingTemp').html(),



    initialize: function() {

      $('#bandMates').html(this.$el);

      $('#separateDiv').css("display", "none");

      this.$el.html(this.template);

      var self = this;

      return this;
    },


    render: function() {

      this.$el.html(this.template);

      var self = this;

      return this;

    },



  });


}());
