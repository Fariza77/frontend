import React from "react";
import Heading from "../../common/Heading";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <main className="footer-wrapper">
      <footer className="main-footer">
        <div className="left-side">
        <div className="heading-wrapper">
          <Heading size={1.2} gray={true}>Fonte</Heading>
        </div>
        <div className="footer-links">
          <div className="left">
            <Link to={"/about"}>О нас</Link>
            <Link to={"/team"}>Команда</Link>
            <Link to={"blog/"}>Блог</Link>
            <Link to={"/product"}>Продукты</Link>
            <Link to={"/contact"}>Контакты</Link>
          </div>
          <div className="right">
            <Link to={"/terms and conditions"}>Terms and conditions</Link>
            <Link to={"/privacy and policy"}>Privacy policy</Link>
          </div>
        </div>
        </div>
        <div className="footer-social-media">
          <span>
            <FaFacebookF className="facebook" />
          </span>
          <span>
            <FaInstagram className="instagram" />
          </span>
          <span>
            <FaTwitter className="twitter" />
          </span>
        </div>
      </footer>
      <div className="last-footer-part">
        <h2>©  • Fonte • All rights reserved</h2>
        <p>
          Частная компания «Fonte Capital Ltd.», зарегистрированная по адресу:
          Есильский район, г. Нур-Султан, Мангилик Ел, 55/20, офис 345-346, БИН
          220140900035, осуществляет свою деятельность в соответствии с
          законодательством Международного Финансового центра «Астана» (МФЦА)
          имеет право осуществлять регулируемую деятельность по управлению
          коллективными инвестициями – на основании лицензии №
          AFSA-A-LA-2022-0004, от 27 января 2022 года на бессрочной основе
        </p>
        <p>
          Стоимость инвестиции инвестора в инвестиционный фонд может
          увеличиваться или уменьшаться. Результаты инвестирования в прошлом не
          определяют доходы в будущем. Управляющая компания инвестиционного
          фонда или МФЦА не гарантируют доходности инвестиций. Инвестору
          необходимо ознакомиться с Уставом (Constitution) и Инвестиционным
          меморандумом (Offering Memorandum) инвестиционного фонда, его
          инвестиционной декларацией и определенными рисками перед
          инвестированием активов в инвестиционный фонд.
        </p>
      </div>
    </main>
  );
}
