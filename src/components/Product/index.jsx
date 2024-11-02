import Heading from "../common/Heading";
import "./style.scss";
import ProductInfo from "./ProductInfo";
import firstImage from "../../assets/images/img1.png";
import secondImage from "../../assets/images/img2.png";
import thirdImage from "../../assets/images/img3.png";
import fourthImage from "../../assets/images/img4.png";
import fifthImage from "../../assets/images/img5.png";
import productsJson from "../../db/products.json";
import { Link } from "react-router-dom";

export default function Product() {
  let images = [firstImage, secondImage, thirdImage, fourthImage, fifthImage];

  return (
    <div className="product-page-wrapper">
      <Heading size={1.2}>Product</Heading>
      <div className="component-wrapper">
        {productsJson?.map((products, index) => {
          return (
            <>
              <ProductInfo image={images[products.id % images.length]}>
                <h2>{products.title}</h2>
                <p>{products.content}</p>
                <Link to={"/product/" + products.id}>
                  <button className="warning-btn">Подробнее</button>
                </Link>
              </ProductInfo>
            </>
          );
        })
        }
      </div>
      <h2>
        <span>*</span>в процессе регистрации
      </h2>
    </div>
  );
}
