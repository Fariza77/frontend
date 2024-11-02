import React, { useState } from "react";
import "./style.scss";
import Heading from "../common/Heading";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import MapComponent from "../common/MapComponent";

export default function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "+998"
  });

  function setInputValueIntoState() {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  function handleSubmit() {}

  const office_coordinates = [41.2995958, 69.2400934];


  return (
    <div className="contact-wrapper">
     <div className="heading-wrapper">
     <Heading size={1.2}>Контакты</Heading>

     </div>
     

     <div className="row">
    

      <div className="left">
        <div className="info">
          <h2>Задайте нам любой вопрос</h2>
          <p>+7 701 776 24 20</p>
        </div>
        <div className="info">
          <h2>Электронная почта</h2>
          <p>client@fonte.kz</p>
          <div className="info">
            <h2>Юридический адрес</h2>
            <p>
              050040/A15E3H4, проспект Аль-Фараби, 77/7​, 10 этаж, Алматы,
              Казахстан Z05T3D0, проспект Мангилик Ел, 55/20, Офисы 345-346,
              Астана, Казахстан
            </p>
          </div>
        </div>
      </div>

      <div className="right">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              onChange={setInputValueIntoState}
              type="text"
              placeholder="enter name"
              name="name"
              value={state.name}
            />
          </div>

          <div className="form-control">
            <input
              onChange={setInputValueIntoState}
              type="email"
              placeholder="enter email"
              name="email"
              value={state.email}
            />
          </div>

          <div className="form-control">
            <PhoneInput inputClass="phone-input"
              onChange={(val) => setState({ ...state, phone: val })}
              placeholder="phone number"
              inputProps={{ required: true, name: "phone" }}
              value={state.phone}
              country={"uzb"}
            />
          </div>

          <div className="form-control">
            <button className="warning-btn">Отправить</button>
          </div>
        </form>
      </div>
     </div>
     
     <div className="maps">
   <div className="item">
    <Heading size={2}>Офис в Самарканде</Heading>
   <MapComponent coords={office_coordinates}/>
   </div>
   <div className="item">
    <Heading size={2}>Ваша местоположение</Heading>
   <MapComponent/>
   </div>
     </div>
    </div>
  );
}
