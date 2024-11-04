import { MapContainer, TileLayer, useMap, Marker} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

export const LocationMap = ({property}) => {
  return (
      <MapContainer center={[property.coordinates[0], property.coordinates[1]]} zoom={15} className='bg-five w-full max-w-[700px] h-[300px]'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[property.coordinates[0], property.coordinates[1]]}></Marker>
      </MapContainer>
  )
}
