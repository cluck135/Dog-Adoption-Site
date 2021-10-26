let randomBreedList = "https://dog.ceo/api/breeds/list/all";
let randomDoggo = "https://dog.ceo/api/breeds/image/random/3";

let message = "Breed of that type is not available for adoption";
let placeholder =
  "https://meredith.nhcrafts.org/wp-content/uploads/dog-placeholder.jpg";

let breedOne = document.getElementById("random1");
let breedTwo = document.getElementById("random2");
let breedThree = document.getElementById("random3");
let randDoggos = document.querySelector(".randImgs");
let randImg = document.querySelectorAll(".randImg");
let adoptionList = document.getElementById("adoptionList");
let randomBtn = document.getElementById("random-button");

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
          localStorage.setItem("breeds", JSON.stringify(breeds));
        } else if (i == 1) {
          breedTwo.src = img;
          secondPic = Doggo.message[1]
            .split("breeds/")[1]
            .split("/")[0]
            .split("-")[0];
          breeds.push(secondPic);
          localStorage.setItem("breeds", JSON.stringify(breeds));
        } else if (i === 2) {
          breedThree.src = img;
          thirdPic = Doggo.message[2]
            .split("breeds/")[1]
            .split("/")[0]
            .split("-")[0];
          breeds.push(thirdPic);
          localStorage.setItem("breeds", JSON.stringify(breeds));
        }
      }
    });
}
const myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
myHeaders.append(
  "Authorization",
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3aHBEYnNsQm16Z2hCUHhUZEJCMlRDcmpKWDlFTlJpaVdrUkh5SmN1MkFMR3NobUxlUyIsImp0aSI6ImYzNzQ3N2RjNjMyODQxYzdkODQwMzlmMmUxN2YyMmNlZmY0ZGZiYTcwMTliOGQ0YmI1YTk5YWE0OTQ5NjQzODQ0MjA3MGM2YjhjYTk5MGQ0IiwiaWF0IjoxNjM1MjA3NDk2LCJuYmYiOjE2MzUyMDc0OTYsImV4cCI6MTYzNTIxMTA5Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.ASLZs5JISLWA7zTC1c52cIa19Q5_LPNUqfkX9VaeO5mttFUfdx_R5yf44NZzw2VfwOPZl549pxK6knevAZkuFobxRnqQ1Uq0Mjn7ICx5qtlwwSy0D8qq9wl4jEWO_UBkT1XTx_SglUUpLlXR2tbleadCVXqhllpR2ixW4VBwk1xzGAzYsBuv6WHTqktHVWcNg1v_0sFwYfMO4SSIHQVHdFqVUN03x0712QGd86yQz9AEk7Z7D2Ep6r7Nb-2EYTqzTwICsls80ZIMIqTZQoqkfP4MkwOEVydnW6bnpbW3BD0BR0AisS8IfSGI-EQg89i5wXGv4ve0uhDvzqlYzzs_Og"
);

fetch("https://api.petfinder.com/v2/types/Dog/breeds", {
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
    let Doggo1 = data;
  });

fetch("https://api.petfinder.com/v2/animals?type=dog&page=1", {
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
      let anchor = document.createElement("a");
      let name = document.createElement("h1");
      let url = Doggo2.animals[i].url;
      let pic = document.createElement("img");
      let desc = document.createElement("p");
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

      div.appendChild(name);
      div.appendChild(desc);

      li.appendChild(anchor);
      li.appendChild(div);

      adoptionList.appendChild(li);
    }
  });

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

randDoggos.addEventListener("click", function (e) {
  let index = e.target.dataset.index;
  let randBreedArray = JSON.parse(localStorage.getItem("breeds"));
  let breed = randBreedArray[index];

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
        return response.json();
      } else {
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
        let anchor = document.createElement("a");
        let name = document.createElement("h1");
        let url = Doggo1.animals[i].url;
        let pic = document.createElement("img");
        let desc = document.createElement("p");
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

        div.appendChild(name);
        div.appendChild(desc);

        li.appendChild(anchor);
        li.appendChild(div);

        adoptionList.appendChild(li);
      }
    });
});

randomBtn.addEventListener("click", function () {
  displayRandomDogs(randomDoggo);
});

//curl -d "grant_type=client_credentials&client_id=5gyYpH99UKTQsKQ27CtKPorIMTjWhCWZf1Ky2kcDCHF9OiISmv&client_secret=Otrvy30rjrgjAu2XkRF9lyh3xrmrg3enhCOucfSH" https://api.petfinder.com/v2/oauth2/token
// Curl command to generate auth token
//Use Fetch command on page load to create new authorization token so no more issues with expiration
