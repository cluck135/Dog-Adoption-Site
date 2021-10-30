
const Page1 = document.querySelector(".formPage");
const Page2 = document.querySelector(".submitPage");
const submitBtn = document.querySelector("#submit");
const homeBtn = document.querySelector("#home");
const nameEl = document.querySelector("#nameValue");
const addressEl = document.querySelector("#addressValue");
const emailEl = document.querySelector("#emailValue");
const cellEl = document.querySelector("#cellValue");
const errorEl = document.querySelector("#error");


submitBtn.addEventListener("click", function(){

    if (!nameEl.value) {
        errorEl.innerText = "Please enter valid contact information!";
    } else if (!addressEl.value) {
        errorEl.innerText = "Please enter valid contact information!";
    } else if (!emailEl.value) {
      errorEl.innerText = "Please enter valid contact information!";  
    } else if (!cellEl.value) {
      errorEl.innerText = "Please enter valid contact information!";
    } else {
      Page1.style.display = 'none';
      Page2.style.display = 'block';
    }
});

  homeBtn.addEventListener("click", function(){
    window.location.assign("https://cluck135.github.io/Dog-Adoption-Site/")

  });