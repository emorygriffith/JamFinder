(function() {

  App.Views.User = Parse.View.extend({

    tagName: 'ul',
    className: 'myPosts',

    events: {},

    template: $('#userTemp').html(),

    initialize: function(options) {
      this.options = options;

      this.collection.off();
      this.collection.on('sync', this.postQuery, this);

      $('#bandMates').html(this.$el);


    },


    render: function() {

      var self = this;



      return this;

    }


  });


}());
