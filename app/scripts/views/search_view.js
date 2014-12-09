(function() {

  App.Views.Search = Parse.View.extend({

    tagName: 'ul',
    className: 'allPeople',

    events: {
      'submit #findJam': 'findJam',
      'submit #findMusician': 'findMusician',
      'click #jam': 'renderJamSearchTemp',
      'click #musician': 'renderMusicianSearchTemp',

    },

    template: $('#musicianSearchTemp').html(),
    template2: $('#jamSearchTemp').html(),
    template3: $('#searchLandingTemp').html(),

    initialize: function() {



      $('#bandMates').html(this.$el);


      this.render();


    },

    render: function() {

      this.$el.html(this.template3);


      var self = this;

      return this;

    },

    renderJamSearchTemp: function(){
      this.$el.html(this.template2);


      var self = this;

      return this;
    },

    renderMusicianSearchTemp: function(){
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

          var instruments = _.filter(results, function(x){
            return x.attributes.instrument === $('#instrument').val();
          });



          _.each(instruments, function(x){
            var userLink = '/#/otherProfile/'+x.id;

            $("#results").append('<a href="' + userLink + '">' + x.attributes.firstname + '</a>');
          });

        }

      });
    },

    findJam: function(e){
      e.preventDefault();

      var query = new Parse.Query(App.Models.Jam);

      var styleInput = $('#style').val();
      query.equalTo("style", styleInput);

            query.find({
               success: function(results) {
                 var jams = results;
                 console.log(jams);

                 _.each(jams, function(x){
                   console.log(x.attributes.title);
                   var jamLink = '/#/singleJam/'+x.id;
                   $("#results").append('<a href="' + jamLink + '">' + x.attributes.title + '</a>');
                 }); //closes each fx

               } //closes success fx


            }); //closes query.find








    } //closes findJam

  }); //closes App.Views.search


}()); //closes iffy
