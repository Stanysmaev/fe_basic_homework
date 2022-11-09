$('#mySlide').slick({
  slideToShow: 1,
  dots: true,
  arrows: false
});

$('.showPopup').click(function() {
  $('.modal-wrapper').addClass('active-new');
});

$('.modal-wrapper, .service-entry-cross, .modal-window .close').click(function(event) {
  if (event.target == event.currentTarget) {
    $('.modal-wrapper').removeClass('active-new');
  }
});

$('#pills-1-tab').click(function() {
  $('#pills-1-tab').addClass('active-urls-element');
  $('#pills-2-tab').removeClass('active-urls-element');
  $('#pills-3-tab').removeClass('active-urls-element');
  $('#pills-4-tab').removeClass('active-urls-element');
});

$('#pills-2-tab').click(function() {
  $('#pills-2-tab').addClass('active-urls-element');
  $('#pills-1-tab').removeClass('active');
  $('#pills-1-tab').removeClass('active-urls-element');
  $('#pills-3-tab').removeClass('active-urls-element');
  $('#pills-4-tab').removeClass('active-urls-element');
});

$('#pills-3-tab').click(function() {
  $('#pills-3-tab').addClass('active-urls-element');
  $('#pills-1-tab').removeClass('active');
  $('#pills-1-tab').removeClass('active-urls-element');
  $('#pills-2-tab').removeClass('active-urls-element');
  $('#pills-4-tab').removeClass('active-urls-element');
});

$('#pills-4-tab').click(function() {
  $('#pills-4-tab').addClass('active-urls-element');
  $('#pills-1-tab').removeClass('active');
  $('#pills-1-tab').removeClass('active-urls-element');
  $('#pills-2-tab').removeClass('active-urls-element');
  $('#pills-3-tab').removeClass('active-urls-element');
});

// функция для кнопки на странице index 
const item = document.querySelector('.big-h');
const getItemCoords = item.getBoundingClientRect().bottom;
console.log(getItemCoords)
$('.href-button-h').click(function(){
  $('html, body').animate({scrollTop: getItemCoords}, 0);
  // return false;
});

$('.burger').click(function() {
  $(this).toggleClass('burger-active')
  $('.menu').toggleClass('open')
  $('.burger-panel').toggleClass('burger-panel-open')

});

$('.menu, .close, .burger-cross').click(function(event) {
  if (event.target == event.currentTarget) {
    $('.menu').removeClass('open');
    $('.burger-panel').removeClass('burger-panel-open')
  }
});