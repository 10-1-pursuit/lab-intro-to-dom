const firstSection = document.querySelector("section");
const featured = firstSection.classList.add("featured");

const newArticleElement = document.createElement("article")
const newArticleElementWithClass = newArticleElement.classList.add("newarticle")
const newPTagForArticleElementWithClass = document.createElement("p")
newPTagForArticleElementWithClass.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focus on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?"
const hThreeForNewArticleElement = document.createElement("h3")
const hThreeForNewArticleElementWithClass = hThreeForNewArticleElement.classList.add("new-hthree")
// hThreeForNewArticleElementWithClass.innerText = "Stop Planning"

// const sectionPosts = document.querySelector(".posts")
// const articleAddition = sectionPosts.append(hThreeForNewArticleElementWithClass, newPTagForArticleElementWithClass)
// sectionPosts.remove(articleAddition)

const firstArticle = document.querySelector("article")
const articleOne = firstArticle.classList.add("articleone")

const secondArticle = document.querySelector("article")
const articleTwo = secondArticle.classList.add("articletwo")