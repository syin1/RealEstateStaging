$(document).ready(function() {
  var imageno = 0;

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

  function renderHTML(snapshot, imageno) {
    var obj = snapshot.val();

    var col = $("<div class='col-md-4 onelisting'>");
    var card = $("<div class='card' style='width: 18rem;'>");

    var image = $(
      "<img class='card-img-top' src='assets/images/" +
        imageno +
        ".jpg' height='200' width='200' alt='Card image cap'>"
    );
    var cardBody = $("<div class='card-body'>");
    var cardTitle = $("<h5 class='card-title'>");
    cardTitle.text(obj.address + ', ' + obj.postalcode);
    var cardData = $("<p class='card-text'>");
    cardData.html(
      obj.price +
        '<br>' +
        obj.beds +
        " <i class='fas fa-bed'></i><span>   </span>" +
        obj.baths +
        " <i class='fas fa-bath'></i>"
    );
    var cardDetails = $("<a href='#' class='btn btn-primary details'>");
    cardDetails.text('Details');
    cardDetails.attr('data-key', snapshot.key);
    cardDetails.attr('image-no', imageno);

    cardBody.append(cardTitle);
    cardBody.append(cardData);
    cardBody.append(cardDetails);

    card.append(image);
    card.append(cardBody);

    col.append(card);

    $('.row').append(col);
  }

  database.ref().on(
    'child_added',
    function(snapshot) {
      imageno++;
      renderHTML(snapshot, imageno);
    },
    function(errorObject) {
      console.log('Error: ' + errorObject.code);
    }
  );

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      $('.loginlogout').text('Log Out');
      $('.loginlogout').attr('login-stat', 'logout');

      $('.createlisting').show();

      console.log(user);
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

  $('.createlisting').on('click', function() {
    window.location.replace('addlisting.html');
  });

  $(document.body).on('click', '.details', function(event) {
    event.preventDefault();
    // alert($(this).attr('data-key'));

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.

      sessionStorage.clear();

      database
        .ref()
        .child($(this).attr('data-key'))
        .once('value')
        .then(function(snapshot) {
          sessionStorage.setItem('address', snapshot.val().address);
        });

      sessionStorage.setItem('address', child.address);
      // sessionStorage.setItem('baths', user.baths);
      // sessionStorage.setItem('beds', user.beds);
      // sessionStorage.setItem('description', user.description);
      // sessionStorage.setItem('postalcode', user.postalcode);
      // sessionStorage.setItem('price', user.price);
      // sessionStorage.setItem('size', user.size);
      // sessionStorage.setItem('type', user.type);
      // sessionStorage.setItem('utilities', user.utilities);

      sessionStorage.setItem('image-no', $(this).attr('image-no'));
      sessionStorage.setItem('data-key', $(this).attr('data-key'));

      window.location.replace('details.html');
    } else {
      $('#exampleModalCenter').modal('show');
    }
  });

  $('#detaillogin').on('click', function() {
    window.location.replace('login.html');
  });
});
