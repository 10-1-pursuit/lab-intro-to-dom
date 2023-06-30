const featuredElement = document.querySelector("section")
featuredElement.className = "featured"

const articleTag = document.createElement("article")
articleTag.innerHTML = `
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
  `
const sectionPosts = document.querySelector(".posts")
sectionPosts.append(articleTag)

const articles = sectionPosts.getElementsByTagName('article');

function swapArticles() {
    const article1 = articles[0];
    const article2 = articles[1];

    article2.after(article1);
};

swapArticles();

function removeHeaderLink() {
    const header = document.querySelector("header");
    const headerLink = header.querySelector("a");
    header.remove(headerLink);
}

removeHeaderLink();

function removeSpanElement() {
    const readTime = featuredElement.querySelector("span");
    readTime.remove();
}

removeSpanElement();

function removeLastArticle() {
    const lastArticle = articles[2];
    lastArticle.remove();
}
removeLastArticle();

function removeTitlesFromArticles() {
    const titles = sectionPosts.querySelectorAll("h3");
    for (let title of titles) {
        title.remove();
    }
}
removeTitlesFromArticles();