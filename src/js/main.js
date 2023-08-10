"use strict";
import "jquery";
import "jquery-ui/dist/jquery-ui";
import "slick-carousel";




// Class definition
var App = (function () {
  
  const initSliders = () => {
    $(".slider-img").slick({
      slidesToShow: 5,
      slidesToScroll: 2,
      dots: false,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: false,

    });

    //j'ajoute la classe ici et je la configure comme ci-dessus
      
    $(".slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: false,
     
    });


    $(".slider-reviews").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: false,
     
    });


    }
   

  // Public methods
  return {
    init: function () {
      initSliders();
    },
  };
})();

// Class Initialization
jQuery(document).ready(function () {
  App.init();
});


//function
// function previous() {

// }

// function next() {
//   document.querySelector(".slider").scrollLeft += 60;
// }