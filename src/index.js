console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(imgUrl)
.then((response) => response.json())
.then((json) => {
  let data = json.message;
  data.forEach(element => {
    const imgLocation = document.createElement("img");
    imgLocation.src = element;
    document.getElementById("dog-image-container").appendChild(imgLocation);
  });
})

fetch(breedUrl)
.then((response) => response.json())
.then((json) => {
  let data = json.message;
  for(const breed in data) {
    const listItem = document.createElement("li");
    listItem.innerText = breed;
    document.getElementById("dog-breeds").appendChild(listItem);
    listItem.addEventListener("click", changeColor);
  }
})

function filterBreeds(letter) {
  const breedList = document.getElementById("dog-breeds").children;
  for (let index = 0; index < breedList.length; index++) {
    breedList[index].classList.add("notSelected");
    breed = breedList[index].innerText;
    breedFirstLetter = String(breed).charAt(0);
    if (breedFirstLetter === letter) {
      breedList[index].classList.remove("notSelected");
    }
  }
}

function changeColor(event) {
  event.target.classList.add("clicked");
}