let randomBreedList = "https://dog.ceo/api/breeds/list/all"
let randomDoggo = "https://dog.ceo/api/breeds/image/random/3"

let breedOne = document.getElementById("random1");
let breedTwo = document.getElementById("random2");
let breedThree = document.getElementById("random3");

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
        }else if(i == 1){
            breedTwo.src = img
        }else{
            breedThree.src = img
        }
    }
  });

const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1Z3lZcEg5OVVLVFFzS1EyN0N0S1BvcklNVGpXaENXWmYxS3kya2NEQ0hGOU9pSVNtdiIsImp0aSI6ImMyZjUxNDE1YzBlOWU2ZGUwMTMxNmIzNTBhMjlmNzI3YTI5NGVhMTMzNDRkODM3YzQxYWRmZjcxZmYxODIyYzc1ZWI3Mzg0OWQzMGUzZmIyIiwiaWF0IjoxNjM0ODYyOTA3LCJuYmYiOjE2MzQ4NjI5MDcsImV4cCI6MTYzNDg2NjUwNywic3ViIjoiIiwic2NvcGVzIjpbXX0.wEaTfRXaGU8jf8D52doNf_kG6pXYMRJa6-TcVSXg2I4cufPoSj7_qG4FHy95KZspNpuhdbG-e2aALqnQePumjgDudyNQdddr3L9iB-M5_GYupFHn7ukfeqqU5reO9irIPQul61bx9JjWX9EQv5AhUkrARKl9kIjUnSfVUWEyCTsVsV50_FtgbOQYkGuZi1qot1VUMUq8PU4V713cXtdvZKox_LHga9I76g-Nb2pkx5ZUJmbrmx0XwbxUPmlPXXzQVy26ImhsSy42FUoel8BBwp666S1i407qYRcshuFqdt6ZR6d0oq3CYJFOfZVWBEScBCMZjLbdAInKGRRS6p1A-g');

fetch('https://api.petfinder.com/v2/animals?type=dog&page=2', {
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
});









