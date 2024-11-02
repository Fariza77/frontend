import React, { useState } from "react";
import Heading from "../common/Heading";
import "./authContent.scss";
import { toast } from "react-toastify";
import {
  
  createNewUser, getUsersFromDB,
} from "../../store/helpers";

export default function Registration(props) {
  const [regState, setRegState] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });
  async function submit(e) {
    e.preventDefault();
    let existingUsers = await getUsersFromDB()
    const existingEmail = existingUsers.map(user => user.email)

    if (
      !regState.username ||
      !regState.email ||
      !regState.password ||
      !regState.re_password
    ) {
      toast.error("Please, fill in all fields", { theme: "dark" });
      return;
    } else if (regState.password !== regState.re_password) {
      toast.error("Passwords do not match", { theme: "dark" });
      return;
    }else if (formErrors.username || formErrors.email || formErrors.password || formErrors.re_password) {
      toast.error("Please fill in all fields correctly" , {theme: "dark"})
    }else if (existingEmail.include(regState.email)) {
      toast.error("Email already exists", {theme: "dark"})
      return
    }
    const newUser = {
      username: regState.username,
      email: regState.email,
      password: regState.password,
    };
    try {
      if (createNewUser(newUser)) {
        toast.success("Account successfully created. Now You can log in!", {
          theme: "dark",
        });
        props.setIsRegistered();
      } else {
        toast.error("User already exists", { theme: "dark" });
      }
    } catch (error) {
      toast.error(error, { theme: "dark" });
    } finally {
      e.target.reset();
    }
  }

  function handleChange(e) {
    validate(e.target);

    const name = e.target.name;
    const value = e.target.value;
    setRegState({ ...regState, [name]: value });
  }

  function validate({ name, value }) {
    const usernamePattern = /^[a-zA-Z0-9_]{1,10}$/;
    const passwordPattern = /^[a-zA-Z0-9_$&]{5,}$/;
    const emailPattern = /^[a-zA-Z0-9-@.]{2,}$/;


    let error_msg = "";
    if (value.length > 0) {
      if (name == "username") {
        if (!usernamePattern.test(value)) {
          error_msg = "Symbols are not allowed. Length 1-10";
        }
      } else if (name == "password") {
        if (value.length >= 5 && !passwordPattern.test(value)) {
          error_msg = "Symbols are not allowed except: ($,&,_).Length 5+";
        }
      } else if (name == "re_password") {
        if (!passwordPattern.test(value)) {
          error_msg = "Password confirmation is invalid";
        }
      } else if (name == "email") {
        if (!emailPattern.test(value)) {
          error_msg = "Invalid email";
        }
      } else {
        throw new Error("Unknown input field");
      }
    }

    setFormErrors({ ...formErrors, [name]: error_msg });
  }
  return (
    <div className="auth-content-wrapper">
      <Heading size={1.2}>Registration</Heading>
      <form onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="name">Username</label>
          <input
            id="name"
            type="text"
            placeholder="name"
            name="username"
            onChange={handleChange}
            className={formErrors.username ? "error" : null}
          />
          {formErrors.username.length > 0 ? (
            <p className="error">{formErrors.username}</p>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
            className={formErrors.email ? "error" : null}
          />
          {formErrors.email.length > 0 ? (
            <p className="error">{formErrors.email}</p>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name='password'
            placeholder="password"
            onChange={handleChange}
            className={formErrors.password ? "error" : null}
          />
          {formErrors.password.length > 0 ? (
            <p className="error">{formErrors.password}</p>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="password-conf">Password confirmation</label>
          <input
            type="password"
            id="password-conf"
            name="re_password"
            placeholder="Password confirmation"
            onChange={handleChange}
            className={formErrors.re_password ? "error" : null}
          />
          {formErrors.re_password.length > 0 ? (
            <p className="error">{formErrors.re_password}</p>
          ) : null}
        </div>
        <div className="form-control">
          <button className="warning-btn">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
