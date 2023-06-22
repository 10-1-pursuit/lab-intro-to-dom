// Add a class of "featured" to the first `section` element on the page.
const firstSection = document.querySelector("section"); // selects the first <section> element
firstSection.classList.add("featured"); // adds class "featured" to the section.

// Create the following `article` element with JavaScript and add at the end of the `section.posts` element.
const newArticle = document.createElement("article"); // create a new <article> element
// The html content inside ` is assigned to the innerHTML property of the new element thats created.
newArticle.innerHTML = ` 
<img src="./images/paul-gilmore-unsplash.jpg"
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

// Move the first article from inside the `section.posts` element to become the second article and move the second article so that it is the first article.
const sectionPosts = document.querySelector(".posts");
const firstArticle = sectionPosts.querySelector("article:first-child"); // make firstArticle equal the first article in the section.
const secondArticle = sectionPosts.querySelector("article:nth-child(2)"); // then it makes secondArticle equal to the 2nd article in the section.

sectionPosts.insertBefore(secondArticle, firstArticle); // insertBefore() is used in posts sections to swap article positions.

// Remove the "All Posts" link from the header.
const headerNav = document.querySelector("header nav ul"); // go inside nav and get the ul element.
const allPostsLink = headerNav.querySelector("li:first-child"); // it then selects the first <li> element which contains All Posts link
headerNav.removeChild(allPostsLink); // remove allPostsLink element from its parent headerNav

// Remove the `span` element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
const featuredPost = document.querySelector(".featured"); // select the featured class
const featuredSpan = featuredPost.querySelector("span"); // then select the <span> element withiin featured post
featuredSpan.parentNode.removeChild(featuredSpan) // finally it removes featuredSpan element from its parent

// Remove all titles from all non-featured posts.
const nonFeaturedPosts = document.querySelectorAll(".posts article:not(.featured) h3"); // ".posts article:not(.featured) h3" is an argument.
// it selects elements with the class posts then selects the article elements that dont have class the class featured (basically selecting all 
// the article elements within the <section class="posts" element that doesnt have the featured class), and then it selects the <h3> element within the selected article elements
nonFeaturedPosts.forEach(post => {
    post.parentNode.removeChild(post); // use foreach to iterate over selected elements and removes the title element post from its parent post.parentNode using removeChild()
});