$(document).ready(function() {
  var address = sessionStorage.getItem('address');
  var baths = sessionStorage.getItem('baths');
  var beds = sessionStorage.getItem('beds');
  var description = sessionStorage.getItem('description');
  var postalcode = sessionStorage.getItem('postalcode');
  var price = sessionStorage.getItem('price');
  var size = sessionStorage.getItem('size');
  var type = sessionStorage.getItem('type');
  var utilities = sessionStorage.getItem('utilities');

  var datakey = sessionStorage.getItem('data-key');

  var imageno = sessionStorage.getItem('image-no');

  $('#detailimage1').append(
    "<img class='d-block w-100' src='assets/images/details/" +
      imageno +
      "/1.jpg' height='500' width='500' alt='First slide'>"
  );
  $('#detailimage2').append(
    "<img class='d-block w-100' src='assets/images/details/" +
      imageno +
      "/2.jpg' height='500' width='500' alt='First slide'>"
  );
  $('#detailimage3').append(
    "<img class='d-block w-100' src='assets/images/details/" +
      imageno +
      "/3.jpg' height='500' width='500' alt='First slide'>"
  );
  $('#detailimage4').append(
    "<img class='d-block w-100' src='assets/images/details/" +
      imageno +
      "/4.jpg' height='500' width='500' alt='First slide'>"
  );

  $('#address').text(address);
  $('#baths').text(baths);
});
