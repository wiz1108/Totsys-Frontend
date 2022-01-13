/**
 * Totsys Genesis
 *
 * @category    Front end
 * @package     Main js
 * @copyright   Copyright (c) 2021 Totsys. (http://www.TotsysGenesis.com)
 * @author      Totsys team
 */


var $ = jQuery.noConflict();


$(document).ready(function(){
  /*owl carousel*/
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:6,
        dots: false,
        nav:true,
        navText: ["<img src='../images/Logos/Arrow-left.png'>","<img src='../Images/Logos/Arrow-right.png'>"],
        rtl: false,
        loop:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:1500,
        animateOut: 'fadeOut',
        autoplayHoverPause:false,
        center:true,
           // smartSpeed:1000,
  
    responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 6
        }
      },




      
    });


/*menu-mobile clic*/
$(".navbar-toggler").click(function(){
  
  
$(".navbarNav").toggleClass("displayblock");
});

    /*Faq*/
    $(".accordion-button").click(function () {
      // If the clicked element has thfe active class, remove the active class from EVERY .nav-link>.state element
      if ($(this).parent().parent().hasClass("active")) {
        $(".accordionButtonActive").removeClass("active");
      }
      // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
      else {
        $(".accordionButtonActive").removeClass("active");
        $(this).parent().parent().addClass("active");
      }
    });
    /*team*/

    $(".TeamActive").click(function () {
      // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
      if ($(this).hasClass("active")) {
        $(".TeamActive").removeClass("active");
      }
      // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
      else {
        $(".TeamActive").removeClass("active");
        $(this).addClass("active");
      }
    });




    /*roadmap*/
    function qs(selector, all = false) {
      return all ? document.querySelectorAll(selector) : document.querySelector(selector)
  }
  
  const sections = qs('.section', true);
  const timeline = qs('.timeline');
  const line = qs('.line');
  line.style.bottom = `calc(100% - 20px)`;
  let prevScrollY = window.scrollY;
  let up, down;
  let full = false;
  let set = 0;
  const targetY = window.innerHeight * 0.8;
  
  function scrollHandler(e){
      const{
          scrollY
      } = window;
      up = scrollY < prevScrollY;
      down = !up;
      const timelineRect = timeline.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect(); //CONST LINEHEIGHT = lineRect.bottom - lineRect.top
  
      const dist = targetY - timelineRect.top
    //  console.log(dist);
  
      if (down && !full){
          set = Math.max(set, dist);
              line.style.bottom = `calc(100% - ${set}px)`
      }
  
      if (dist > timeline.offsetHeight + 50 && !full){
          full = true;
          line.style.bottom = `-50px`
      }
  
      sections.forEach(item => {
          //console.log(items);
          const rect = item.getBoundingClientRect();
  
          if(rect.top + item.offsetHeight / 5 < targetY) {
              item.classList.add('show-me')
          }
      });
  
      prevScrollY = window.scrollY;
  }
  
  scrollHandler();
  line.style.display = 'block';
  window.addEventListener('scroll', scrollHandler);



  
 /*back to top*/

 //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction(),myFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}






});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/*MENU HOVER*/

// When the user scrolls the page, execute myFunction
window.onscroll = function() {};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

