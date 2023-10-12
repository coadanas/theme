function names() {
  let name = document.getElementById("name")
  let value = name.value;
  let res = document.getElementById("res-name")
  let boxes = document.getElementById("name-box")

  if (value == "") {
    res.innerText = "enter your name";
    res.setAttribute("class", "res");
    boxes.setAttribute("class", "wrong-res")
  } else {
    res.innerText = ""
    boxes.setAttribute("class", "right-res")
  }
}

function emails() {
  let email = document.getElementById("email")
  let value = email.value;
  let res = document.getElementById("res-email")
  let boxes = document.getElementById("email-box")

  if (value == "") {
    res.innerText = "enter your email";
    res.setAttribute("class", "res");
    boxes.setAttribute("class", "wrong-res")
  } else {
    res.innerText = ""
    boxes.setAttribute("class", "right-res")
  }
}

function passwords() {
  let password = document.getElementById("password")
  let value = password.value;
  let res = document.getElementById("res-pass")
  let boxes = document.getElementById("pass-box")

  if (value == "") {
    res.innerText = "enter your password";
    res.setAttribute("class", "res");
    boxes.setAttribute("class", "wrong-res")
  } else {
    res.innerText = ""
    boxes.setAttribute("class", "right-res")
  }
}

function confirmPassword() {
  let conPass = document.getElementById("conPass")
  let value = conPass.value;
  let res = document.getElementById("res-conPass")
  let boxes = document.getElementById("conPass-box")

  if (value == "") {
    res.innerText = "enter your confirm password";
    res.setAttribute("class", "res");
    boxes.setAttribute("class", "wrong-res")
  } else {
    res.innerText = ""
    boxes.setAttribute("class", "right-res")
  }
}
// SHOW / HIDE PASSSWORS
function show() {
  let password = document.getElementById("password");
  let conPass = document.getElementById("conPass");
  let value1 = password.getAttribute("type");
  let value2 = conPass.getAttribute("type");

  if (value1 === "password" && value2 === "password") {
    password.setAttribute("type", "text")
    conPass.setAttribute("type", "text")
  } else {
    password.setAttribute("type", "password")
    conPass.setAttribute("type", "password")
  }
};