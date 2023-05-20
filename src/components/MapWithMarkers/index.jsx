import React from "react"
import { Map, ZoomControl, MouseControl, KeyboardControl, CompassControl, SyncControl, MarkerLayer, Marker  } from 'react-mapycz'

export const MapWithMarkers = ({points}) => {
    return (
    <Map zoom={7}>
        <ZoomControl/>
        <CompassControl  top={50} />
        <KeyboardControl />
        <MouseControl pan={true} wheel={true} zoom={true} />
        <SyncControl />
        <MarkerLayer>
            {
                points.map(point => <Marker coords={{lng: point.lng, lat: point.lat}} options={{title: point.title}} key={point.title} />)
            }
        </MarkerLayer>
    </Map>
    )
}