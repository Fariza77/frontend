import React from "react";
import "./productDetails.scss";
import { useParams } from "react-router-dom";
import firstImage from "../../assets/images/img1.png";
import secondImage from "../../assets/images/img2.png";
import thirdImage from "../../assets/images/img3.png";
import fourthImage from "../../assets/images/img4.png";
import fifthImage from "../../assets/images/img5.png";
import productJson from '../../db/products.json';
import Heading from "../common/Heading";
import Consultation from "../Navigation/Footer/Consultation";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdDownload } from "react-icons/md"; 
import license from '../../assets/images/license.jpg';
import certificate from '../../assets/images/sertificate.jpg';



export default function ProductDetails(props) {
  let images = [firstImage, secondImage, thirdImage, fourthImage, fifthImage];
 
  const { id } = useParams()
  const productObject = productJson.find(product => product.id === parseInt(id))
  const intro = productObject.title.split(" ").slice(0,3).join(" ");

    return (
      <div className="product-details-wrapper">
        <p className="intro">
        Продукты/<span>{intro}</span>
        </p>
        <Heading size={0.8}>Хедж-фонд</Heading>
        <div className="img-wrapper">
        <img src={images[productObject.id % images.length]} width={"100%"} height={400}/>
        <p className="content-wrapper">
            {productObject.content}
          </p>
        </div>
         
          <p className="content-wrapper">
            {productObject.content1}
          </p>
          <p className="content-wrapper">
            {productObject.content2}
          </p>

          <div className="documents">
            <h2>Документы</h2>
            <div className="action-buttons">
              <button className="download">
              <span className="left">
              <IoDocumentTextOutline />
              </span>
              <span className="middle">
                <h3>Документ 1</h3>
                <p>Размер 5мб</p>
              </span>
              <span className="rigth">
             <a href={certificate} download={certificate}>
             <MdDownload />
             </a>
              </span>
              </button>
              <button className="download1">
              <span className="left">
              <IoDocumentTextOutline />
              </span>
              <span className="middle">
                <h3>Документ 2</h3>
                <p>Размер 3.5мб</p>
              </span>
              <span className="rigth">
             <a href={license} download={license}>
             <MdDownload />
             </a>
              </span>
              </button>
            </div>
            <div className="licences">
              <h1>Лицензии</h1>
              <div className="content">
                <div className="first">
                  <img src={certificate} onClick={(e) => e.target.requestFullscreen()} />
                  <h3>Сертификат</h3>
                </div>
                <div className="second">
                  <img src={license} onClick={(e) => e.target.requestFullscreen()} />
                  <h3>Лицензия </h3>
                </div>
              </div>
            </div>
          </div>
      
      </div>
    )
 
}
