import React, { useState } from "react";
import styled from "styled-components";
import Aboutme from "../components/Aboutme";
import Navbar from "../components/Navbar";
import Navbarmobile from "../components/Navbarmobile";
import profile1 from "../assets/profile/profile1.jpg";
import SingleBlog from "../components/SingleBlog";
import Update from "../components/SingleBlog";

const Container = styled.div`
  .navbarmobile {
    position: sticky;
    top: 85px;
  }
  .updateandabout {
    display: flex;
  }
  @media screen and (max-width: 824px) {
    .updateandabout {
      flex-direction: column;
    }
  }
`;

const Blogpage = () => {
  const [state, setstate] = useState(false);
  const [profile, setprofile] = useState(profile1);

  return (
    <Container>
      <Navbar changestate={(ham) => setstate(ham)} image={profile} />
      <div className="navbarmobile">
        <Navbarmobile sta={state} image={profile} />
      </div>
      <div className="updateandabout">
        <div className="update">
          <SingleBlog />
        </div>
        <div className="aboutme">
          <Aboutme image={profile} />
        </div>
      </div>
    </Container>
  );
};

export default Blogpage;
