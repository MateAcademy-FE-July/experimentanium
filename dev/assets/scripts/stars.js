$(document).ready(function() {

  $('.star.rating').click(function () {
    $(this).parent().attr('data-stars', $(this).data('rating'));
  });
  
});