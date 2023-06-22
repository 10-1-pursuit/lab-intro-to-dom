document.addEventListener('DOMContentLoaded', function() {
    const firstSection = document.querySelector('section');
    firstSection.classList.add('featured');
  
    const newArticle = document.createElement('article');
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

    const sectionPosts = document.querySelector('.posts');
    const firstArticle = sectionPosts.querySelector('article');
  const secondArticle = sectionPosts.querySelector('article:nth-child(2)');
  sectionPosts.insertBefore(firstArticle, secondArticle);
  sectionPosts.insertBefore(secondArticle, sectionPosts.firstChild);
  sectionPosts.appendChild(newArticle);
  const allPostsLink = document.querySelector('header nav ul li:first-child');
  allPostsLink.remove();
  const featuredPost = document.querySelector('.featured');
  const readTimeSpan = featuredPost.querySelector('span');
  readTimeSpan.remove();
  const lastPost = document.querySelector('section.posts article:last-child');
  lastPost.remove();
  const nonFeaturedPosts = document.querySelectorAll('section.posts article:not(.featured)');
  nonFeaturedPosts.forEach(function(post) {
    const title = post.querySelector('h3');
    title.remove();
  });
  });
  