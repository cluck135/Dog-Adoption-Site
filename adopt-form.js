// upon submit show message

const Page1 = document.querySelector(".formPage");
const Page2 = document.querySelector(".submitPage");
const submitBtn = document.querySelector("#submit");
const homeBtn = document.querySelector("#home");

submitBtn.addEventListener("click", function(){
    
    Page1.style.display = 'none';
    Page2.style.display = 'block';
  
  });

  homeBtn.addEventListener("click", function(){
    window.location.assign("https://cluck135.github.io/Dog-Adoption-Site/")

  });