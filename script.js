let randomBreedList = "https://dog.ceo/api/breeds/list/all"
let randomDoggo = "https://dog.ceo/api/breeds/image/random/3"

let placeholder = 'https://meredith.nhcrafts.org/wp-content/uploads/dog-placeholder.jpg'

let breedOne = document.getElementById("random1");
let breedTwo = document.getElementById("random2");
let breedThree = document.getElementById("random3");
let adoptionList = document.getElementById("adoptionList");
let firstPic = ''



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
    let breed = Doggo.message[0].split("breeds/")[1].split("/")[0]
    for(let i = 0; i<Doggo.message.length; i++){
        let img = Doggo.message[i]
        if(i == 0){
            breedOne.src= img
            firstPic= breed
        }else if(i == 1){
            breedTwo.src = img
            secondPic=Doggo.message[1].split("breeds/")[1].split("/")[0]
        }else if(i === 2){
            breedThree.src = img
            thirdPic= Doggo.message[2].split("breeds/")[1].split("/")[0]
        }
    }
    function checkBreed(){
        console.log(firstPic);
        console.log(secondPic);
        console.log(thirdPic);
    }
    checkBreed();
  });

const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1Z3lZcEg5OVVLVFFzS1EyN0N0S1BvcklNVGpXaENXWmYxS3kya2NEQ0hGOU9pSVNtdiIsImp0aSI6IjRmMjVhYjZmNTcxYzUwYWUyOWFiMDQxMjZhZjEyYmVhODY4NjNhZTM0NjIyMGQ4MWM0YjU4YWVmYTA3MTBjZWIwZjhiODk1MzFlNTkyZDYwIiwiaWF0IjoxNjM1MDA0ODY5LCJuYmYiOjE2MzUwMDQ4NjksImV4cCI6MTYzNTAwODQ2OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.GcIHaiw-kj5myXyhw0sMOJEo9VxZG1sHyqSE2M5DCWBJUTuQtg9IOMk-el4ggxka05c9mV5A_CcIqheCkEQNLBj2EWJPju4ejntBb-iAJSukQTwE1BBK7qHYLGwdNJ8XRjSNn0GfgPmYc6_Nd0SwZXvd5GWPkWmbJSrU7oHJK69apNJBhHvC3EHZlRPXIF_cHkpwRuszfbe8dQvyVBcIJXS7SiEyEitFxZi17O3r6BimxS5gd4foj85IxMF-eySZ0OciCwI8Nzs9776LpkQI_GaGMCaXn_2nOkX4r5pCLlHdDmsKsXNOjmofs3SgbbCi9sTbbPMGWojSsoYReAcsXA');

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
        if(data.animals[i].photos[0]){
            picUrl = data.animals[i].photos[0].full
        }
    let li = document.createElement("li")
    let anchor = document.createElement("a")
    let url = Doggo2.animals[i].url
    let pic = document.createElement("img")
    let desc = document.createElement("p")
    desc.innerText = dogDesc;
        if(data.animals[i].photos[0]){
            pic.setAttribute("src", picUrl)
        }else{
            pic.setAttribute("src", placeholder)
        }
    pic.setAttribute("class", 'dogImg')
    anchor.setAttribute("href", url)
    anchor.appendChild(pic)
    anchor.appendChild(desc)
    li.appendChild(anchor)
    adoptionList.appendChild(li)
  }
});

// adoptionList.addEventListener('click', function(e){
//     let link = e.target.parentNode.attributes[0].textContent

// })









