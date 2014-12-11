(function () {

  App.Models.Jam = Parse.Object.extend({

    className: 'Jam',

    idAttribute: 'objectId',

    defaults: {
      title: '',
      host: '',
      style: '',
      location: '',
      public: true,
      date: '',
      frequency: '',
      picture: '',
    },

    initialize: function(){

    }

  });

}());
