'use strict';

var login = document.querySelector("#login");
var signup = document.querySelector("#signup");
var modal = document.querySelector(".bg-modal");
var login_modal = document.querySelector(".login-modal");
var cancel_login = document.querySelector(".cancel-login");
var user_login = document.querySelector("#user-login");
var signup_modal = document.querySelector(".signup-modal");
var cancel_signup = document.querySelector(".cancel-signup");
var user_signup = document.querySelector("#user-signup");

login.addEventListener("click",loginModal);
cancel_login.addEventListener("click",cancelLogin);
user_login.addEventListener("click",cancelLogin);

signup.addEventListener("click",signupModal);
cancel_signup.addEventListener("click",cancelSignup);
user_signup.addEventListener("click",cancelSignup);

function loginModal() {
  modal.classList.add("active");
  login_modal.classList.add("login-active");
}

function cancelLogin() {
  modal.classList.remove("active");
  login_modal.classList.remove("login-active");
}

function signupModal() {
  modal.classList.add("active");
  signup_modal.classList.add("signup-active");
}

function cancelSignup() {
  modal.classList.remove("active");
  signup_modal.classList.remove("signup-active");
}





















