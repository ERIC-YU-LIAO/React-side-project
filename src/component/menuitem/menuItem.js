import React from 'react';
import '../menuitem/menuitem.scss';
import { withRouter } from "react-router";

// history 物件 指向match 屬性下方 match.url 而url去父層定義去傳下每個 MenuItem 

const MenuItem = ({ title, imageUrl, size, history,match,linkUrl}) => (
  <div className={`${size} menu-item`} onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);