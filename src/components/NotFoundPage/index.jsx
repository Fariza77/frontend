import React from 'react';
import NotFoundImage from '../../assets/images/404.png';
import './style.scss';
import { Link } from 'react-router-dom';


export default function NotFoundPage() {
  return (
    <div className="NoPage-wrapper">
      <img src={NotFoundImage} />
      <br />
      <br />
     <Link className='warning-btn'
     to={'/'}>Go Back</Link>
    </div>
  )
}
