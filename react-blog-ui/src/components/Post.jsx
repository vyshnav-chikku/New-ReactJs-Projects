import { Add, AddCircleOutline } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import bg11 from "../assets/images/background11.jpg";

const Container = styled.div`
  .container {
    margin: 40px 20px auto 100px;
  }
  .images {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .imagecontainer {
    width: min(1400px, 95vw);
    height: 300px;
  }
  .imagecontainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .titleandpublish {
    margin-bottom: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .titleandicon {
    display: flex;
    align-items: center;
    width: min(1400px, 100%);
    margin-right: 10px;
  }
  .addicon {
    width: 35px;
    height: 35px;
    outline: 1px solid gray;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    color: gray;
    font-size: 1.9rem;
  }

  .title {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .title input {
    font-family: "Lora", serif;
    font-size: 2.5rem;
    font-weight: 300;
    outline: none;
    border: none;
    width: min(1000px, 100%);
  }
  .publishbtn {
    font-family: "Lora", serif;
    font-size: 1.5rem;
    padding: 8px 13px;
    color: white;
    border: none;
    border-radius: 10px;
    background: teal;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .story {
    margin-left: 35px;
  }
  .story .text {
    font-family: "Lora", serif;
    font-size: 1.2rem;
    outline: none;
    border: none;
    width: min(1200px, 90%);
    height: 200px;
  }

  @media screen and (max-width: 920px) {
    .container {
      margin: 20px 20px auto 20px;
    }
  }
  @media screen and (max-width: 672px) {
    .imagecontainer {
      height: 180px;
    }
    .titleandpublish {
      margin-bottom: 30px;
    }
    .addicon {
      width: 30px;
      height: 30px;
    }
    .title input {
      font-size: 1.5rem;
    }
    .publishbtn {
      font-size: 1rem;
      padding: 6px 10px;
    }
    .story {
      margin-left: 15px;
    }
    .story .text {
      font-size: 1rem;
    }
  }
`;

const Post = () => {
  const [image, setimage] = useState(bg11);
  const Imagehandler = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.target.files[0]);
    reader.onload = () => {
      if (reader.readyState == 2) {
        //readystate= 2 : loading is done
        setimage(reader.result);
      }
    };

    setimage(file.target.files[0].name);
  };
  return (
    <Container>
      <div className="container">
        <div className="images">
          <div className="imagecontainer">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="titleandpublish">
          <div className="titleandicon">
            <label htmlFor="Fileinput" className="addicon">
              <i class="fas fa-plus"></i>{" "}
            </label>
            <input
              type="file"
              id="Fileinput"
              style={{ display: "none" }}
              onChange={Imagehandler}
            />
            <div className="title">
              <input type="text" placeholder="Title" />
            </div>
          </div>
          <div className="publish">
            <button className="publishbtn">Publish</button>
          </div>
        </div>
        <div className="story">
          <textarea
            type="text"
            placeholder="Tell your story..."
            className="text"
          ></textarea>
        </div>
      </div>
    </Container>
  );
};

export default Post;
