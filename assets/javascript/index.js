$(document).ready(function() {
  var imageno;

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
    cardTitle.text('Card title');
    var cardData = $("<p class='card-text'>");
    cardData.text("Here's some text!");
    var cardDetails = $("<a href='#' class='btn btn-primary'>");
    cardDetails.text('Details');

    cardBody.append(cardTitle);
    cardBody.append(cardData);
    cardBody.append(cardDetails);

    card.append(image);
    card.append(cardBody);

    col.append(card);

    $('.row').append(col);

    // <div class='card' style='width: 18rem;'>
    //   <img class='card-img-top' src='assets/images/1.jpg' height='200' width='200' alt='Card image cap'>
    //   <div class='card-body'>
    //     <h5 class='card-title'>Card title</h5>
    //     <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     <a href='#' class='btn btn-primary'>Details</a>
    //   </div>
    // </div>

    // var row = $("<tr id='" + snapshot.key + "'>");

    // row.append($('<td>').text(obj.trainname));
    // row.append($('<td>').text(obj.destination));
    // row.append($('<td>').text(frequency));
    // row.append($('<td>').text(nextArrival));
    // row.append($('<td>').text(minutesAway));
    // row.append(
    //   $('<td>').html(
    //     "<button type='button' data-key='" +
    //       snapshot.key +
    //       "' class='btn btn-outline-danger remove'>Remove</button><span> </span><button type='button' data-key='" +
    //       snapshot.key +
    //       "' class='btn btn-outline-warning update' data-toggle='modal' data-target='#exampleModal' " +
    //       "data-name='" +
    //       obj.trainname +
    //       "' data-dest='" +
    //       obj.destination +
    //       "' data-time='" +
    //       obj.firsttraintime +
    //       "' data-freq='" +
    //       obj.frequency +
    //       "' " +
    //       '>Update</button>'
    //   )
    // );

    // $('#tabledisplay').append(row);

    // $('#updateform').attr('data-key', snapshot.key);
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
});
