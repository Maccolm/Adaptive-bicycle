
let header__burger = document.querySelector('.header_menu');
let header_menu = document.querySelector('.menu_icon');
let back = document.querySelector('.menu_body');
let header__list = document.querySelector('.menu_list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}
///---Social media Переключатель..//

////////slader----------//////

$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
    });
});
