import { DeleteOutline, Edit } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import bg9 from "../assets/images/background10.jpg";
const Container = styled.div`
  .container {
    width: min(1200px, 90%);
    margin: auto;
    padding: 10px;
    font-family: "Lora", serif;
  }
  .imagecontainer {
    height: 380px;
    width: 100%;
    margin-bottom: 15px;
  }
  .imagecontainer img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  .titleandiconcontainer {
    display: flex;
    margin-bottom: 15px;
  }
  .title {
    font-size: 2.2rem;
    flex: 9;
    text-align: center;
    font-weight: bolder;
  }
  .iconcontainer {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.3rem;
  }

  .authorandday {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .author,
  .day {
    font-size: 1.3rem;
    font-weight: 100;
    color: brown;
  }
  .author span {
    font-weight: 800;
  }
  .content1,
  .content2 {
    line-height: 1.8rem;
    font-size: 1.1rem;
    margin-bottom: 30px;
    color: rgba(0, 0, 0, 0.8);
  }
  .content1::first-letter {
    font-size: 2.1rem;
    font-weight: 400;
    margin-left: 35px;
  }
  .content2::first-letter {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 716px) {
    .imagecontainer {
      height: 200px;
    }
    .title {
      font-size: 1.5rem;
    }
    .author,
    .day {
      font-size: 1.1rem;
    }
    .content1,
    .content2 {
      line-height: 1.6rem;
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 472px) {
    .imagecontainer {
      height: 150px;
    }
    .title {
      font-size: 1.2rem;
    }
    .author,
    .day {
      font-size: 1rem;
    }
    .content1,
    .content2 {
      line-height: 1.2rem;
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }
`;
const Icon = styled.div`
  margin-right: 10px;
  color: ${(props) => props.color};
  cursor: pointer;
`;

const SingleBlog = () => {
  return (
    <Container>
      <div className="container">
        <div className="imagecontainer">
          <img src={bg9} alt="" />
        </div>
        <div className="titleandiconcontainer">
          <div className="title">Lorem ipsum dolor</div>
          <div className="iconcontainer">
            <Icon className="icon1" color="teal">
              <i class="far fa-edit"></i>
            </Icon>
            <Icon className="icon2" color="red">
              <i class="far fa-trash-alt"></i>{" "}
            </Icon>
          </div>
        </div>

        <div className="authorandday">
          <div className="author">
            Author: <span className="name">Chikku</span>
          </div>
          <div className="day">1 day ago</div>
        </div>
        <p className="content1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          laudantium inventore eum, pariatur culpa eius similique maiores nam,
          accusamus rerum hic a deserunt sequi eaque aliquid quos, repellat
          ipsam harum provident assumenda perferendis deleniti consequuntur
          nisi. Quam, impedit corrupti. Fugit adipisci ducimus ratione, sint
          tempora aliquam dolore voluptates mollitia aperiam non amet iusto vel.
          Ea vel obcaecati similique id dolores ut consequatur deserunt dicta
          ullam, cumque sint tempore iure delectus velit laboriosam culpa
          laudantium. Ipsa et ratione temporibus laborum ipsum labore placeat
          voluptatibus assumenda expedita, suscipit commodi doloremque repellat
          distinctio aspernatur. Dolorum pariatur, quidem porro iusto
          repellendus veniam sequi sint! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Suscipit praesentium assumenda obcaecati maxime
          quasi optio aliquid rerum, explicabo reprehenderit nisi labore
          voluptatem natus sequi qui minima ad eum possimus exercitationem ipsam
          doloremque minus ullam quibusdam fuga? Sequi velit hic atque nobis
          similique ducimus? Eaque consequuntur beatae aperiam nam aut
          reiciendis nulla voluptatum eius quidem corrupti numquam nobis
          veritatis molestiae laudantium esse alias error fuga distinctio
          voluptates illum, eveniet laborum. Ab aliquam minima, dicta, assumenda
          nemo doloribus explicabo quasi quis, fuga at ad natus enim! Delectus
          nobis velit sequi eveniet expedita unde aspernatur nostrum eos quia,
          ad neque tenetur ratione magni mollitia, iste eligendi fugiat
          distinctio deserunt ex cumque! Asperiores fugit atque quos earum
          consequuntur aut, debitis nobis vitae soluta dolore dolorum provident
          tempora porro assumenda facere minus modi aliquam animi aperiam
          temporibus necessitatibus officia, maxime impedit ex. Ea itaque
          repellat distinctio voluptates, beatae modi suscipit corrupti ipsa
          optio, deserunt cum?
        </p>
        <p className="content2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum minima
          eius culpa animi et minus distinctio molestiae accusantium facere
          odio, nisi commodi enim! Quisquam, doloremque rem! Repellendus fugiat
          provident sit incidunt odio eum temporibus maxime saepe, quae eos ad
          nisi cupiditate distinctio itaque ipsa eaque quo dolore quaerat
          doloribus? Aliquid tempora a, totam voluptatem soluta et vero harum
          reiciendis. Ut quidem dolores dolore, quod eligendi porro et rerum
          itaque ipsa! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Laudantium eveniet, quas, laborum dicta eos officia dolore aliquam qui
          nihil voluptatibus ea obcaecati omnis molestiae illum atque. Facilis
          quidem quo laborum commodi! Pariatur minus omnis labore incidunt
          molestias, odit ipsum numquam temporibus tempore ratione doloribus,
          excepturi beatae ipsa consectetur nulla. Delectus dolorem iure
          repudiandae, facilis aperiam nihil consectetur eaque necessitatibus
          commodi fuga hic illo autem tempore soluta quos voluptatibus itaque
          praesentium!
        </p>
      </div>
    </Container>
  );
};

export default SingleBlog;
