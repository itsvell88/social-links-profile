// Select all buttons with the class 'social-btn'
const buttons = document.querySelectorAll(".social-btn");

/*
  Loop through each button to add a click event listener.
  When a button is clicked, we will get the URL from the `data-link` attribute
  and open the link in a new tab using window.open().
*/
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get the URL from the 'data-link' attribute
    const url = button.getAttribute("data-link");

    //the page will opn in new tab
    window.open(url, "_blank");
  });

  // Optional: Add support for Space key in some browsers
  button.addEventListener("keydown", function (event) {
    if (event.key === " " || event.key === "Spacebar") {
      // Spacebar (for older browsers)
      event.preventDefault(); // prevent page scroll
      button.click(); // trigger click behavior
    }
  });
});
