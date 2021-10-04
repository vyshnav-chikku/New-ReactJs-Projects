import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Lora", serif;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://i.pinimg.com/originals/0b/40/74/0b40747952803d7bf3579baa988b9edc.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: -10;
  height: 100vh;
  .registerbutton {
    position: relative;
    top: 70px;
    padding: 10px;
    text-align: right;
    margin-right: 10px;
    z-index: 100;
  }
  .regbutton {
    padding: 8px;
    text-decoration: none;
    font-size: 1.1rem;
    border-radius: 10px;
    outline: none;
    border: none;
    background: #045f5f;
    color: white;
    cursor: pointer;
  }
  .logincontainersingle {
    height: 86.2vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -9;
  }
  .login {
    position: fixed;
    margin: auto;
    height: min(25rem, 90%);
    width: min(19rem, 90%);
    padding: 10px;
    z-index: 1;
  }
  @media screen and (max-width: 920px) {
    /* .logincontainersingle {
      height: 80.2vh;
    } */
    .login {
      transform: scale(0.8);
    }
    .registerbutton {
      top: 100px;
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
    padding: 8px;
    font-size: 1.1rem;
    border-radius: 10px;
    margin: 20px 0;
    width: 100%;
    outline: none;
    border: none;
    background: #f67280;
    color: white;
    cursor: pointer;
  }
`;

const Login = () => {
  return (
    <Container>
      <div className="logincontainer">
        <div className="registerbutton">
          <a href="/register" type="button" className="regbutton">
            Register
          </a>
        </div>
        <div className="logincontainersingle">
          <div className="login">
            <div className="title">Login</div>
            <div className="email">Email</div>
            <div className="inputcontainer">
              <input type="text" placeholder="Enter your email..." />
            </div>
            <div className="password">Password</div>
            <div className="inputcontainer">
              <input type="text" placeholder="Enter your password..." />
            </div>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>
              <button className="loginbtn">Login</button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
