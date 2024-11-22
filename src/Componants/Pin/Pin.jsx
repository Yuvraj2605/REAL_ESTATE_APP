import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import './Pin.scss'

import { Link } from "react-router-dom";

const Pin = ({ item1}) => {
   
    return (
        <Marker position={[item1.latitude, item1.longitude]}>
            <Popup>
                <div className="popupContainer">
                    <img src={item1.img} alt="" />
                    <div className="textContainer">
                        <Link to={`/${item1.id}`}>{item1.title}</Link>
                        <span>{item1.bedroom} bedroom</span>
                        <b>$ {item1.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin