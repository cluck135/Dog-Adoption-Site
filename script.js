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
let minNumber = Math.ceil(1);
let maxNumber = Math.floor(4827);
let randomNumber = Math.floor(
  Math.random() * (maxNumber - minNumber) + minNumber
);

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

myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1Z3lZcEg5OVVLVFFzS1EyN0N0S1BvcklNVGpXaENXWmYxS3kya2NEQ0hGOU9pSVNtdiIsImp0aSI6IjM3ODY5MzU0M2Y4OTcwMWJkODFkZWM1NmQyNWE3OTU1ZmNhZTdkZjRlMWI0OTQ1NWEzMWVmOTE2ZDY3MDU1ZjgxZWViZDQxMjU1OGRiMDRhIiwiaWF0IjoxNjM1Mjg5NDk2LCJuYmYiOjE2MzUyODk0OTYsImV4cCI6MTYzNTI5MzA5Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.MVU77tQ-A9I9qLjEobwEesRACp5xnP0CM5ig8tlXhk57CyCq8bLS9nRjIylGXzx0ug42Ua-te659gpnA-yzNm2hZmf0atke7VeOg7bjgi7H1wMbztG4gcHD2RCbZBKbyWFJM6qQ3yBXAjoFIUTmECJojoINdgPMChYgvwxwO3JgI36gX3peN03EMoQXtvr6k_0NwRrl7FB41E7JRTsnFvTRj3Y88EWkDg9hDaBdED5ZFDbkP-F9pTcZMB2TIhfGddp8xLe05ltG6roU4pndiAG4EXAGNPI1bkWLCG9_tvj-DmcY8bsUSPaJZqy3Yte_FaK0uyMLWgl6RBE-wZeTkZQ');

// fetch('https://api.petfinder.com/v2/types/Dog/breeds', {
//   method: 'GET',
//   headers: myHeaders,
// }) .then(function (response) {
//     console.log(response)
//     if(response.ok){
//         return response.json()
//     }else{
//         throw new Error(message || response.status)
//     }
  
// }).then(function (data) {
//   console.log(data)
//   let Doggo1 = data

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// });

fetch("https://api.petfinder.com/v2/animals?type=dog&page=" + randomNumber, {
  method: 'GET',
  headers: myHeaders,
}).then(function (response) {
    console.log(response)
    if(response.ok){
        return response.json()
    }else{
        throw new Error(message || response.status)
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