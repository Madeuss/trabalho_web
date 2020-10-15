function activeBurgerMenu() {
  let burgerIcon = document.getElementById("burger-icon");
  let navbar = document.getElementById("navbar");

  burgerIcon.addEventListener('click', function(){
    navbar.classList.toggle("change")
  })
  

}
activeBurgerMenu()

//Carlos - Inserindo framework e adicionando alguns detalhes
$('.slider-principal').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1
});

