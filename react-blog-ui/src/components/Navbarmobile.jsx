import React, { useState } from "react";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Pinterest,
  Search,
  Twitter,
} from "@material-ui/icons";
import profile from "../assets/profile/profile1.jpg";
const Expandsearchcontainer = styled.div`
  width: 90%;
  margin: 0 auto;
  top: 70px;
  grid-column: 4/5;
  grid-row: 2/3;
  padding: 10px;
  display: ${(props) => (props.sta ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  /* transform: translateY(${(props) => (props.sta ? 0 : -30)}px)
    scaleY(${(props) => (props.sta ? 1 : 0)});
  transition: display 0.5s ease; */
  .expand {
    background: white;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10px;
    border: 1px solid black;
    border-radius: 50px;
    color: black;
  }
  .input input {
    font-size: 1.2rem;
    outline: none;
    border: none;
  }
  @media screen and (max-width: 432px) {
    .input input {
      font-size: 0.8rem;
    }
  }
`;
const Container = styled.div`
  font-family: "Lora", serif;
  z-index: 100;
  background: black;
  color: white;
  width: min(400px, 100%);
  position: absolute;
  transform: translateX(${(props) => (props.sta ? 0 : -100)}%);
  transition: all 0.5s ease;
  @media (min-width: 920px) {
    display: none;
  }
  .iconcontainer {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    :hover {
      background: white;
      color: black;
    }
  }
  .iconcontainer .icons {
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
  }
  .icon {
    margin-right: 10px;
    width: 30px;
    height: 30px;
  }
  .icon1,
  .icon2,
  .icon3,
  .icon4 {
    width: 100%;
    height: 100%;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
  .pages {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
  }
  .pages a {
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
    padding: 25px;
    cursor: pointer;
    color: white;
    :hover {
      background: white;
      color: black;
      transform: translateY(-2px);
      font-size: 1.8rem;
      transition: all 0.2s ease;
    }
  }
  .profilecontainer {
    display: flex;
    flex-direction: column;
  }
  .imageandicon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imagecontainer {
    width: 50px;
    height: 50px;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
  .imagecontainer img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  .searchcontainer {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
  .searchicon {
    width: 30px;
    height: 30px;
  }
`;

const Navbarmobile = (props) => {
  const [state, setstate] = useState(false);

  const changestate = () => {
    setstate(!state);
  };
  return (
    <Container sta={props.sta}>
      <div className="iconcontainer">
        <div className="icons">
          <div className="icon">
            <Facebook className="icon1" />
          </div>
          <div className="icon">
            <Instagram className="icon2" />
          </div>
          <div className="icon">
            <Pinterest className="icon3" />
          </div>
          <div className="icon">
            <Twitter className="icon4" />
          </div>
        </div>
        <div className="profilecontainer">
          <div className="imageandicon">
            <a href="/update" className="imagecontainer">
              <img src={props.image} alt="" />
            </a>
            <div className="searchcontainer" onClick={changestate}>
              <Search className="searchicon" />
            </div>
          </div>
        </div>
      </div>
      <Expandsearchcontainer sta={state}>
        <div className="expand">
          <Search className="expandicon" />
          <div className="input">
            <input type="text" placeholder="search" />
          </div>
        </div>
      </Expandsearchcontainer>
      <ul className="pages">
        <a href="/" style={{ textDecoration: "none" }}>
          <li>HOME</li>
        </a>
        <a href="/blog" style={{ textDecoration: "none" }}>
          <li>ABOUT</li>
        </a>
        <a href="/login" style={{ textDecoration: "none" }}>
          <li>CONTACT</li>
        </a>

        <a href="/post" style={{ textDecoration: "none" }}>
          <li>WRITE</li>
        </a>
        <a href="/register" style={{ textDecoration: "none" }}>
          <li>LOGOUT</li>
        </a>
      </ul>
    </Container>
  );
};

export default Navbarmobile;
