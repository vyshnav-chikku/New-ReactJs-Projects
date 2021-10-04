import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Navbarmobile from "../components/Navbarmobile";

const Container = styled.div`
  /* .navbarmobile {
    position: sticky;
    top: 100px;
  } */
  font-family: "Lora", serif;
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)),
    url("https://i.pinimg.com/originals/0b/40/74/0b40747952803d7bf3579baa988b9edc.png");
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  position: fixed;
  bottom: 0;
  z-index: -1;

  .registerbutton {
    position: sticky;
    top: 70px;
    padding: 10px;
    text-align: right;
    margin-right: 10px;
    z-index: 100;
  }
  .regbutton {
    padding: 10px;
    font-size: 1.1rem;
    border-radius: 10px;
    outline: none;
    border: none;
    background: #f67280;
    color: white;
    cursor: pointer;
  }
  .logincontainersingle {
    height: 93vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .login {
    margin: auto;
    position: absolute;
    height: min(28rem, 90%);
    width: min(19rem, 90%);
    padding: 10px;
  }
  @media screen and (max-width: 920px) {
    .registerbutton {
      top: 100px;
    }
    .logincontainersingle {
      height: 90vh;
    }
    .login {
      transform: scale(0.8);
    }
  }
  .title {
    font-size: 4rem;
    margin-bottom: 30px;
    text-align: center;
  }
  .email {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
  .inputcontainer {
    margin-bottom: 8px;
    width: 100%;
  }
  .inputcontainer input {
    font-size: 1.1rem;
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    border: none;
    outline: none;
  }
  .password {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
  .loginbtn {
    padding: 10px;
    font-size: 1.1rem;
    border-radius: 10px;
    margin: 20px 0;
    width: 100%;
    outline: none;
    border: none;
    background: #045f5f;
    color: white;
    cursor: pointer;
  }
`;

const Register = () => {
  const [state, setstate] = useState(false);
  return (
    <Container>
      {/* <Navbar changestate={(ham) => setstate(ham)} />
      <div className="navbarmobile">
        <Navbarmobile sta={state} />
      </div> */}
      <div className="logincontainer">
        <div className="registerbutton">
          <a href="/login">
            <button className="regbutton">Login</button>
          </a>
        </div>
        <div className="logincontainersingle">
          <div className="login">
            <div className="title">Register</div>
            <div className="email">Username</div>
            <div className="inputcontainer">
              <input type="text" placeholder="Enter your name..." />
            </div>
            <div className="email">Email</div>
            <div className="inputcontainer">
              <input type="text" placeholder="Enter your email..." />
            </div>
            <div className="password">Password</div>
            <div className="inputcontainer">
              <input type="text" placeholder="Enter your password..." />
            </div>
            <a href="/">
              <button className="loginbtn">Register</button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
