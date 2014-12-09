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

    findMusician: function(e) {
      e.preventDefault();
      var query = new Parse.Query(Parse.User);
      var styleInput = $('#style').val();
      query.equalTo("style", styleInput);
      query.find({
        success: function(results) {
          console.log(results);
          // var searchResults = [];
          var instruments = _.filter(results, function(x){
            return x.attributes.instrument === $('#instrument').val();
          });



          _.each(instruments, function(x){
            var userLink = '/#/otherProfile/'+x.id;

            $("#results").append('<a href="' + userLink + '">' + x.attributes.firstname + '</a>');
          });

        }

      });
    }

  });


}());
