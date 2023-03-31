ScrollReveal({ reset: false });
ScrollReveal().reveal("#hero, #results, #data, #conclusion", {
  viewFactor: 0.3,
});

/* Typed.js Animations */
document.addEventListener("DOMContentLoaded", function () {
  /* Title Animations */
  var title = new Typed("#title", {
    strings: ["Ethics of Microsoft and ChatGPT"],
    typeSpeed: 40,
  });
  var author = new Typed("#title-author", {
    strings: ["By: Tanner Smiley"],
    typeSpeed: 50,
    showCursor: false,
  });

  /* ChatGPT Box */

  // Set DOM Selectors
  const buttons = document.querySelectorAll("#options .card");
  var text = document.getElementById("responses");
  var options = document.getElementById("options");
  var close = document.getElementById("close");

  //Keeps User from overlaping instances
  var running = false;

  //Close Chat Button
  close.addEventListener("click", function () {
    if (!running) {
      text.classList.add("visually-hidden");
      options.classList.remove("visually-hidden");
    }
  });

  // Add a click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Grab the data-response attribute from event target
      const data = e.currentTarget.getAttribute("data-response");

      //Check if an instance is running
      if (!running) {
        //Erase past Typed.js animation
        document.getElementById("response").innerHTML = "";

        //Update instance variable and UI
        running = true;
        close.classList.add("disabled");
        text.classList.remove("visually-hidden");
        options.classList.add("visually-hidden");

        //start the Typed.js Animation
        var typed = new Typed("#response", {
          stringsElement: data,
          typeSpeed: 5,
          showCursor: false,
          onComplete: function () {
            running = false;
            close.classList.remove("disabled");
          },
        });
      }
    });
  });
});
