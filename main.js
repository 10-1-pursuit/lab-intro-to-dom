//featured

const section = document.querySelector('section');
section.classList.add('featured');

//article

const article = document.createElement('article');
let sectionPosts = document.querySelector('section.posts');
let image = document.createElement('img');
let h3 = document.createElement('h3');
let paragraph = document.createElement('p');

image.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
image.setAttribute('alt', 'Image of a mountain in front of a lake.');
h3.textContent = 'Stop Planning';
paragraph.textContent =
	"You -- yes you! You're an over-planner, I can tell. Its time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
sectionPosts.append(article);
article.append(image);
article.append(h3);
article.append(paragraph);

//aside

const aside = document.createElement('aside');
let asideParagraph = document.createElement('p');
let spanElement = document.createElement('span');
let strong = document.createElement('strong');
let attribute = document.createElement('a');

article.append(aside);
strong.textContent = 'Read Time: ';
spanElement.textContent = ' 4 Minutes';
attribute.textContent = 'Read more...';
attribute.setAttribute('href', '#');
aside.append(asideParagraph);
asideParagraph.append(strong);
asideParagraph.append(spanElement);
asideParagraph.append(attribute);

//swapping articles

const newest = document.querySelectorAll("section.posts article")
newest[0].before(newest[1])

//removing additional items

document.querySelector("a").removeAttribute("href");
document.querySelector("span").remove()
document.querySelectorAll("article")[3].remove()
document.querySelector("h3").remove()
document.querySelector("h3").remove()