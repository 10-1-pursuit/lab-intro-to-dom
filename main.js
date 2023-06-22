let firstSection = document.querySelector("section");
firstSection.classList.add("featured");



const newArticle = document.createElement("article");

const image = document.createElement("img");
image.src = "./images/paul-gilmore-unsplash.jpg";
image.alt = "Image of a mountain in front of a lake.";
newArticle.appendChild(image);

const heading = document.createElement("h3");
heading.textContent = "Stop Planning";
newArticle.appendChild(heading);

const paragraph = document.createElement("p");
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
newArticle.appendChild(paragraph);

const aside = document.createElement("aside");
const asideParagraph = document.createElement("p");
const span = document.createElement("span");
span.innerHTML = "<strong>Read Time:</strong> 4 Minutes";
const readMoreLink = document.createElement("a");
readMoreLink.href = "#";
readMoreLink.textContent = "Read more...";
asideParagraph.appendChild(span);
asideParagraph.appendChild(readMoreLink);
aside.appendChild(asideParagraph);
newArticle.appendChild(aside);

const sectionPosts = document.querySelector("section.posts");
sectionPosts.appendChild(newArticle)



const articles = sectionPosts.querySelectorAll("article");
sectionPosts.insertBefore(articles[1], articles[0]);


document.querySelectorAll("header a")[0].remove();


document.querySelectorAll("span")[0].remove();


newArticle.remove();


const posts = document.querySelectorAll("section.posts h3");
posts.forEach(post => post.remove())
