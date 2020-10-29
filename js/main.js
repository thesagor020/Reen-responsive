(function ($) {
"use strict";

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
	nav:false,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      $('.navbar-wrapper').stickUp();
    });
  });  
  
jQuery(function($) {
    $(document).ready( function() {
        new WOW().init();
    });
  });  
     
  
  jQuery(function($) {
    $(document).ready( function() {
        $('.demo').animationCounter({
            start: 0,
            delay:10,
            end: 5000
          });               
  
    });
  }); 
  


})(jQuery);