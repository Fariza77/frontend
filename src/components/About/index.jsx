import React, { useState } from "react";
import "./style.scss";
import Heading from "../common/Heading";
import imgAbout from "../../assets/images/about.png";
import { TbLicense } from "react-icons/tb";
import Mareque from "../common/Mareque";

export default function About() {
  return (
    <main className="about-page-wrapper">
      <div className="heading-wrapper">
        <Heading size={1.4}>About</Heading>
      </div>
      <div className="content-wrapper">
        <img src={imgAbout} width={"100%"} height={450} />

        <div className="info">
          <p>
            Наша Команда успешно осуществляет деятельность на нескольких рынках
            инвестиций. Богатство выбора инструментов этих рынков позволяет Нам
            успешно сохранять и преумножать капитал клиентов.
          </p>
          <p>
            Вступить в партнерство с Fonte могут как профессиональные инвестора,
            так и частные лица, только начинающие открывать для себя новые
            перспективы. Наша юрисдикция - Международный финансовый центр
            «Астана» (МФЦА). Комфортные налоговые условия и регуляторные
            политики обеспечивают необходимые свободы и преимущества для
            достижения целей инвестиций.
          </p>
          <p>
            В партнерстве с Fonte Capital LTD, инвесторы имеют возможность
            воспользоваться не только проверенными стратегиями, но и смогут
            совместно разработать персональные инвестиционные решения.
          </p>
          <button className="warning-btn">
            <TbLicense /> Лицензии
          </button>
        </div>
      </div>
      <div className="hr-wrapper">
        <Mareque />
      </div>
    </main>
  );
}
