//Mateus - Ativando os efeitos do burguer menu (responsive screens)
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
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 4000
});

//Mateus - Validando o email inserido no formulário
function ValidateEmail(inputText){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if(inputText.value.match(mailformat)){
    document.form.email.focus();
    return true;
  } else{
    alert("You have entered an invalid email address!");
    document.right.email.focus();
    return false;
  }
}
