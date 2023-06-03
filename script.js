
// sidebar open close js code
// let navLinks = document.querySelector(".nav-links");
// let menuOpenBtn = document.querySelector(".navbar .hamburger");
// let menuCloseBtn = document.querySelector(".nav-links .hamburger");
// menuOpenBtn.onclick = function() {
// navLinks.style.left = "0";
// }
// menuCloseBtn.onclick = function() {
// navLinks.style.left = "100%";
// }
// // sidebar submenu open close js code
// let htmlcssArrow = document.querySelector(".htmlcss-arrow");
// htmlcssArrow.onclick = function() {
//  navLinks.classList.toggle("show1");
// }

// document.getElementById("demo").style.transform="rotate(-180deg)";


// var lastScrollTop; // This Varibale will store the top position

// navbar = document.getElementById('navbar'); // Get The NavBar

// window.addEventListener('scroll',function(){
//  //on every scroll this funtion will be called
  
//   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   //This line will get the location on scroll
  
//   if(scrollTop > lastScrollTop){ //if it will be greater than the previous
//     navbar.style.top='-80px';
//     //set the value to the negetive of height of navbar 
//   }
  
//   else{
//     navbar.style.top='0';
//   }
  
//   lastScrollTop = scrollTop; //New Position Stored
// });






function arrowRotet(id) {
    if (document.getElementById(id).style.transform == "rotate(90deg)") {
        // document.getElementById(id).style.transition = "all 0.5s";

        document.getElementById(id).style.transform = "rotate(0deg)";
    }
    else {
        // document.getElementById(id).style.transition = "all 0s";
        document.getElementById(id).style.transform = "rotate(90deg)";
       
    }
}