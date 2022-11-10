// функция для кнопки на странице index 
const item = document.querySelector('.big-h');
const getItemCoords = item.getBoundingClientRect().bottom;
console.log(getItemCoords)
$('.href-button-h').click(function(){
  $('html, body').animate({scrollTop: getItemCoords}, 0);
  // return false;
});