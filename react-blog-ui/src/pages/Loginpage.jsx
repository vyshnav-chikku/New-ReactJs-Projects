import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import profile1 from "../assets/profile/profile1.jpg";
import Navbarmobile from "../components/Navbarmobile";
import Login from "./Login";

const Container = styled.div`
  .navbarmobile {
    position: sticky;
    top: 100px;
  }
`;
const Loginpage = () => {
  const [state, setstate] = useState(false);
  const [profile, setprofile] = useState(profile1);

  return (
    <Container>
      <Navbar changestate={(ham) => setstate(ham)} image={profile} />
      <div className="navbarmobile">
        <Navbarmobile sta={state} image={profile}/>
      </div>
      <Login />
    </Container>
  );
};

export default Loginpage;
