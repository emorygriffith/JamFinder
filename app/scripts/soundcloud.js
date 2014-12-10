(function() {




  // // initiate auth popup
  // var SCsignin = function(){
  //     SC.connect(function() {
  //       SC.get('/me', function(me) {
  //         alert('Hello, ' + me.username);
  //       });
  //     });
  // };


  function playSomeSound(genre){
    SC.get("/tracks", {genre: genre}, function(tracks){
      var random = Math.floor(Math.random() * 49);
      SC.oEmbed(tracks[random].uri, {auto_play:true}, document.getElementbyID('soundcloud'))
    }

    App.Views.onload = function(){
      SC.initialize({
        client_id: 'edf7ffe41584a2bd4b4b16da8bfd4bfc'
      });

    };









  }());
