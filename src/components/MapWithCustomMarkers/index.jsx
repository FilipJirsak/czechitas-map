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
import icon from "./czechitas.png";
import "./style.css";

const MarkerView = ({ title }) => {
  return (
    <img src={icon} alt={title} title={title} className="marker" />
  );
};

export const MapWithCustomMarkers = ({ points }) => {
  const handleMapEvent = (event) => {
    if (event.type === "marker-click") {
      const marker = event.target
      /*
      marker.getId()
      marker.getTitle()
      marker.getCoords()
      */
      alert("Uživatel kliknul na " + marker.getTitle())
    }
  }

  return (
    <Map zoom={7} onEvent={handleMapEvent}>
      <ZoomControl />
      <CompassControl top={50} />
      <KeyboardControl />
      <MouseControl pan={true} wheel={true} zoom={true} />
      <SyncControl />
      <MarkerLayer>
        {points.map((point) => (
          <Marker
            coords={{ lng: point.lng, lat: point.lat }}
            options={{
              title: point.title,
              url: (marker) => <MarkerView title={point.title} />,
            }}
            key={point.title}
          />
        ))}
      </MarkerLayer>
    </Map>
  );
};
