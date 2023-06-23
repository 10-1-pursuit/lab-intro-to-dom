console.log('HELLO ')

const feature = document.querySelector("section")
console.log(feature)
feature.classList.add('featured')

const articles = document.createElement("article");
document.querySelector("section.posts").appendChild(articles);

articles.setAttribute(
    'src',
    "./images/paul-gilmore-unsplash.jpg",
)

const head = document.querySelector('a')
head.remove()

const read = document.querySelector('aside')
read.remove()