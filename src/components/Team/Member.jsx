import React from 'react';
import './style.scss';

export default function Member(props) {
  return (
    <div className="member-wrapper">
        <img src={props.image} alt="" />
        <h4 className='name'>{props.name}</h4>
        <h4 className='title'>{props.title}</h4>
    </div>
  )
}
