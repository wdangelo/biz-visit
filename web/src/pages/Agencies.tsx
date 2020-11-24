import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Link } from 'react-router-dom'
import AsideBar from '../components/AsideBar'
import { FiPlus } from 'react-icons/fi'
import '../../src/styles/pages/agencies.css'
import 'leaflet/dist/leaflet.css'

import mapIcon from '../utils/mapIcon'

function Agencies () {
    return (
        <div id="page-agencies">
            <AsideBar />

            <MapContainer 
                center={[-22.4144873,-47.5616261]} 
                style={{ left: '19rem', width: '84.1%', height: '58.5rem'}}
                zoom={15} >

                {/*<TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />*/}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                <Marker 
                    position={[-22.4144873,-47.5616261]}
                    icon={mapIcon}
                >

                </Marker>
            </MapContainer>
            
                <Link to="/" className="add-agencies">
                    <FiPlus  size={32} color="#fff"/>
                </Link>
            
            
        </div>
        
        
        
        
    )
}

export default Agencies