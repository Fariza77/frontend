import React from "react";
import Heading from "../common/Heading";
import bagImage from "../../assets/icons/bag.png";
import diamondImage from "../../assets/icons/diamond.png";
import graphImage from "../../assets/icons/graph.png";
import handShakeImage from "../../assets/icons/handShake.png";
import './style.scss';


export default function OurValues(props) {
  return (
    <div className="values-wrapper">
      <Heading size={1.2}>Наши ценности</Heading>

     <div className="value">
     <div className="component-wrapper">
      
      <img src={diamondImage} />
  
    <div className="right">
      <h2>Стабильность</h2>
      <p>
        Сохранность капитала клиентов приоритетнее доходности - каждое решение
        взвешено, обдумано и оценено.
      </p>
    </div>
    </div>
    <div className="component-wrapper">
  
      <img src={graphImage} />
    
    <div className="right">
      <h2>Устойчивость</h2>
      <p>
        Устойчивое развитие — основа нашей бизнес-модели. Начиная с поиска и
        оценки предоставившихся возможностей для бизнеса до последовательного
        развития наших проектов и реаллокации капитала в новые возможности.
      </p>
    </div>
    </div>
    <div className="component-wrapper">
 
      <img src={bagImage} />

    <div className="right">
      <h2>Команда</h2>
      <p>
        Команда Fonte Capital LTD – основа успеха. Каждый сотрудник Компании –
        это ценный актив в рабочем процессе фонда. Наша цель – создание такой
        рабочей атмосферы и условий, которые позволят максимально раскрыть
        потенциал каждого сотрудника для достижения максимального результата.
      </p>
    </div>
    </div>
   <div className="component-wrapper">
  
      <img src={handShakeImage} />
   
    <div className="right">
      <h2>Репутация</h2>
      <p>
      Ответственность и этика – основа нашей деятельности. Деятельность в рамках лучших практик (Корпоративный Кодекс этики и стандарты профессионального поведения) позволяет предлагать клиентам более качественные инвестиционные продукты, отвечающие высоким требованиям и ожиданиям самых требовательных клиентов.
      </p>
    </div>
   </div>
     </div>
    </div>
  );
}
