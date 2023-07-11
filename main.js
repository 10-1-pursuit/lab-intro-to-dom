console.log("This script had been loaded!");

// Add a class of "featured" to the first section element on the page:

// Capture the section element and store it in an element with a given name:
const fSection = document.querySelectorAll("section")[0];

// Create a class called "featured" for the section element:
fSection.classList.add("featured");

//Create the following "article" element with JavaScript and add at the end of the section.posts element:

const articles = document.createElement("article");

// Capture the section.posts element within any given variable name:
const sectionPosts = document.querySelector("section.posts");

// using the after() method add the article element to the end of the sections posts element:
sectionPosts.after(articles);

// Remove the first article fro inside the section.posts element to become the second article and move the second article
// to become the first:

const articleOne = document.querySelector("section.posts").children[0];
const articleTwo = document.querySelector("section.posts").children[1];

// swap the article element positions using the before() method.

articleOne.before(articleTwo);

// Remove "All Posts" link from the header.
document.querySelector("li").remove();

// Remove the span element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
document.querySelector("span").remove();

// Remove the last post from the page, titled "Stop Planning".

// Remove all titles from all non- featured posts:

document.querySelectorAll("h3")[0].remove();

document.querySelector("h3").remove();
