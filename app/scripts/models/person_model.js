(function () {

  App.Models.Person = Parse.Object.extend({

    className: 'Person',

    idAttribute: 'objectId',

    defaults: {
      firstname: '',
      lastname: '',
      location: '',
      instrument: '',
      style: '',
      commitment: '',
      picture: ''
    },

    initialize: function(){

    }

  });

}());
