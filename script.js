const about_nav = document.querySelector(".nav__about");
const feedback_nav = document.querySelector(".nav__feedback");
const section_about = document.querySelector("#About");
const login_btn = document.querySelector(".btn--login");
const register_btn = document.querySelector(".btn--register");

// about_nav.addEventListener("click", function () {
//   section_about.scrollIntoView({ behavior: "smooth" });
// });

login_btn.addEventListener("click", function () {
  window.location.href = "login.html";
});

register_btn.addEventListener("click", function () {
  window.location.href = "register.html";
});

document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });

function addFeedback() {
  let feedback = document.getElementById("new_feedback");
  if (feedback.value != null && feedback.value.trim() != "") {
    var element = document.createElement("div");
    element.setAttribute("class", "feedback");
    element.innerHTML = feedback.value;
    document.getElementById("all-feedback").append(element);
    const hr = document.createElement("hr");
    document.getElementById("all-feedback").append(hr);
    // Reset the value of the textarea
    feedback.value = "";
  }
}

//login script
