const adder=document.querySelector("section.posts")
const articleAdd= document.createElement("article")



articleAdd.addEventListener("mouseover",(event)=>{

})

 adder.append(articleAdd)
const sectionAdd= document.createElement("img")
const addPic=document.querySelectorAll("article")[3]


sectionAdd.src="./images/paul-gilmore-unsplash.jpg"
sectionAdd.alt="Image of a mountain in front of a lake."

console.log(sectionAdd)

sectionAdd.addEventListener("mouseover",(event)=>{
    console.log(event.target.src,event.target.alt)
   

})
addPic.append(sectionAdd)

const headingAdd=document.createElement("h3")
// const addTag=document.querySelector("")

headingAdd.innerText= "Stop Planning"

console.log(headingAdd)



headingAdd.addEventListener("mouseover",(event)=>{
    console.log(event.target.innerText)
})
addPic.append(headingAdd)




const pAdd=document.createElement("p")

pAdd.innerText="You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and insted focusing on relaxing.Taking a break at all is so stressful these days; why add to the stress by overoworking yourself? "


console.log(pAdd)

pAdd.addEventListener("mouseover",(event)=>{
    console.log(event.target.innerText)
})
addPic.appendChild(pAdd)

 const asideAdd=document.createElement("aside")

 asideAdd.addEventListener("mouseover",(event)=>{
    asideAdd.class= "pEl"

    console.log(event.target)
 })

 addPic.append(asideAdd)

//  const asideAdder=document.querySelectorAll("article")[3]("aside")[3]

 const nestedP= document.createElement("p")

 nestedP.addEventListener("mouseover",(event)=>{

    console.log(event.target)
 })
addPic.append(nestedP)

const createSpan= document.createElement('span')

createSpan.addEventListener("mouseover",(event)=>{
    console.log(event.target)
})

addPic.appendChild(createSpan)
const createStrong= document.createElement('strong')
createStrong.innerText="Read Time:"
// createStrong.outerText="4 Minutes"

createStrong.addEventListener("mouseover",(event)=>{
    console.log(event.target)
})

addPic.append(createStrong)


const createAEl= document.createElement('a')
createAEl.innerText='4 minutes'
// createAEl.outerText="Read more..."

createAEl.addEventListener("mouseover",(event)=>{
    console.log(event.target)
})

addPic.append(createAEl)

// let order = document.querySelector
const remover= document.querySelector("header li")[1]

document.body.children[0].children[1].children[0].children[0].remove()


document.body.children[1].children[0].children[1].children[2].children[0].remove()

document.body.children[1].children[1].children[0].children[1].remove()
document.body.children[1].children[1].children[1].children[1].remove()
document.body.children[1].children[1].children[2].children[1].remove()

document.body.children[1].children[1].children[2].remove()

document.body.children[1].children[1].children[1].parentNode.insertBefore(document.body.children[1].children[1].children[1],document.body.children[1].children[1].children[0])





