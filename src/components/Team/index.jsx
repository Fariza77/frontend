import React from "react";
import "./style.scss";
import Heading from "../common/Heading";
import memberImage from "../../assets/images/team/1.png";
import memberImage2 from "../../assets/images/team/2.png";
import Member from "./Member";


export default function Team() {
  return (
    <div className="team-page-wrapper">
      <div className="section">
        <Heading size={1.2}>Наша команда</Heading>
      </div>
      <div className="text-wrapper">
        <p>
          Команда Fonte Capital LTD – основа успеха. Каждый сотрудник Компании –
          это ценный актив в рабочем процессе фонда. Наша цель – создание такой
          рабочей атмосферы и условий, которые позволят максимально раскрыть
          потенциал каждого сотрудника для достижения максимального результата.
        </p>
      </div>
      <div className="all-members-wrapper">
      <Member name="Эрджан Мусин" title="CFO" image={memberImage}/>
      <Member name="Олжас Укенов" title="CEO" image={memberImage2}/>
      <Member name="Эрджан Мусин" title="CFO" image={memberImage}/>
      <Member name="Олжас Укенов" title="CEO" image={memberImage2}/>
      <Member name="Эрджан Мусин" title="CFO" image={memberImage}/>
      <Member name="Олжас Укенов" title="CEO" image={memberImage2}/>
      </div>
        <div className="section">
          <Heading size={1.2}>Сторонники и Партнеры</Heading>
          <br />
          <h2>SeedBox</h2>
          <h2>Freedom Finance</h2>
        </div>
    </div>
  );
}
