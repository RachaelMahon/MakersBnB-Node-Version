$(document).ready(function() {
  var prop = new Properties();
  var array = prop.listAvailableProperties();

  $('#bowl').click(function () {
    document.getElementById('demo').innerHTML = $.map(array, function(value) {
      return( '<br>' + value );
  });
  });

  $(window).load(function(){
  $('.scroll').fadeIn();

});

});
