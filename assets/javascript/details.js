$(document).ready(function() {
  // sessionStorage.getItem('address');
  // sessionStorage.getItem('baths');
  // sessionStorage.getItem('beds');
  // sessionStorage.getItem('description');
  // sessionStorage.getItem('postalcode');
  // sessionStorage.getItem('price');
  // sessionStorage.getItem('size');
  // sessionStorage.getItem('type');
  // sessionStorage.getItem('utilities');

  // sessionStorage.getItem('data-key');

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
});
