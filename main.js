// Add a class of "featured" to the first section element
const firstSection = document.querySelector('section');
firstSection.classList.add('featured');

// Create the new article element
const newArticle = document.createElement('article');
newArticle.innerHTML = `
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

// Add the new article to the end of the section.posts element
const sectionPosts = document.querySelector('section.posts');
sectionPosts.appendChild(newArticle);

// Move the first article to become the second article
const firstArticle = sectionPosts.querySelector('article');
const secondArticle = sectionPosts.querySelector('article:nth-child(2)');
sectionPosts.insertBefore(firstArticle, secondArticle);

// Remove the "All Posts" link from the header
const headerLink = document.querySelector('header nav ul li:first-child');
headerLink.remove();

// Remove the span element that contains the "Read Time" in the featured post
const featuredPost = document.querySelector('.featured');
const readTimeSpan = featuredPost.querySelector('span');
readTimeSpan.remove();

// Remove the last post from the page, titled "Stop Planning"
const lastPost = document.querySelector('section.posts article:last-child');
lastPost.remove();

// Remove all titles from all non-featured posts
const nonFeaturedPosts = document.querySelectorAll('section.posts article:not(.featured) h3');
nonFeaturedPosts.forEach((post) => post.remove());
