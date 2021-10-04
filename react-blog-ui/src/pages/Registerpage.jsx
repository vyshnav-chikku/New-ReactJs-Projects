import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Navbarmobile from "../components/Navbarmobile";
import Register from "./Register";
import profile1 from "../assets/profile/profile1.jpg";

const Container = styled.div``;

const Registerpage = () => {
  const [profile, setprofile] = useState(profile1);
  const [state, setstate] = useState(false);

  return (
    <Container>
      {" "}
      <Navbar changestate={(ham) => setstate(ham)} image={profile} />
      <div className="navbarmobile">
        <Navbarmobile sta={state} image={profile}/>
      </div>
      <Register />
    </Container>
  );
};

export default Registerpage;
