import "./style.scss";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import CarouselComponent from "../common/CarouselComponent";
import About from "../About";
import OurValues from "./OurValues";
import Mareque from "../common/Mareque";
import Consultation from "../Navigation/Footer/Consultation";
import CompanyBlog from "./CompanyBlog";

export default function LandingPage() {
  const images = [img1, img2, img3, img4, img5];
  return (
    <main className="landing-page-wrapper">
      <div className="landing-carousel-wrapper">
        <CarouselComponent images={images}
        blurred={true}
        >
          <h1>Хедж-фонд</h1>
          <p>
            Классический выбор профессиональных инвесторов с заданными
            умеренными параметрами риска. Основан на инвестировании в бумаги
            индекса S&P 500 с диверсификацией по 11 секторам экономики.
          </p>
          <button className="warning-btn">Подробнее</button>
        </CarouselComponent>
      </div>
      <div className="landing-page-about-wrapper">
        <About />
      </div>
      <div className="marquee-wrapper">
        <Mareque />
      </div>
      <div className="landing-page-values-wrapper">
        <OurValues />
      </div>
      <div className="marquee-wrapper">
        <Mareque reversed={true} />
      </div>

      <div className="company-blog-wrapper">
        <CompanyBlog />
      </div>

      <div className="consultation-wrapper">
        <Consultation />
      </div>
    </main>
  );
}
