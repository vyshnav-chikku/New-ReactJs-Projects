import {
  Facebook,
  Instagram,
  Pinterest,
  Search,
  Twitter,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import profile from "../assets/profile/profile1.jpg";

const Navbarcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px;
  position: relative;
  @media screen and (max-width: 920px) {
    display: none;
  }
`;
const Expandsearchcontainer = styled.div`
  position: absolute;
  cursor: pointer;
  top: 70px;
  grid-column: 4/5;
  grid-row: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${(props) => (props.sta ? 0 : -30)}px)
    scaleY(${(props) => (props.sta ? 1 : 0)});
  transition: all 0.5s ease;
`;

const Container = styled.div`
  z-index: 100;
  position: sticky;
  top: 0;
  background: white;
  .iconcontainer {
    grid-column: 1/2;
    display: flex;
    align-items: center;
  }
  .icons {
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  .icon {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
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

  .pagescontainer {
    grid-column: 2/4;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pages {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 400;
    cursor: pointer;
  }
  .pages a {
    color: grey;
    margin-right: 10px;
    :hover {
      color: lightgrey;
    }
  }
  .profilecontainer {
    grid-column: 4/5;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .imageandicon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imagecontainer {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .imagecontainer img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  .searchcontainer {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  .searchcontainer .searchicon {
    width: 100%;
    height: 100%;
  }

  .expand {
    //parent  is above
    width: min(300px, 100%);
    margin: auto;
    display: flex;
    align-items: center;
    padding: 6px;
    border: 1px solid grey;
    border-radius: 30px;
    background: white;
  }
  .expandicon {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .input input {
    font-size: 1rem;
    border: none;
    outline: none;
  }
`;
const Navbarmobile = styled.div`
  //mobilesize
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  @media screen and (min-width: 920px) {
    display: none;
  }
  .menucontainer {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hamburgermenu {
    position: relative;
    background: black;
    width: 35px;
    height: 5px;
    border-radius: 5px;
  }
  .hamburgermenu::before,
  .hamburgermenu::after {
    content: "";
    background: black;
    width: 35px;
    height: 5px;
    border-radius: 5px;
  }
  .hamburgermenu::before {
    position: absolute;
    transform: translateY(-10px);
  }
  .hamburgermenu::after {
    position: absolute;
    transform: translateY(10px);
  }
  .menucontainer.active .hamburgermenu {
    background: transparent;
  }
  .menucontainer.active .hamburgermenu::before {
    transform: translateY(0) rotate(45deg);
    transition: all 0.4s ease;
  }
  .menucontainer.active .hamburgermenu::after {
    transform: translateY(0) rotate(-45deg);
    transition: all 0.4s ease;
  }
  .titlecontainer {
    display: block;
    font-family: "Lobster", cursive;
  }
  .title1 {
    font-size: 0.8rem;
    text-align: end;
  }
  .title2 {
    font-size: 2.5rem;
  }
`;

const Navbar = (props) => {
  const [state, setstate] = useState(false);
  const [hamburger, sethamburger] = useState(false);

  props.changestate(hamburger);
  const changestate = () => {
    setstate(!state);
    // console.log(state);
  };

  const changehamburger = () => {
    sethamburger(!hamburger);
  };
  return (
    <Container>
      <Navbarcontainer sta={state}>
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
        </div>
        <div className="pagescontainer">
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
          <Expandsearchcontainer sta={state}>
            <div className="expand">
              <Search className="expandicon" />
              <div className="input">
                <input type="text" placeholder="search" />
              </div>
            </div>
          </Expandsearchcontainer>
        </div>
      </Navbarcontainer>
      <Navbarmobile>
        <div className={hamburger ? "menucontainer active" : "menucontainer"}>
          <div className="hamburgermenu" onClick={changehamburger}></div>
        </div>
        <div className="titlecontainer">
          <a href="/" style={{ textDecoration: "none", color: "black" }}>
            <div className="title1">React & Node</div>
            <div className="title2">BLOG</div>
          </a>
        </div>
      </Navbarmobile>
    </Container>
  );
};

export default Navbar;
