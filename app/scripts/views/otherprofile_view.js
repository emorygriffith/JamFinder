(function() {

  App.Views.OtherProfile = Parse.View.extend({

    tagName: 'ul',
    className: 'otherProfile',

    events: {},

    template: _.template($('#otherProfile').html()),

    initialize: function(options) {
      console.log(options);


      this.options= options;
      $('#bandMates').html(this.$el);

      this.render();


      var self = this;

      return this;


    },


    render: function() {

      this.$el.append(this.template(this.options.person.toJSON()));


      var self = this;

      return this;

    },



  });


}());
