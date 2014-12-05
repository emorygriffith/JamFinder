(function() {

  App.Views.OtherProfile = Parse.View.extend({

    tagName: 'ul',
    className: 'otherProfile',

    events: {},

    template: $('#otherProfile').html(),

    initialize: function() {
      $('#bandMates').html(this.$el);

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
