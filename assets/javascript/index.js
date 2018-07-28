$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDYI4Fjm_RWQadwHH7KdTJGSErId9aUJKY',
    authDomain: 'real-estate-app-9e4e6.firebaseapp.com',
    databaseURL: 'https://real-estate-app-9e4e6.firebaseio.com',
    projectId: 'real-estate-app-9e4e6',
    storageBucket: 'real-estate-app-9e4e6.appspot.com',
    messagingSenderId: '1087918608727'
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      $('.loginlogout').text('Log Out');
      $('.loginlogout').attr('login-stat', 'logout');

      $('.createlisting').show();
    } else {
      // No user is signed in.
      $('.loginlogout').text('Log In');
      $('.loginlogout').attr('login-stat', 'login');

      $('.createlisting').hide();
    }
  });

  $(document.body).on('click', '.loginlogout', function() {
    var status = $('.loginlogout').attr('login-stat');

    if (status === 'login') {
      window.location.replace('login.html');
    } else if (status === 'logout') {
      firebase
        .auth()
        .signOut()
        .then(
          function() {
            console.log('sign out successful!');
          },
          function(error) {
            console.log('sign out failed!');
          }
        );
    }
  });
});
