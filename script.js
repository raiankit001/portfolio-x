
  var typed = new Typed('#autoType', {
    strings: ['WEB DEVELOPER', 'FREELANCER'],
    typeSpeed: 100,
    backSpeed:100,
    loop:true
  });



  // navbar color change

function changebg(){
  var navbar = document.getElementById('navbar');
  var scrollValue = window.scrollY;
  if(scrollValue < 100){
    navbar.classList.remove("navcol");
  }else{
    navbar.classList.add("navcol");
  }
}

window.addEventListener('scroll',changebg);