$(document).ready(() => {

  // scrollLeft
  // $('html, body, *').mousewheel(function (e, delta) {
  //   e.preventDefault();
  //   this.scrollLeft -= (delta * 500);
  // });

  // document.getElementById("TattooVideo").play(); 


  // mNavMenuClick
  $('.mNavMenuButton').click((e) => {
    e.preventDefault();
    $(".mNavMenu").toggleClass('mNavMenuOpen');
  });

  // slick
  $('.galleryArea').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplayspeed: 1000
  });


  // typed
  var options = {
    strings: ['週五 休息', '禮拜五 公休'],
    startDelay: 100,
    typeSpeed: 200,
    backSpeed: 100,
    loop: true,
    smartBackspace: false,
  };

  var typed = new Typed('.fridayClose', options);


  // swiper
  var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    // grabCursor: true,
    cubeEffect: {
      shadow: false,
      // slideShadows: true,
      // shadowOffset: 20,
      // shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

});