ScrollReveal({ reset: false });
ScrollReveal().reveal("#hero, #results, #data, #conclusion", {
  viewFactor: 0.3,
});

document.addEventListener("DOMContentLoaded", function () {
  var title = new Typed("#title", {
    strings: ["Ethics of Microsoft and ChatGPT"],
    typeSpeed: 40,
  });
  var author = new Typed("#title-author", {
    strings: ["By: Tanner Smiley"],
    typeSpeed: 50,
    showCursor: false,
  });

  //ChatGPT Box
  var option1 = document.getElementById("option1");
  var option2 = document.getElementById("option2");
  var option3 = document.getElementById("option3");
  var text = document.getElementById("responses");
  var options = document.getElementById("options");
  var close = document.getElementById("close");

  close.addEventListener("click", function () {
    if (!running) {
      text.classList.add("visually-hidden");
      options.classList.remove("visually-hidden");
    }
  });

  var running = false;
  option1.addEventListener("click", function () {
    if (!running) {
      text.classList.remove("visually-hidden");
      options.classList.add("visually-hidden");
      running = true;
      document.getElementById("response").innerHTML = "";
      var typed = new Typed("#response", {
        stringsElement: "#response1",
        typeSpeed: 5,
        showCursor: false,
        onComplete: function () {
          running = false;
        },
      });
    }
  });

  option2.addEventListener("click", function () {
    if (!running) {
      text.classList.remove("visually-hidden");
      options.classList.add("visually-hidden");
      running = true;
      document.getElementById("response").innerHTML = "";
      var typed = new Typed("#response", {
        stringsElement: "#response2",
        typeSpeed: 5,
        showCursor: false,
        onComplete: function () {
          running = false;
        },
      });
    }
  });

  option3.addEventListener("click", function () {
    if (!running) {
      text.classList.remove("visually-hidden");
      options.classList.add("visually-hidden");
      running = true;
      document.getElementById("response").innerHTML = "";
      var typed = new Typed("#response", {
        stringsElement: "#response3",
        typeSpeed: 5,
        showCursor: false,
        onComplete: function () {
          running = false;
        },
      });
    }
  });
});
