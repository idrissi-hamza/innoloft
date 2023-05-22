import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
import { CiLocationOn } from 'react-icons/ci';
import { useGetProductQuery } from '../slices/apiSlice';

const Map = () => {

  const { data: product } = useGetProductQuery(6781);


  const markerRef = useRef(null);

  const customIcon = icon({
    iconUrl: '/marker.png',
    iconSize: [32, 32],
  });



  // const position = {
  //   address: '1600 Amphitheatre Parkway, Mountain View, california.',
  //   lat: 37.42216,
  //   lng: -122.08427,
  // };
  let address = product?.company?.address;
  const position = {
    address:
      address.zipCode +
      ', ' +
      address.street +
      ', ' +
      address.city.name +
      ', ' +
      address.country?.name,
    lat: +address.latitude,
    lng: +address.longitude,
  };
  return (
    <>
      <div className="flex gap-2  ">
        <CiLocationOn className="text-2xl" />
        <p className="text-sm">{position.address}</p>
      </div>
      <MapContainer
        style={{ height: 250, zIndex: 0 }}
        center={[position.lat, position.lng]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[position.lat, position.lng]}
          ref={markerRef}
          icon={customIcon}
        >
          {/* <Popup>
          we
        </Popup> */}
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
