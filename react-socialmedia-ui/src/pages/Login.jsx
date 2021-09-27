import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  /* background: #dcdcdc; */
  background: url("http://images5.fanpop.com/image/photos/30200000/jaime-cersei-the-things-i-do-for-love-game-of-thrones-30225291-1280-800.jpg");
  background-size: cover;
  position: relative;
  .container {
    display: flex;
    margin: auto;
    width: min(90%, 70.5rem);
    height: min(90%, 50.5rem);
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
    margin: auto 0;
    height: min(100%, 20rem);
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
  }
  .buttonlogin .loginbutton {
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
  .createaccbtn .registerbutton {
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
  /* @media screen and (max-height: 690px) {
    .input {
      padding: 5px;
      border-radius: 5px;
    }
    .input input {
      font-size: 12px;
    }
    .buttonlogin .loginbutton {
      padding: 5px;
      border-radius: 5px;
      width: 80%;
      font-size: 15px;
    }
    .forgotlink {
      font-size: 12px;
    }
    .createaccbtn .registerbutton {
      padding: 5px;
      border-radius: 5px;
      font-size: 12px;
    }
  } */
  @media screen and (max-width: 894px) {
    .container {
      flex-direction: column;
      height: min(90%, 70rem);

      /* height: 60vh;
      width: 60vw; */
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
      width: min(100%, 20rem);
      margin: 0 auto auto auto;
    }
  }
`;

const Login = () => {
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
            <div className="input input1">
              <input type="text" placeholder="Username" />
            </div>
            <div className="input input2">
              <input type="text" placeholder="Password" />
            </div>
            <div className="buttonlogin">
              <a href="/register" type="button" className="loginbutton">
                Log In
              </a>
            </div>
            <a href="/register" className="forgotlink">
              Forgot Password?
            </a>
            <div className="createaccbtn">
              <a href="/register" type="button" className="registerbutton">
                Create a New Account
              </a>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
