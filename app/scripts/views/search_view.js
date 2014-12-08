(function() {

  App.Views.Search = Parse.View.extend({

    tagName: 'ul',
    className: 'allPeople',

    events: {
      'submit #findMusician': 'findMusician'
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

    findMusician: function() {
      var query = new Parse.Query(Parse.User);
      var styleInput = $('#style').val();
      query.equalTo("style", styleInput);
      query.find({
        success: function(results) {
          console.log(results);

          var instruments = _.filter(results, function(x){
            return x.attributes.instrument === $('#instrument').val();
          });

          console.log(instruments);
        }

      });
    }

  });


}());
