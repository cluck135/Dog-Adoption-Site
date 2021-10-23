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
myHeaders.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1Z3lZcEg5OVVLVFFzS1EyN0N0S1BvcklNVGpXaENXWmYxS3kya2NEQ0hGOU9pSVNtdiIsImp0aSI6IjY1NjQ3YzU2Njk3MjEzNjU3MWZiOWMxMDQzYjljYjgxYWE0NDQ1ZjgyY2MxMGE5MTNlMzRkY2MwOTE2ZmFlNGQ0MGIzNjJiYWNlZDFmYmRhIiwiaWF0IjoxNjM1MDA4NTg1LCJuYmYiOjE2MzUwMDg1ODUsImV4cCI6MTYzNTAxMjE4NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.KDHKaM-_ZLpdee05r6E1S7XJ-XW2vn8wOkRo1Rs5TjoTGW9k1AeFCSIBGjfsJllUyhJzKyQ9BNKfN-kZQlhReuoLKTE-XkJ_oETxrN0xzUHAz0SbeKFN9vsdpFfp66_NmxCE1HB4xcEgkUYy64ECY3R7Wsd9vog2zDw0aw5HShuQQdTRgRqRL4_VvNcHQk_EykBoTbvZw9DXpiNk7cqwfTWmROHCXTRy5rUxhXOV7v961obxB4b57LU7kAOrL5JuezIVDD_cKO8BZWOgZVaoztGv1-Q15aJ5JLv3IfGpWCulJJvV5W7eHMPkYQUeohegE8EMdNAEpmacqMarRZFAcw');

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
    anchor.style.textDecoration = 'none';
    let url = Doggo2.animals[i].url
    let pic = document.createElement("img")

    let desc = document.createElement("p")
    desc.style.display.inline
    desc.innerText = dogDesc;
        if(data.animals[i].photos[0]){
            pic.setAttribute("src", picUrl)
        }else{
            pic.setAttribute("src", placeholder)
        }
    pic.setAttribute("class", 'dogImg')
    anchor.setAttribute("href", url)
    anchor.appendChild(pic)
    li.appendChild(anchor)
    li.appendChild(desc)
    adoptionList.appendChild(li)
  }
});










