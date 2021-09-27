import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: url("https://i.redd.it/skflh2nre0u51.jpg");
  background-size: cover;
  position: relative;
  .container {
    height: min(90%, 70rem);
    width: min(90%, 70rem);
    display: flex;
    margin: auto;
  }

  .titlecontainer {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
  }
  .title {
    font-size: 50px;
    font-weight: bold;
    color: #1e90ff;
    margin-bottom: 10px;
  }
  .about {
    font-size: 25px;
    color: #fff;
  }

  .logincontainer {
    width: 50%;
    padding: 10px;
    background: white;
    border-radius: 10px;
    height: min(100%, 30rem);
    margin: auto 0;
  }
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .input {
    padding: 15px;
    width: 100%;
    border: 1px solid grey;
    border-radius: 10px;
  }
  .input.input1 {
    grid-row: 1/2;
  }
  .input.input1 {
    grid-row: 2/3;
  }
  .input input {
    font-size: 20px;
    width: 100%;
    border: none;
    outline: none;
  }

  .buttonlogin {
    width: 100%;
    grid-row: 3/4;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  .buttonlogin .signupbutton {
    padding: 15px;
    border-radius: 10px;
    font-size: 20px;
    width: 100%;
    background: #1e90ff;
    border: none;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }
  .forgotlink {
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    grid-row: 4/5;
  }
  .createaccbtn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 5/6;
  }
  .createaccbtn .loginbutton {
    padding: 15px;
    border-radius: 10px;
    font-size: 20px;
    border: none;
    color: white;
    background: green;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }
  @media screen and (max-height: 560px) {
    .logincontainer {
      height: min(100%, 18rem);
      width: min(100%, 18rem);
    }
    .input {
      padding: 5px;
      border-radius: 5px;
    }
    .input input {
      font-size: 12px;
    }
    .buttonlogin .signupbutton {
      padding: 7px;
      border-radius: 5px;
      font-size: 15px;
    }
    .forgotlink {
      font-size: 12px;
    }
    .createaccbtn .loginbutton {
      padding: 7px;
      border-radius: 5px;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 894px) {
    .container {
      flex-direction: column;
    }
    .titlecontainer {
      width: min(100%, 20rem);
      margin: auto auto 0 auto;
      .title {
        font-size: 2rem;
      }
      .about {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }
    }
    .logincontainer {
      margin: 0 auto auto auto;
      width: min(100%, 20rem);
    }
  }
`;

const Register = () => {
  return (
    <Container>
      <div className="container">
        <div className="titlecontainer">
          <div className="title">GOTSOCIAL</div>
          <div className="about">
            Connect with friends and the world around you on GOTSOCIAL
          </div>
        </div>
        <form className="logincontainer">
          <div className="login">
            <div className="input">
              <input type="text" placeholder="Username" />
            </div>
            <div className="input">
              <input type="text" placeholder="Email" />
            </div>
            <div className="input">
              <input type="text" placeholder="Password" />
            </div>
            <div className="input">
              <input type="text" placeholder="Password Again" />
            </div>
            <div className="buttonlogin">
              <a href="/" type="button" className="signupbutton">
                Sign Up
              </a>
            </div>

            <div className="createaccbtn">
              <a href="/login" type="button" className="loginbutton">
                Log into Account
              </a>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Register;
