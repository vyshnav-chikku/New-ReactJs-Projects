import { AccountCircleOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import bg9 from "../assets/profile/profile10.png";

const Container = styled.div`
  font-family: "Lora", serif;

  .container {
    padding: 10px 20px;
  }
  .titlecontainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: red;
    margin-bottom: 20px;
  }
  .update {
    font-size: 2rem;
    font-weight: 400;
  }
  .delete {
    cursor: pointer;
  }
  .profiletitle,
  .username,
  .email,
  .password {
    margin: 40px 0 20px 0;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .imageandicon {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .imagecontainer {
    width: 120px;
    height: 120px;
    margin-right: 15px;
  }
  .imagecontainer img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
  }
  .accounticon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e77471;
    color: white;
    cursor: pointer;
  }
  input {
    outline: none;
    border: none;
    width: 90%;
    margin-bottom: 5px;
    font-size: 1.2rem;
  }
  .updatebutton {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .updatebutton .button {
    padding: 10px;
    width: min(200px, 90%);
    font-size: 1.4rem;
    border-radius: 13px;
    outline: none;
    border: none;
    background: teal;
    color: white;
    cursor: pointer;
  }
  @media screen and (max-width: 826px) {
    .titlecontainer {
      flex-direction: column;
      align-items: flex-start;
    }
    .update {
      display: flex;
      width: 100%;
      font-size: 1.6rem;
      margin-bottom: 20px;
      color: red;
    }
    .delete {
      width: 100%;
      text-align: right;
    }
    .profiletitle,
    .username,
    .email,
    .password {
      margin: 30px 0 15px 0;
    }
  }
`;

const Update = (props) => {
  const [profile, setprofile] = useState(bg9);
  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.target.files[0]);
    // console.log(reader.result);
    reader.onload = () => {
      if (reader.readyState == 2) {
        setprofile(reader.result);
        props.changeprofile(reader.result);
      }
    };
  };
  return (
    <Container>
      <div className="container">
        <div className="titlecontainer">
          <div className="update">Update Your Account</div>
          <div className="delete">Delete Account</div>
        </div>
        <div className="profiletitle">Profile Picture</div>
        <div className="imageandicon">
          <div className="imagecontainer">
            <img src={profile} alt="" />
          </div>
          <label htmlFor="Fileinput" className="accounticon">
            <AccountCircleOutlined />
          </label>
          <input
            type="file"
            id="Fileinput"
            onChange={handleUpload}
            style={{ display: "none" }}
          />
        </div>
        <div className="username">Username</div>
        <input type="text" placeholder="Chikku" />
        <hr />
        <div className="email">Email</div>
        <input type="text" placeholder="vyshnavchikku891@gmail.com" />
        <hr />
        <div className="password">Password</div>
        <input type="text" placeholder="Password" />
        <hr />
        <div className="updatebutton">
          <button className="button">Update</button>
        </div>
      </div>
    </Container>
  );
};

export default Update;
