const section = document.querySelector('main').firstElementChild;

const posts = document.querySelector('.posts');

const stopPlanning = document.createElement('article');
const img = document.createElement('img');
const h3 = document.createElement('h3');
const aside = document.createElement('aside');
const a = document.createElement('a');
const span = document.createElement('span');
const strong = document.createElement('strong');

img.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
img.setAttribute('alt', 'Image of a mountain in front of a lake.');

h3.innerText = 'Stop Planning!';

const firstPara = document.createElement('p');
const secondPara = document.createElement('p');

a.setAttribute('href', '#');
a.innerText = 'Read more...';

firstPara.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?`;

stopPlanning.append(img);
stopPlanning.append(h3);
stopPlanning.append(firstPara);
stopPlanning.append(aside);

span.innerHTML = `<strong>Read Time:</strong> 4 Minutes`;
secondPara.append(span);
secondPara.append(a);
aside.append(secondPara);

posts.append(stopPlanning);

section.classList.add('featured');

const firstArticle = posts.children[0];

const secondArticle = posts.children[1];

posts.replaceChildren(secondArticle, firstArticle, stopPlanning);

console.log(posts);
