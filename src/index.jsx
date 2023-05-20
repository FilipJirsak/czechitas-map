import React from "react";
import { createRoot } from "react-dom/client";
import { SimpleMap } from "./components/SimpleMap";
import { CenteredMap } from "./components/CenteredMap";
import { MapWithMarkers } from "./components/MapWithMarkers";
import { MapWithMarkersDetail } from "./components/MapWithMarkersDetail";
import { MapWithCustomMarkers } from "./components/MapWithCustomMarkers";
import "./style.css";

const App = () => {
  return (
    <>
      <header>
        <h1>Příklad Mapy.cz pro Digitální akademii Web</h1>
      </header>
      <main>
        <h2>Jednoduchá mapa s ovládacími prvky</h2>
        <SimpleMap />

        <h2>Mapa vycentrovaná na Czechitas Home Praha</h2>
        <CenteredMap lng={14.4252626} lat={50.0833886} zoom={17} />

        <h2>Mapa s vyznačenými body</h2>
        <MapWithMarkers
          points={[
            { title: "Czechitas Praha", lng: 14.4252626, lat: 50.0833886 },
            { title: "Czechitas Brno", lng: 16.6208033, lat: 49.1902871 },
            { title: "Czechitas Ostrava", lng: 18.2923321, lat: 49.8393378 },
          ]}
        />

        <h2>Mapa s vyznačenými aktivními body s detailem</h2>
        <MapWithMarkersDetail
          points={[
            {
              title: "Czechitas Praha",
              lng: 14.4252626,
              lat: 50.0833886,
              address: [
                "Budova Darex",
                "Václavské náměstí 837/11",
                "Nové Město",
                "110 00 Praha 1",
              ],
            },
            {
              title: "Czechitas Brno",
              lng: 16.6208033,
              lat: 49.1902871,
              address: [
                "Impact Hub Brno",
                "Cyrilská 508/7",
                "Trnitá",
                "602 00 Brno",
              ],
            },
            {
              title: "Czechitas Ostrava",
              lng: 18.2923321,
              lat: 49.8393378,
              address: [
                "Impact Hub Ostrava",
                "Sokolská třída 1263/24",
                "Moravská Ostrava",
                "702 00 Ostrava",
              ],
            },
          ]}
        />
        <h2>Mapa s vlastními aktivními body</h2>
        <MapWithCustomMarkers
          points={[
            {
              title: "Czechitas Praha",
              lng: 14.4252626,
              lat: 50.0833886,
            },
            {
              title: "Czechitas Brno",
              lng: 16.6208033,
              lat: 49.1902871,
            },
            {
              title: "Czechitas Ostrava",
              lng: 18.2923321,
              lat: 49.8393378,
            },
          ]}
        />
      </main>
      <footer>
        <p>© Czechitas, Digitální akademie: Web</p>
      </footer>
    </>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
