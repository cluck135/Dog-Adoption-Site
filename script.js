let randomBreedList = "https://dog.ceo/api/breeds/list/all"
let randomDoggo = "https://dog.ceo/api/breeds/image/random/3"

let message = "Breed of that type is not available for adoption"
let placeholder = 'https://meredith.nhcrafts.org/wp-content/uploads/dog-placeholder.jpg'


let breedOne = document.getElementById("random1");
let breedTwo = document.getElementById("random2");
let breedThree = document.getElementById("random3");
let randDoggos = document.querySelector(".randImgs");
let randImg = document.querySelectorAll(".randImg")
let adoptionList = document.getElementById("adoptionList");



fetch(randomDoggo)
  .then(function (response) {
      console.log(response)
      if(response.ok){
          return response.json()
      }else{
          throw new Error(message || response.status)
      }
    
  }).then(function (data) {
    console.log(data)
    let Doggo = data
    let firstPic;
    let secondPic;
    let thirdPic;
    let breeds = [];
    for(let i = 0; i<Doggo.message.length; i++){
        let img = Doggo.message[i]
        if(i == 0){
            breedOne.src= img
            firstPic = Doggo.message[0].split("breeds/")[1].split("/")[0].split("-")[0]
            breeds.push(firstPic)
            localStorage.setItem("breeds", JSON.stringify(breeds))
        }else if(i == 1){
            breedTwo.src = img
            secondPic=Doggo.message[1].split("breeds/")[1].split("/")[0].split("-")[0]
            breeds.push(secondPic)
            localStorage.setItem("breeds", JSON.stringify(breeds) )
        }else if(i === 2){
            breedThree.src = img
            thirdPic= Doggo.message[2].split("breeds/")[1].split("/")[0].split("-")[0]
            breeds.push(thirdPic)
            localStorage.setItem("breeds", JSON.stringify(breeds))
        }
    }

  });


const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1Z3lZcEg5OVVLVFFzS1EyN0N0S1BvcklNVGpXaENXWmYxS3kya2NEQ0hGOU9pSVNtdiIsImp0aSI6ImNjMzUxMmExZDI2YmFkYjgxYmY1MWE1MWU3N2IyYThkZWY5YWMwMDU4MDIzYTk3Zjg4NmY2ZTNhNGZhZjQ4MDRlNmVlMDI1NjJmOTkxMGMyIiwiaWF0IjoxNjM1MTA1Mzc4LCJuYmYiOjE2MzUxMDUzNzgsImV4cCI6MTYzNTEwODk3OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.ETmDgdgRubBQb6MaYU36po1i6fOD5WxgxSX25akUpXeBCIhyHUiEONwEj2m8PO6zJXQBNlAeU2iFxeBu7YdtnHDX7JzsLDgrAGIuR2lvnS7ljE_yrMNmhooCVE3cEh8W746bfhSf2gw7V5_cJrUeDFPeBbapJqY72sVeJXHN_PbDmd7AXtOegseHjLQ9W7PXVM94qgqB5aKI8ZZ8FY_4BcJUONLyHqrBX7nAz0lMy0WDy0872q5hTotgRXpVHfMo8op9ScYUvF87oiGPOPzBneUHoIC1oWHGikiBnTCog25JtcuThf5GM3XAyC888sno4Jqh8XOJKANt4ViTjc2Rnw');

fetch('https://api.petfinder.com/v2/types/Dog/breeds', {
  method: 'GET',
  headers: myHeaders,
}) .then(function (response) {
    console.log(response)
    if(response.ok){
        return response.json()
    }else{
        throw new Error(message || response.status)
    }
  
}).then(function (data) {
  console.log(data)
  let Doggo1 = data


});

fetch('https://api.petfinder.com/v2/animals?type=dog&page=1', {
  method: 'GET',
  headers: myHeaders,
}) .then(function (response) {
    console.log(response)
    if(response.ok){
        return response.json()
    }else{
        throw new Error(message || response.status)
    }
  
}).then(function (data) {
  console.log(data)
  let Doggo2 = data
  for(let i = 0; i<Doggo2.animals.length; i++){
      let picUrl = ''
      let dogDesc = Doggo2.animals[i].description
      let dogName = Doggo2.animals[i].name
        if(data.animals[i].photos[0]){
            picUrl = data.animals[i].photos[0].full
        }
    let li = document.createElement("li")
    let div = document.createElement("div")
    let anchor = document.createElement("a")
    let name = document.createElement("h1")
    let url = Doggo2.animals[i].url
    let pic = document.createElement("img")
    let desc = document.createElement("p")
    li.style.display.flex
    anchor.style.display.inline
    name.textContent = dogName
    
    name.style.fontSize = '40px'
    div.style.display.inline
    desc.innerText = dogDesc;
        if(data.animals[i].photos[0]){
            pic.setAttribute("src", picUrl)
        }else{
            pic.setAttribute("src", placeholder)
        }
    pic.setAttribute("class", 'dogImg')

    anchor.setAttribute("href", url)
    anchor.appendChild(pic)

    div.appendChild(name)
    div.appendChild(desc)
    
    li.appendChild(anchor)
    li.appendChild(div)

    adoptionList.appendChild(li)
  }
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

randDoggos.addEventListener("click", function(e){
    let index = e.target.dataset.index
    let randBreedArray = JSON.parse(localStorage.getItem("breeds"))
    let breed = randBreedArray[index];

    fetch('https://api.petfinder.com/v2/animals?type=dog&breed='+breed+'&page=1', {
    method: 'GET',
    headers: myHeaders,
    }) .then(function (response) {
        console.log(response)
        if(response.ok){
            return response.json()
        }else{
            throw new Error(message || response.status)
        }
    
    }).then(function (data) {
    console.log(data)
    let Doggo1 = data
    removeAllChildNodes(adoptionList)

    for(let i = 0; i<Doggo1.animals.length; i++){
        let picUrl = ''
        let dogDesc = Doggo1.animals[i].description
        let dogName = Doggo1.animals[i].name
          if(data.animals[i].photos[0]){
              picUrl = data.animals[i].photos[0].full
          }
      let li = document.createElement("li")
      let div = document.createElement("div")
      let anchor = document.createElement("a")
      let name = document.createElement("h1")
      let url = Doggo1.animals[i].url
      let pic = document.createElement("img")
      let desc = document.createElement("p")
      li.style.display.flex
      anchor.style.display.inline
      name.textContent = dogName
      
      name.style.fontSize = '40px'
      div.style.display.inline
      desc.innerText = dogDesc;
          if(data.animals[i].photos[0]){
              pic.setAttribute("src", picUrl)
          }else{
              pic.setAttribute("src", placeholder)
          }
      pic.setAttribute("class", 'dogImg')

      anchor.setAttribute("href", url)
      anchor.appendChild(pic)

      div.appendChild(name)
      div.appendChild(desc)
      
      li.appendChild(anchor)
      li.appendChild(div)

      adoptionList.appendChild(li)
    }

    });
})



//curl -d "grant_type=client_credentials&client_id=5gyYpH99UKTQsKQ27CtKPorIMTjWhCWZf1Ky2kcDCHF9OiISmv&client_secret=Otrvy30rjrgjAu2XkRF9lyh3xrmrg3enhCOucfSH" https://api.petfinder.com/v2/oauth2/token
// Curl command to generate auth token
//Use Fetch command on page load to create new authorization token so no more issues with expiration








