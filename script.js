let randomBreedList = "https://dog.ceo/api/breeds/list/all";
let randomDoggo = "https://dog.ceo/api/breeds/image/random/3";

let message = "Breed of that type is not available for adoption";
let placeholder =
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcountrylabradoodles.com%2Fwp-content%2Fuploads%2F2017%2F11%2Fdog-coming-soon1-400x267.jpeg&f=1&nofb=1";

let breedOne = document.getElementById("random1");
let breedTwo = document.getElementById("random2");
let breedThree = document.getElementById("random3");
let randDoggos = document.querySelector(".randImgs");
let randImg = document.querySelectorAll(".randImg");
let adoptionList = document.getElementById("adoptionList");
let randomBtn = document.getElementById("random-button");
let errorMsg = document.getElementById("error-message");
let randDogBreedOne = document.getElementById("rand-dog-breed-one");
let randDogBreedTwo = document.getElementById("rand-dog-breed-two");
let randDogBreedThree = document.getElementById("rand-dog-breed-three");
let minNumber = Math.ceil(1);
let maxNumber = Math.floor(4924);
let randomNumber = Math.floor(
  Math.random() * (maxNumber - minNumber) + minNumber
);

var audio = new Audio("Projects\Dog-Adoption-Site\single-dog-woof-sound.mp3");

displayRandomDogs(randomDoggo);

function displayRandomDogs(randomDoggo) {
  fetch(randomDoggo)
    .then(function (response) {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(message || response.status);
      }
    })
    .then(function (data) {
      console.log(data);
      let Doggo = data;
      let firstPic;
      let secondPic;
      let thirdPic;
      let breeds = [];
      for (let i = 0; i < Doggo.message.length; i++) {
        let img = Doggo.message[i];
        if (i == 0) {
          breedOne.src = img;
          firstPic = Doggo.message[0]
            .split("breeds/")[1]
            .split("/")[0]
            .split("-")[0];
          breeds.push(firstPic);
          randDogBreedOne.append(breeds[0]);
          localStorage.setItem("breeds", JSON.stringify(breeds));
        } else if (i == 1) {
          breedTwo.src = img;
          secondPic = Doggo.message[1]
            .split("breeds/")[1]
            .split("/")[0]
            .split("-")[0];
          breeds.push(secondPic);
          randDogBreedTwo.append(breeds[1]);
          localStorage.setItem("breeds", JSON.stringify(breeds));
        } else if (i === 2) {
          breedThree.src = img;
          thirdPic = Doggo.message[2]
            .split("breeds/")[1]
            .split("/")[0]
            .split("-")[0];
          breeds.push(thirdPic);
          randDogBreedThree.append(breeds[2]);
          localStorage.setItem("breeds", JSON.stringify(breeds));
        }
      }
    });
}

fetch("https://api.petfinder.com/v2/oauth2/token", {
  body: "grant_type=client_credentials&client_id=5gyYpH99UKTQsKQ27CtKPorIMTjWhCWZf1Ky2kcDCHF9OiISmv&client_secret=Otrvy30rjrgjAu2XkRF9lyh3xrmrg3enhCOucfSH",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  method: "POST",
})
  .then(function (response) {
    //console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(message || response.status);
    }
  })
  .then(function (data) {
    console.log(data);
    localStorage.setItem("auth", JSON.stringify(data));
    getAdoptionList();
  });

let randAuthToken = JSON.parse(localStorage.getItem("auth"));
let authToken = randAuthToken["access_token"];
console.log(authToken);

const myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer " + authToken + "");

