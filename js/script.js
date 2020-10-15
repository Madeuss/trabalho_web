function activeBurgerMenu() {
  let burgerIcon = document.getElementById("burger-icon");
  let navbar = document.getElementById("navbar");

  burgerIcon.addEventListener('click', function(){
    navbar.classList.toggle("change")
  })
  

}
activeBurgerMenu()


$('.slider-principal').slick();

