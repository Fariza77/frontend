import React from "react";
import "./consultation.scss";
import consultationImg from "../../../assets/images/formImage.png";
import { useState } from "react";

export default function Consultation() {
    const [consultation,setConsultation] = useState({
        name: "",
        email : "",
        phone : "",
        message : ""
    });

    function handleSubmit(e) {
        e.preventDefault();

    }
  return (
    <div className="consultation-page-wrapper">
      <div className="left">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input type="text" id="name" name="fullname" placeholder="fullname" />
        </div>
        <div className="form-control row">
          <div className="left">
          <input type="email" id="email" name="email" placeholder="email" />
          </div>
          <div className="right">
          <input
            type="tell"
            id="phone"
            name="phone"
            placeholder="phone number"
          />
        </div>
        </div>
       
        <div className="form-control">
          <textarea id="message" name="message" placeholder="message" />
        </div>
        <div className="form-control">
            <button className="warning-btn">
            Получить консультацию
            </button>
        </div>
      </form>
      </div>
      <div className="right">
        <img src={consultationImg}  />
      </div>
    </div>
  );
}
