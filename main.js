let sections = document.querySelectorAll("section")  //using the query to gather them all cuz i know we'll need it later
sections[0].classList.add("featured") //adding a class="featured" to the first section

let newElement = document.createElement("article") //making a new DOM object <article> tag

let image = document.createElement("img") //making a new DOM object <image> tag
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg") // updating it's attributes
image.setAttribute("alt", "Image of a mountain in front of a lake.")

let newH3 = document.createElement("h3")                        //Making a new DOM object <h3></h3> tag
let h3Text = document.createTextNode("Stop Planning")           //Making a text node
let h3 = newH3.appendChild(h3Text)                              // adding the text to the h3 tag


let newP1 = document.createElement("p")                         
let newP1Text = document.createTextNode("You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all isso stressful these days; why add to the stress by overworking yourself?")
let p1 = newP1.appendChild(newP1Text)


let newP2 = document.createElement("p")
newP2.innerHTML = "<span><strong>Read Time:</strong> 4 Minutes</span>"    // using innerHTML which gets or sets the HTML or XML markup contained within the element. An alternative way to add html elements
let p2 = newP2    // setting as a variable just to keep my presentation clean.

let newA = document.createElement("a")
newA.setAttribute("href", "#")
let newAText = document.createTextNode("Read more...")
newA.appendChild(newAText)
let a = newA

sections[1].after(image, h3, p1, p2, a)   //calling after on my sections that i knew i need earlier!


//- [x] Move the first article from inside the `section.posts` element to become the second article and move the second article so that it is the first article.

const postSection = document.querySelector(".posts")
const article1 = postSection.querySelector("article:first-child")
const article2 = postSection.querySelector("article:nth-child(2") // jessie showed me this neat thing. the :nth-child() which takes a single argument that describes a pattern for a matching element in a list of siblings. Probably great for lists! 

postSection.insertBefore(article2, article1);  //insertBefore() method of the Node interface inserts a node before a reference node as a child of a specified parent node. If the given node already exists in the document,it will automatically be removed from its existing parent before appending it to the specified new parent.)


const headerEdit = document.querySelector("header nav ul")
const AllPost = document.querySelector("header nav li")

headerEdit.removeChild(AllPost)


const featuredSection = document.querySelector(".featured aside p")
const spanElement = document.querySelector("span")

featuredSection.removeChild(spanElement)


const unfeaturedPosts = document.querySelectorAll(".posts article:not(.featured) h3") //Also this beauty :not(1 argument selector selects all elements except the specified element.)
// creating an array of h3 elements and their accompanying text nodes.
console.log(unfeaturedPosts)

unfeaturedPosts.forEach( posts => {posts.parentNode.removeChild(posts)})
//since it's an array we can use some methods on it. For each element, it will remove it's "text Node" calling both the element and it's tag