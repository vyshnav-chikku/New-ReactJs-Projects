import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import profile1 from "../assets/profile/profile1.jpg";
import Navbarmobile from "../components/Navbarmobile";
import Post from "../components/Post";

const Container = styled.div`
  .navbarmobile {
    position: sticky;
    top: 100px;
    z-index: 100;
  }
`;

const Newpostpage = () => {
  const [profile, setprofile] = useState(profile1);
  const [state, setstate] = useState(false);

  return (
    <Container>
      <Navbar changestate={(ham) => setstate(ham)} image={profile}/>
      <div className="navbarmobile">
        <Navbarmobile sta={state} image={profile}/>
      </div>
      <Post />
    </Container>
  );
};

export default Newpostpage;
