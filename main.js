
//featured class
let specialFeature = document.createElement("featured");
section[0].classList.add(specialFeature)
section[0].appendChild(specialFeature);


//create article after section.posts
let articleMaker = document.createElement("article");
let sectionPost = document.createElement("section");
section[0].classList.add("posts");

for (let section of sections) {
    section.posts.appendChild(articleMaker);
}


// set image attribute and add href 

const imageUploader = document.createElement("img");

imageUploader.setAttribute(
    "src",
    "./images/paul-gilmore-unsplash.jpg",
    alt = "Image of a mountain in front of a lake."
)

document.querySelector("article").appendChild(imageUploader);

//Add text to h3

let headingThree = document.createElement("h3");
document.querySelector("headingThree").appendChild(article);
let text = headingThree.innerText = "Stop Planning";

//adding a p inside h3
const pIsForParagraph = document.createElement("p");
const paraText = document.createTextNode("You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?");
pIsForParagraph.appendChild(paraText);
const element = document.getElementById("h3");
element.appendChild("paragraph");

// add strong inside span
let makeSpan = document.createElement("span");
const makeStrong = document.createElement("Strong");
const spanText = makeSpan.innerText("Read Time:");
makeSpan.appendChild(Strong)
const strongText = makeStrong.innerText("4 minutes");

//add a href 
const anchorAside = document.createElement("aside");
let myNewAnchor = document.createElement("a");
myNewAnchor.innerText = "Read more..."
myNewAnchor.href = "#";
myNewAnchor.setAttribute("href")
document.querySelector("aside").appendChild(myNewAnchor);

//Remove article form sections.post and make 2nd article first
const selectionPost = document.querySelector("section.posts");
const articleOne = selectionPost.querySelector("article:first-child");
const articleTwo = selectionPost.querySelector("article:nth-child(2)");
selectionPost.insertBefore(articleOne, articleTwo.nextSibling);
selectionPost.insertBefore(articleTwo, articleOne);

//Remove "All Posts" from header
document.querySelectorAll("a")[0].remove();

//Remove Span
document.querySelector("span").remove();

//Remove all titles
document.querySelectorAll("h1", "h2", "h3").remove()


