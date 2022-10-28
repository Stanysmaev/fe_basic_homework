$('.burger-new').click(function() {
  $(this).toggleClass('active-new')
})

$('#mySlide').slick({
  slideToShow: 1,
  dots: true,
  arrows: false
});

$('.showPopup').click(function() {
  $('.modal-wrapper').addClass('active-new');
})

$('.modal-wrapper, .modal-window .close').click(function(event) {
  if (event.target == event.currentTarget) {
    $('.modal-wrapper').removeClass('active-new');
  }
})
