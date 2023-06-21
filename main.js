let sections = document.querySelectorAll("section")

sections[0].classList.add("featured")

let newElement = document.createElement("article")

let image = document.createElement("img")

image.setAttribute("src","./images/paul-gilmore-unsplash.jpg" )

image.setAttribute("alt", "Image of a mountain in front of a lake.")

let newH3 = document.createElement("h3")

let newP1 = document.createElement("p")

let newP2 = document.createElement("p")

let newA = document.createElement("a")

newA.innerText("Read more...")

newA.setAttribute("href", "#")

newP1.innerText("You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all isso stressful these days; why add to the stress by overworking yourself?")

newH3.innerText("Stop Planning")

let newP2a = newP2.innerText("Read Time:")

newP2.innerText("4 minutes")

sections[1].after(newElement)

