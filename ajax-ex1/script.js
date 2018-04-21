$(function(){
  $('button').click(function(){
    // notify the user that we're loading data
    $('button').text('generating doggo...');

    $.get('https://dog.ceo/api/breeds/image/random', function(response){
      // notify the user that we've now received teh data
      $('button').text('generate doggo');

      $('body').append('<img src="' + response.message +'" />')
    });
  });
});
