
//featured class
let specialFeature = document.createElement("featured");

section[0].appendChild(specialFeature);

For(let item of myList) {

    myList.classList.add(“mySpecialList”)

}

//create article after section.posts
let articleMaker = document.createElement("article");

for (section of sections) {
    section.posts.appendChild(articleMaker);
}


// set image attribute and add href 

const imageUploader = document.createElement("img");

imageUploader.setAttribute(
    "src",
    "./images/paul-gilmore-unsplash.jpg"




)






