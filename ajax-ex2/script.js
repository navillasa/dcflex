$(function(){

  $.get('https://dog.ceo/api/breeds/list', function(response){

    response.message.forEach(function(currentBreed) {
      $('select').append('<option val="' + currentBreed + '">' + currentBreed + '</option>')
    });
  });

  $('select').change(function(){
    var dogBreed = $(this).val();
    var url = "https://dog.ceo/api/breed/" + dogBreed + "/images/random";
    $.get(url, function(response){
      $('body').append('<img src="' + response.message + '" />');
    });
  });
});
