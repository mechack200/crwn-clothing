import React from 'react'
import './menu-item.styles.scss'

export const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="content">
        <h2 className="title">{title}</h2>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}