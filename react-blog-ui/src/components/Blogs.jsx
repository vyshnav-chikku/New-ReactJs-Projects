import React from "react";
import styled from "styled-components";
import Blog from "./Blog";
import bg1 from "../assets/images/background1.jpg";
import bg2 from "../assets/images/background2.jpg";
import bg3 from "../assets/images/background3.jpg";
import bg4 from "../assets/images/background4.jpg";
import bg5 from "../assets/images/background5.jpg";

const Container = styled.div`
  display: grid;
  font-family: "Lora", serif;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  padding: 20px;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media screen and (max-width: 432px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const Blogs = () => {
  return (
    <Container>
      <Blog bg={bg1} />
      <Blog bg={bg2} />
      <Blog bg={bg3} />
      <Blog bg={bg4} />
      <Blog bg={bg5} />
    </Container>
  );
};

export default Blogs;
