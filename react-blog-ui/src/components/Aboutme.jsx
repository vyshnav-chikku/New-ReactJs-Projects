import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import profile1 from "../assets/profile/profile1.jpg";

const Container = styled.div`
  font-family: "Lora", serif;
  .container {
    margin: 0 auto;
    width: 350px;
    padding: 10px;
  }
  .aboutme {
    margin: 10px 0;
    text-align: center;
    font-weight: bold;
  }
  .imagecontainer {
    width: 100%;
    height: 450px;
    overflow: hidden;
    margin: 20px 0;
  }
  .imagecontainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .text {
    margin-bottom: 30px;
  }
  .categories {
    margin: 10px 0;
    font-weight: bold;
    text-align: center;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
  }
  .items li {
    width: 50%;
    list-style: none;
    margin-bottom: 20px;
  }
  .follow {
    margin: 10px 0;
    font-weight: bold;
    text-align: center;
  }
  .icons {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  .icons .icon {
    margin-right: 10px;
  }
  @media screen and (max-width: 432px) {
    .container {
      width: 280px;
    }
  }
`;

const Aboutme = (props) => {
  return (
    <Container>
      <div className="container">
        <hr />
        <div className="aboutme">ABOUT ME</div>
        <hr />
        <a href="/update">
          <div className="imagecontainer">
            <img src={props.image} alt="" />
          </div>
        </a>
        <p className="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste magnam
          eius nisi expedita voluptatem quas?
        </p>
        <hr />
        <div className="categories">CATEGORIES</div>
        <hr />
        <ul className="items">
          <li>Life</li>
          <li>Music</li>
          <li>Sport</li>
          <li>Style</li>
          <li>Tech</li>
          <li>Cinema</li>
        </ul>
        <hr />
        <div className="follow">FOLLOW US</div>
        <hr />
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
    </Container>
  );
};

export default Aboutme;
