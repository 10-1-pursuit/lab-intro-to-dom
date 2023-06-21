document.querySelectorAll("section")[0].setAttribute("class", "featured");

let mountain = document.createElement("img");

mountain.setAttribute("src","./images/paul-gilmore-unsplash.jpg");

mountain.setAttribute("alt", "Image of a mountain in front of a lake");

let heading = document.createElement("h3")

heading.innerText = "Stop Planning";

let p1 = document.createElement("p");

p1.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

let aside = document.createElement("aside");

let p2 = document.createElement("p");

aside.appendChild(p2);

p2.innerHTML = "<span><strong>Read Time:</strong> 4 Minutes</span><a href='#'>Read more...</a>"

document.querySelector(".posts").appendChild(document.createElement("article"));

let newArticle = document.querySelectorAll("article")[3];

newArticle.appendChild(mountain);
newArticle.appendChild(heading);
newArticle.appendChild(p1);
newArticle.appendChild(aside);

document.querySelector(".posts").prepend(document.querySelectorAll("article")[2])

document.querySelectorAll("a")[0].remove();

document.querySelectorAll("span")[0].remove();

newArticle.remove();

let titles = document.querySelectorAll("h3");

for (let title of titles) {

    title.remove();
};