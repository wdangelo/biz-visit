import leaflet from 'leaflet';
import mapMarkerImg from '../images/tri.png';
const mapIcon = leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [60, 55],
    iconAnchor: [59, 69],
    popupAnchor: [0, -60]
  })

  export default mapIcon