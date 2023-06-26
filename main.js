
// - [✓] Add a class of "featured" to the first `section` element on the page.
const featuredSection = document.querySelector("section");
featuredSection.classList.add("featured");

// - [✓] Create the following `article` element with JavaScript and add at the end of the `section.posts` element.
const newArticle = document.createElement("article");
newArticle.innerHTML = `
  <img
    src="./images/paul-gilmore-unsplash.jpg"
    alt="Image of a mountain in front of a lake."
  />
  <h3>Stop Planning</h3>
  <p>
    You -- yes you! You're an over-planner, I can tell. It's time to stop
    planning so much and instead focusing on relaxing. Taking a break at all is
    so stressful these days; why add to the stress by overworking yourself?
  </p>
  <aside>
    <p>
      <span><strong>Read Time:</strong> 4 Minutes</span
      ><a href="#">Read more...</a>
    </p>
  </aside>
`;

const postsSection = document.querySelector("section.posts");
postsSection.appendChild(newArticle);

// - [✓] Move the first article from inside the `section.posts` element to become the second article and move the second article so that it is the first article.
const articles = document.getElementsByTagName("article")
articles[2].parentNode.insertBefore(articles[1],articles[3])