// JavaScript to show/hide the Related Articles Pop-up
document.addEventListener("DOMContentLoaded", function () {
  const relatedArticlesPopUp = document.querySelector(".related-articles-popup");

  // Show the pop-up when the main content is clicked
  document.querySelector("main").addEventListener("click", function () {
    relatedArticlesPopUp.style.display = "block";
  });

  // Hide the pop-up when the user clicks outside of it
  document.addEventListener("click", function (event) {
    if (!relatedArticlesPopUp.contains(event.target)) {
      relatedArticlesPopUp.style.display = "none";
    }
  });
});
