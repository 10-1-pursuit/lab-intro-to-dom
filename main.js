document.querySelector("section").classList.add("featured");

let newElement = document.createElement("article");

document.querySelector(".posts").appendChild(newElement);

document.querySelectorAll("article")[3].setAttribute("class","thirdArticle");
//created class attribute to access element 

let image = document.createElement("img");

image.setAttribute("src","./images/paul-gilmore-unsplash.jpg");

document.querySelector(".thirdArticle").appendChild(image)

let headerThree = document.createElement("h3");

headerThree.innerText = "Stop Planning";

document.querySelector(".thirdArticle").appendChild(headerThree)

let paragraph = document.createElement("p")

paragraph.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"

document.querySelector(".thirdArticle").append(paragraph);

let aside = document.createElement("aside")

aside.innerHTML = "<p> <span><strong>Read Time:</strong> 4 Minutes </span><a href='#'>Read more...</a>"

document.querySelector(".thirdArticle").append(aside);

const secs = document.querySelectorAll("section")[1].querySelectorAll("article")

let firstArticle = secs[0].setAttribute("class","firstArticle")

let secondArticle = secs[1].setAttribute("class", "secondArticle")

// let posts = document.getElementsByClassName("posts")

document.querySelector("a").remove();

document.querySelector("span").remove();







