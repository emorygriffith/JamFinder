(function () {

  App.Models.Jam = Parse.Object.extend({

    className: 'Jam',

    idAttribute: 'objectId',

    defaults: {
      title: '',
      host: '',
      location: '',
      members: '',
      public: true,
      date: '',
    },

    initialize: function(){

    }

  });

}());
