const adder=document.querySelector("section.posts")
const sectionAdd= document.createElement("img")


sectionAdd.src="./images/paul-gilmore-unsplash.jpg"
sectionAdd.alt="Image of a mountain in front of a lake."

console.log(sectionAdd)

sectionAdd.addEventListener("mouseover",(event)=>{
    console.log(event.target.src,event.target.alt)
   

})
adder.append(sectionAdd)

const headingAdd=document.createElement("h3")

headingAdd.innerText= "Stop Planning"

console.log(headingAdd)



headingAdd.addEventListener("mouseover",(event)=>{
    console.log(event.target.innerText)
})

adder.appendChild(headingAdd)


const pAdd=document.createElement("p")

pAdd.innerText="You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and insted focusing on relaxing.Taking a break at all is so stressful these days; why add to the stress by overoworking yourself? "


console.log(pAdd)

pAdd.addEventListener("mouseover",(event)=>{
    console.log(event.target.innerText)
})
adder.appendChild(pAdd)

const asideAdd=document.createElement("p.")

asideAdd.innerText="Read Time"

asideAdd.outerText="4 Minutes"

console.log(asideAdd)

asideAdd.addEventListener("mouseover",(event)=>{

    console.log(event.target.innerText,event.target.outerText)
})
adder.append(asideAdd)

const aAdder= document.createElement("a.")

aAdder.innerText='href ="#"'
aAdder.outerText="Read more..."

console.log(aAdder)
aAdder.addEventListener("mouseover",(event)=>{
    console.log(event.target.innerText,event.target.outerText)
})
adder.append(aAdder)


