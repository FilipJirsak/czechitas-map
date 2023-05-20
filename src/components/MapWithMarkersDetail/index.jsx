import React from "react";
import {
  Map,
  ZoomControl,
  MouseControl,
  KeyboardControl,
  CompassControl,
  SyncControl,
  MarkerLayer,
  Marker,
} from "react-mapycz";
import "./style.css";

const Address = ({address}) => {
    return (
        <div className="card--address">
            {
                        address.map((line, index) => <div key={index}>{line}</div>)
            }
        </div>
    )
}

export const MapWithMarkersDetail = ({ points }) => {
  return (
    <Map zoom={7}>
      <ZoomControl />
      <CompassControl top={50} />
      <KeyboardControl />
      <MouseControl pan={true} wheel={true} zoom={true} />
      <SyncControl />
      <MarkerLayer>
        {points.map((point) => (
          <Marker
            coords={{ lng: point.lng, lat: point.lat }}
            options={{ title: point.title }}
            card={{
                header: point.title,
                body: () => <Address address={point.address} />,
                footer: (coords) => <div className="card--footer">Zeměpisná délka: {coords.lng}, zeměpisná šířka: {coords.lat}</div>
            }}
            key={point.title}
          />
        ))}
      </MarkerLayer>
    </Map>
  );
};
