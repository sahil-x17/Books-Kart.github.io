const login_complete = document.querySelector(".btn1--login");
const login_cancle = document.querySelector(".btn1--cancle");

const input_roll_no = document.getElementById("roll_no");
const input_password = document.getElementById("password");

login_complete.addEventListener("click", function (e) {
  console.log(input_roll_no.value, input_roll_no.value);
  if (input_roll_no.value === "" || input_roll_no.value === "")
    alert("all fields are required !");
  else window.location.href = "catalogue.html";
});

login_cancle.addEventListener("click", function (e) {
  window.history.back();
});
