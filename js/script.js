$('.burger-new').click(function() {
  $(this).toggleClass('active-new')
})

$('#mySlide').slick({
  slideToShow: 1,
  dots: true,
  arrows: false
});

$('.showPopup').click(function() {
  $('.modal-wrapper').addClass('.active-new');
})

$('.modal-wrapper').click(function(event) {
  console.log(event);
  $('.modal-wrapper').removeClass('.active-new');
})