// fetch("https://api.petfinder.com/v2/types/Dog/breeds", {
//   method: "GET",
//   headers: myHeaders,
// })
//   .then(function (response) {
//     console.log(response);
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error(message || response.status);
//     }
//   })
//   .then(function (data) {
//     console.log(data);
//     let Doggo1 = data;
//   });
function getAdoptionList(){
fetch("https://api.petfinder.com/v2/animals?type=dog&page=" + randomNumber, {
  method: "GET",
  headers: myHeaders,
})
  .then(function (response) {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(message || response.status);
    }
  })
  .then(function (data) {
    console.log(data);
    let Doggo2 = data;
    for (let i = 0; i < Doggo2.animals.length; i++) {
      let picUrl = "";
      let dogDesc = Doggo2.animals[i].description;
      let dogName = Doggo2.animals[i].name;
      if (data.animals[i].photos[0]) {
        picUrl = data.animals[i].photos[0].full;
      }
      let li = document.createElement("li");
      let div = document.createElement("div");
      div.classList.add("pet-finder-div");
      let anchor = document.createElement("a");
      let formAnchor = document.createElement("a");
      let formBtn = document.createElement("button");
      formBtn.classList.add("adoption-button");
      formAnchor.setAttribute("href", "./adopt-form.html");
      formBtn.innerText = "Adoption Form";
      formAnchor.target = "_blank";
      anchor.target = "_blank";
      let name = document.createElement("h1");
      name.setAttribute("id", "pet-finder-name");
      let url = Doggo2.animals[i].url;
      let pic = document.createElement("img");
      let desc = document.createElement("p");
      desc.setAttribute("id", "pet-finder-description");
      li.style.display.flex;
      anchor.style.display.inline;
      name.textContent = dogName;

      name.style.fontSize = "40px";
      div.style.display.inline;
      desc.innerText = dogDesc;
      if (data.animals[i].photos[0]) {
        pic.setAttribute("src", picUrl);
      } else {
        pic.setAttribute("src", placeholder);
      }
      pic.setAttribute("class", "dogImg");

      anchor.setAttribute("href", url);
      anchor.appendChild(pic);
      formAnchor.appendChild(formBtn);

      div.appendChild(name);
      div.appendChild(desc);
      div.appendChild(formAnchor);

      li.appendChild(anchor);
      li.appendChild(div);

      adoptionList.appendChild(li);
    }
  })};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

randDoggos.addEventListener("click", function (e) {
  let index = e.target.dataset.index;
  let randBreedArray = JSON.parse(localStorage.getItem("breeds"));
  let breed = randBreedArray[index];
  audio.play()
  if(e.target.dataset.index !== undefined){
  fetch(
    "https://api.petfinder.com/v2/animals?type=dog&breed=" + breed + "&page=1",
    {
      method: "GET",
      headers: myHeaders,
    }
  )
    .then(function (response) {
      console.log(response);
      if (response.ok) {
        errorMsg.innerText = "";
        return response.json();
      } else {
        errorMsg.innerText =
          "That dog breed is not up for adoption! Try another one!";
        throw new Error(message || response.status);
      }
    })
    .then(function (data) {
      console.log(data);
      let Doggo1 = data;
      removeAllChildNodes(adoptionList);

      for (let i = 0; i < Doggo1.animals.length; i++) {
        let picUrl = "";
        let dogDesc = Doggo1.animals[i].description;
        let dogName = Doggo1.animals[i].name;
        if (data.animals[i].photos[0]) {
          picUrl = data.animals[i].photos[0].full;
        }
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.classList.add("pet-finder-div");
        let anchor = document.createElement("a");
        let formAnchor = document.createElement("a");
        let formBtn = document.createElement("button");
        formBtn.classList.add("adoption-button");
        formAnchor.setAttribute("href", "./adopt-form.html");
        formBtn.innerText = "Adoption Form";
        formAnchor.target = "_blank";
        anchor.target = "_blank";
        let name = document.createElement("h1");
        name.setAttribute("id", "pet-finder-name");
        let url = Doggo1.animals[i].url;
        let pic = document.createElement("img");
        let desc = document.createElement("p");
        desc.setAttribute("id", "pet-finder-description");
        li.style.display.flex;
        anchor.style.display.inline;
        name.textContent = dogName;
  
        name.style.fontSize = "40px";
        div.style.display.inline;
        desc.innerText = dogDesc;
        if (data.animals[i].photos[0]) {
          pic.setAttribute("src", picUrl);
        } else {
          pic.setAttribute("src", placeholder);
        }
        pic.setAttribute("class", "dogImg");
  
        anchor.setAttribute("href", url);
        anchor.appendChild(pic);
        formAnchor.appendChild(formBtn);
  
        div.appendChild(name);
        div.appendChild(desc);
        div.appendChild(formAnchor);
  
        li.appendChild(anchor);
        li.appendChild(div);
  
        adoptionList.appendChild(li);
      }
    })}
    else{
      errorMsg.innerText = "Click the image not the text!"
    };
});

function playAudio() { 
  x.play(); 
} 

randomBtn.addEventListener("click", function () {
  randDogBreedOne.innerHTML = "";
  randDogBreedTwo.innerHTML = "";
  randDogBreedThree.innerHTML = "";
  displayRandomDogs(randomDoggo);
});
