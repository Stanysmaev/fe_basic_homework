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

$('#pills-1-tab').click(function() {
  $('#pills-1-tab').addClass('active-urls-element');
  $('#pills-2-tab').removeClass('active-urls-element');
  $('#pills-3-tab').removeClass('active-urls-element');
  $('#pills-4-tab').removeClass('active-urls-element');
})

$('#pills-2-tab').click(function() {
  $('#pills-2-tab').addClass('active-urls-element');
  $('#pills-1-tab').removeClass('active');
  $('#pills-1-tab').removeClass('active-urls-element');
  $('#pills-3-tab').removeClass('active-urls-element');
  $('#pills-4-tab').removeClass('active-urls-element');
})

$('#pills-3-tab').click(function() {
  $('#pills-3-tab').addClass('active-urls-element');
  $('#pills-1-tab').removeClass('active');
  $('#pills-1-tab').removeClass('active-urls-element');
  $('#pills-2-tab').removeClass('active-urls-element');
  $('#pills-4-tab').removeClass('active-urls-element');
})

$('#pills-4-tab').click(function() {
  $('#pills-4-tab').addClass('active-urls-element');
  $('#pills-1-tab').removeClass('active');
  $('#pills-1-tab').removeClass('active-urls-element');
  $('#pills-2-tab').removeClass('active-urls-element');
  $('#pills-3-tab').removeClass('active-urls-element');
})