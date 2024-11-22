import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
const Card = ({ item }) => {

  return (
    <div className="card">
      <div className="imageContainer">
        <img src={ item.images[0]} alt="" />
      </div>

      <div className="dataCont">
        <Link to={`/${item.id}`}>
          <h2 className='title'>{item.title}</h2>
        </Link>
        <p className='address'>{item.address}</p>
        <p className='price'>{item.price}</p>

        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="./bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="./bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>

          <div className="icons">
            <div className="icon1">
              <img src="./save.png" alt="" />
            </div>

            <div className="icon1">
              <img src="./chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card