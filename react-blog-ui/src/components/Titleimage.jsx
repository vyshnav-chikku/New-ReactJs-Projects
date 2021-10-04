import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg1 from "../assets/images/background7.jpg";

const Container = styled.div`
  font-family: "Lora", serif;
  .imagecontainer {
    height: 80vh;
    position: relative;
    z-index: -100;
  }
  .image {
    width: 100%;
    height: 70%;
    position: absolute;
    bottom: 0;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .titlecontainer {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .title1 {
    font-size: 1.8rem;
    text-align: center;
  }
  .title2 {
    font-size: 8.5rem;
    line-height: 8rem;
  }
  @media screen and (max-width: 700px) {
    .title1 {
      font-size: 1rem;
    }
    .title2 {
      font-size: 5rem;
      line-height: 5rem;
    }
  }
`;

const Titleimage = () => {
  console.log(window.innerHeight);
  return (
    <Container>
      <div className="imagecontainer">
        <div className="image">
          <img src={bg1} alt="" />
        </div>
        <div className="titlecontainer">
          <div className="title1">React & Node</div>
          <div className="title2">BLOG</div>
        </div>
      </div>
    </Container>
  );
};

export default Titleimage;
