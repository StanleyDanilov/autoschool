// dropdown menu ========

let navBar = document.querySelector('.header-nav');
let dropDownMenu = document.querySelector('.dropdown-menu');
console.log(dropDownMenu);

navBar.addEventListener('click', e => {
  if (e.target.classList.contains('btn-dropdown-show')) {
    dropDownMenu.classList.toggle('dropdown-menu__show');
  }
});

$(function() {
  $('.photos__slider-large').slick({
    arrows: false,
    asNavFor: '.photos__slider-small',
  });

  $('.photos__slider-small').slick({
    slidesToShow: 3,
    asNavFor: '.photos__slider-large',
    centerMode: true
  });

})