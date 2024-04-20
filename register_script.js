const register_complete = document.querySelector(".btn2--save");
const register_incomplete = document.querySelector(".btn2--cancle");

const name_input = document.querySelector(".name");
const roll_no_input = document.querySelector(".roll_no");
const department_input = document.querySelector("#department");
const password_input = document.querySelector(".password");

register_complete.addEventListener("click", function (e) {
  if (
    name_input.value === "" ||
    roll_no_input.value === "" ||
    department_input.value === "" ||
    password_input.value === ""
  )
    alert("all fields are required !");
  else window.location.href = "catalogue.html";
});

register_incomplete.addEventListener("click", function (e) {
  window.history.back();
});
