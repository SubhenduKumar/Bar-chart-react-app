import React, { useEffect, useState } from "react";
import bg from "./assets/bg.png";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [check, setCheck] = useState({
    em: false,
    ps: false,
    cp: false,
    // na:false,
    num: false,
  });
  const [hit, setHit] = useState(false);
  const Validate = () => {
    const name = document.getElementById("nameText");
    const checkBox = document.querySelector("#checkBox");
    if (name.value.length < 1) {
      console.log("in");
      alert("Fill necessary datas");
    }
    if (check.em && check.ps && check.cp && check.num) {
      setHit(true);
    } else {
      checkBox.checked = false;
      setHit(false);
    }

    if (checkBox.checked == true) setHit(true);
    if (checkBox.checked == false) setHit(false);
    console.log(hit);
  };
  function checkMail() {
    const email = document.getElementById("email");
    const errorMail = document.getElementById("errormail");
    errorMail.innerText = "";
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validRegex)) {
      setCheck({
        ...check,
        em: true,
      });
    } else {
      errorMail.innerText = "Invalide Mail";
      errorMail.style.color = "red";
      setCheck({
        ...check,
        em: false,
      });
    }
  }

  function checkNumber() {
    const number = document.getElementById("number");
    const errorNumber = document.getElementById("errorNumber");
    if (number.value.length < 10) {
      errorNumber.innerText = "Invalid Number";
      errorNumber.style.color = "red";
      setCheck({
        ...check,
        num: false,
      });
    } else {
      errorNumber.innerText = "";
      setCheck({
        ...check,
        num: true,
      });
    }
  }

  const strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );
  const mediumPassword = new RegExp(
    "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
  );
  function checkPassword() {
    const password = document.getElementById("password");
    const errorPassword = document.getElementById("errorPassword");
    // console.log(password.value);
    if (strongPassword.test(password.value)) {
      errorPassword.style.color = "green";
      errorPassword.innerText = "Strong";
      setCheck({
        ...check,
        ps: true,
      });
    } else if (mediumPassword.test(password.value)) {
      errorPassword.style.color = "blue";
      errorPassword.innerText = "Medium";
      setCheck({
        ...check,
        ps: false,
      });
    } else {
      errorPassword.style.color = "red";
      errorPassword.innerText = "Use One Upper letter,Special Charecter, number & Password Should be more than 7 digit";
      setCheck({
        ...check,
        ps: false,
      });
    }
  }
  function checkConfirmPassword() {
    const confirmPassword = document.getElementById("confirmPassword");
    const errorconfirmPassword = document.getElementById(
      "errorconfirmPassword"
    );
    const password = document.getElementById("password");
    if (password.value !== confirmPassword.value) {
      errorconfirmPassword.innerText = "Password not matching";
      errorconfirmPassword.style.color = "red";
      setCheck({
        ...check,
        cp: false,
      });
    } else {
      errorconfirmPassword.innerText = "Password matched";
      errorconfirmPassword.style.color = "green";
      setCheck({
        ...check,
        cp: true,
      });
    }
  }

  return (
    <div className="menu">
      <div className="menu__image">
        <img src={bg} alt="" />
        <div className="menu__image__header">
          <h3>Choose a date range</h3>
          <span className="menu__image__header__span">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
            alias? Lorem
          </span>
        </div>
      </div>
      <div className="menu__item">
        <div className="menu__item__items">
          <h2>Create an account</h2>
          <form action="submit" autoComplete="off">
            <label htmlFor="">Your email adress</label>
            <input id="email" onChange={checkMail} type="text" />
            <label id="errormail" htmlFor=""></label>
            <label htmlFor="">Your password</label>
            <input id="password" onChange={checkPassword} type="password" />
            <label id="errorPassword" htmlFor=""></label>
            <label htmlFor="">Confirm your password</label>
            <input
              id="confirmPassword"
              onChange={checkConfirmPassword}
              type="password"
            />
            <label id="errorconfirmPassword" htmlFor=""></label>
            <label htmlFor="">Your full name</label>
            <input id="nameText" type="text" />
            <label htmlFor="">Your phone number</label>
            <input
              id="number"
              autoComplete="off"
              onChange={checkNumber}
              type="number"
            />
            <label id="errorNumber" htmlFor=""></label>
            <span>
              <input id="checkBox" onClick={Validate} type="checkbox" />
              &nbsp;I read agree Terms and Conditions
            </span>
            <br />
            <NavLink to={hit ? "/chart" : ""} className="menu__button">
              Create account
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
