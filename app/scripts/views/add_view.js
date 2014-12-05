(function() {

  App.Views.Add = Parse.View.extend({

    tagName: 'ul',
    className: 'allPeople',

    events: {
      // 'submit #createJam': 'addingJam'
    },

    template: $('#addTemp').html(),

    initialize: function() {



      $('#bandMates').html(this.$el);

      this.render();


    },

    render: function() {

      var self = this;

      this.$el.empty();

      this.$el.append(this.template);

      return this;

    },

    // addingJam: function (e) {
    //   e.preventDefault();
    //
    //   var j = new Parse.Models.Jam({
    //     title: $('#title').val(),
    //     host: $('#host').val(),
    //     location: $('#location').val(),
    //     members: $('#members').val(),
    //     date: $('#date').val(),
    //     public: $('#public').val()
    //   });
    //
    //   console.log(jam);
    //
    //
    //   j.save(null, {
    //     success: function() {
    //       App.jams.add(j);
    //     }
    //   });
    //
    // }









  });


}());
