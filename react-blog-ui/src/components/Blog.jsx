import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  width: 500px;

  .imagecontainer {
    width: 100%;
  }
  .imagecontainer img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .music {
    text-align: center;
    color: gray;
    margin-bottom: 20px;
  }
  .title {
    font-size: 1.8rem;
    text-align: center;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .time {
    text-align: center;
    margin-bottom: 20px;
    color: gray;
  }
  .blogcontent {
    width: 100%;
  }
  .blogcontent .blog {
    width: min(500px, 90%);
    text-decoration: none;
    margin: 0 auto;
    font-size: 1.15rem;
    line-height: 1.9rem;
    color: gray;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  @media screen and (max-width: 900px) {
    width: 300px;
  }
  @media screen and (max-width: 432px) {
    width: 250px;
  }
`;

const Blog = (props) => {
  return (
    <Container>
      <a href="/blog">
        <div className="imagecontainer">
          <img src={props.bg} alt="" />
        </div>
      </a>
      <div className="music">Music Life</div>
      <div className="title">Lorem ipsum dolor sit amet</div>
      <div className="time">1 hour ago</div>
      <div className="blogcontent">
        <a href="/blog" className="blog">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quidem
          sapiente placeat? A culpa quasi nemo ipsa vel dolor, alias nobis sequi
          aperiam, reprehenderit, reiciendis tempore nihil sunt vitae autem?
          Nihil, ex. Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Eum quidem sapiente placeat? A culpa
          quasi nemo ipsa vel dolor, alias nobis sequi aperiam, reprehenderit,
          reiciendis tempore nihil sunt vitae autem? Nihil, ex. Lorem ipsum
          dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Eum quidem sapiente placeat? A culpa quasi nemo ipsa vel dolor,
          alias nobis sequi aperiam, reprehenderit, reiciendis tempore nihil
          sunt vitae autem? Nihil, ex. Lorem ipsum dolor sit amet.
        </a>
      </div>
    </Container>
  );
};

export default Blog;
