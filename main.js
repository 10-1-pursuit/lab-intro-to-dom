document.querySelector("section").className = "featured";


const article = document.createElement("article");
const img = document.createElement("img");
const h3 = document.createElement("h3");
const p = document.createElement("p");
const aside = document.createElement("aside");
const p2 = document.createElement("p");


img.setAttribute ("src", "./images/paul-gilmore-unsplash.jpg");
img.setAttribute ("alt", "Image of a mountain in front of a lake.");

h3.textContent = "Stop Planning";


p.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
console.log(p)


const span = document.createElement("span");
span.innerHTML = "<span><strong>Read Time:</strong> 4 Minutes</span>";

const a = document.createElement("a")
a.setAttribute("href","#")
a.innerHTML ="Read more..."

aside.append(p2);
p2.append(span)
span.append(a)

article.append(img,h3,p,aside)

let post = document.querySelector(".posts")

let firstArticle = post.querySelectorAll("article")[0]
let secondArticle = post.querySelectorAll("article")[1]

document.querySelector(".posts").append(firstArticle)
document.querySelector(".posts").append(article)


console.log(document.querySelectorAll(".posts"))

document.querySelector("a").removeAttribute("href");
document.querySelector("span").remove()
document.querySelectorAll("article")[3].remove()
document.querySelector("h3").remove()
document.querySelector("h3").remove()