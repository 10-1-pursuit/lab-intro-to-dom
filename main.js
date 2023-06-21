const firstSection = document.querySelector('section');
firstSection.classList.add('featured');
// ^ ^ ^ ^ ✨Added class of "featured"  to the 🥇1st section element 

// ⬇️⬇️⬇️ Created a new article element
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

// ⬇️⬇️⬇️ Added the new article to 🔚 end of the setion.posts element
const postsSection = document.querySelector('section.posts');
postsSection.appendChild(newArticle);

// // Move 🔀 the 🥇1st article to the come the 🥈2nd article and vice versa 😵
const firstArticle = postsSection.querySelector('article');
const secondArticle = postsSection.querySelector('article:nth-of-type(2)');
postsSection.insertBefore(firstArticle, secondArticle.nextSibling);

// Remove ✂ the "All Posts" link form the header
const headerLink = document.querySelector('header nav a');
headerLink.remove();

// Removed the span element containing the "Read Time" in the featured post
const featuredPost = document.querySelector('.featured');
const readTimeSpan = featuredPost.querySelector('span');
readTimeSpan.parentElement.removeChild(readTimeSpan);

// Removed the LAST post from the page, titled "Stopped Planning"
const lastPost = document.querySelector('section.posts article:last-of-type');
lastPost.remove();

// Remove all the titles from the all non-featured posts
const nonFeaturedPosts = document.querySelectorAll('section.posts article:not(featured) h3 ');
nonFeaturedPosts.forEach(post => post.remove());