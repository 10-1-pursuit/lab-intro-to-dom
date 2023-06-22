console.log("yip yip");

// const addingFeature = () => {
    const newClass = document.querySelector("section");
    newClass.classList.add('.featured');
  

const myNewArticle =
document.createElement("article");

myNewArticle.innerHTML = `
  <img src="./images/paul-gilmore-unsplash.jpg" alt="Image of a mountain in front of a lake." />
  <h3>Stop Planning</h3>
  <p>
    You -- yes you! You're an over-planner, I can tell. It's time to stop
    planning so much and instead focusing on relaxing. Taking a break at all is
    so stressful these days; why add to the stress by overworking yourself?
  </p>
  <aside>
    <p>
      <strong>Read Time:</strong> 4 Minutes
      <a href="#">Read more...</a>
    </p>
  </aside>
`;


const updatePost = document.querySelector(".posts");
const firstArticle = updatePost.querySelector("article:first-child");
const secondArticle = updatePost.querySelector("article:nth-of-type(2)");


updatePost.insertBefore(firstArticle, secondArticle.nextSibling);

document.querySelectorAll("a")[0].remove();

document.querySelector("span").remove();

document.querySelectorAll("h1", "h2", "h3").remove()
