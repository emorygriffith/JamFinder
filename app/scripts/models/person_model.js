(function () {

  App.Models.Person = Parse.Object.extend({

    className: 'Person',

    idAttribute: 'objectId',

    defaults: {
      name: '',
      location: '',
      instrument: '',
      style: '',
      commitment: ''
    },

    initialize: function(){

    }

  });

}());
