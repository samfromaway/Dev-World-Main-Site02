//----Menu----//
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

const navSlide = () => {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('burger-active');
  });
};

navSlide();

// Contact Form Red Border

$(function () {
  $('#myform').submit(function () {
    var valid = 0;
    $(this)
      .find('input[type=text], textarea[name=message]')
      .each(function () {
        if ($(this).val() != '') {
          valid++;
          $(this).css('border-color', 'initial');
        } else {
          $(this).css('border-color', 'red');
        }
      });

    if (valid > 0) {
      return true;
    } else {
      return false;
    }
  });
});
