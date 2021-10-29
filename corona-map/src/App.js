import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { getMarkers } from './index';

function App() {
  /* MapContainer must have a fixed height (defined in .App) */

  const values = fetch('https://disease.sh/v3/covid-19/countries')
  .then(response => response.json())
  .then(data => data)

  console.log(values)
  return (
    <MapContainer center={[33,65]} zoom={13} scrollWheelZoom={false} className="App">

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Marker position={[33,65]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
