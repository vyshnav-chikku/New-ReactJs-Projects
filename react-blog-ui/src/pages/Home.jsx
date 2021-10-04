import { useState } from "react";
import styled from "styled-components";
import Aboutme from "../components/Aboutme";
import Blog from "../components/Blog";
import Blogs from "../components/Blogs";
import Navbar from "../components/Navbar";
import Navbarmobile from "../components/Navbarmobile";
import Titleimage from "../components/Titleimage";
import profile1 from "../assets/profile/profile1.jpg";
import Login from "./Login";
import Register from "./Register";

const Container = styled.div`
  .navbarmobile {
    position: sticky;
    top: 100px;
  }
  .blogandabout {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  .blogs {
    grid-column: 1/5;
  }
  .aboutme {
    grid-column: 5/6;
  }
  @media screen and (max-width: 688px) {
    .blogs {
      grid-column: 1/6;
    }
    .aboutme {
      grid-column: 1/6;
    }
  }
`;

function Home() {
  const [profile, setprofile] = useState(profile1);
  const [state, setstate] = useState(false);

  return (
    <Container className="App">
      <Navbar changestate={(ham) => setstate(ham)} image={profile} />
      <div className="navbarmobile">
        <Navbarmobile sta={state} image={profile}/>
      </div>
      <Titleimage />
      <div className="blogandabout">
        <div className="blogs">
          <Blogs />
        </div>
        <div className="aboutme">
          <Aboutme image={profile} />
        </div>
      </div>
    </Container>
  );
}

export default Home;
