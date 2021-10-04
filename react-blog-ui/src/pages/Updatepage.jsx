import React, { useState } from "react";
import Update from "../components/Update";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Navbarmobile from "../components/Navbarmobile";
import profile1 from "../assets/profile/profile1.jpg";
import Aboutme from "../components/Aboutme";

const Container = styled.div`
  .navbarmobile {
    position: sticky;
    top: 100px;
  }
  .updateandabout {
    display: flex;
  }
  .update {
    flex: 1;
  }
  @media screen and (max-width: 676px) {
    .updateandabout {
      flex-direction: column;
    }
  }
`;

const Updatepage = () => {
  const [state, setstate] = useState(false);
  const [profile, setprofile] = useState(profile1);
  const [navbarimage, setnavbarimage] = useState();

  return (
    <Container>
      <Navbar changestate={(ham) => setstate(ham)} image={profile} />
      <div className="navbarmobile">
        <Navbarmobile sta={state} image={profile} />
      </div>
      <div className="updateandabout">
        <div className="update">
          <Update changeprofile={(image) => setprofile(image)} />
        </div>
        <div className="about">
          <Aboutme
            image={profile}
            onchanenavimg={(navimage) => setnavbarimage(navimage)}
          />
        </div>
      </div>
    </Container>
  );
};

export default Updatepage;
