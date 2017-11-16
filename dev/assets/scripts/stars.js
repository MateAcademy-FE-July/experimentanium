$(document).ready(function() {

  $('.stars').on('click', '.star', function () {
    $(this).siblings('.pick').removeClass('pick');
    $(this).addClass('pick');
  });
  
});