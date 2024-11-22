import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './Map.scss';
import Pin from '../Pin/Pin';

const Map = ({ item }) => {

    const position = [51.505, -0.09]
    return (
        <MapContainer center={position} zoom={5} scrollWheelZoom={false} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {
                item.map((item1)=><Pin item1={item1}/>)
            }
            

            </MapContainer>
    )
}

export default Map