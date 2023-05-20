import React from "react"
import { Map, ZoomControl, MouseControl, KeyboardControl, CompassControl, SyncControl } from 'react-mapycz'

export const CenteredMap = ({lat, lng, zoom = 13}) => {
    return (
    <Map height="400px" center={{lat, lng}} zoom={zoom}>
        <ZoomControl/>
        <CompassControl top={50} />
        <KeyboardControl />
        <MouseControl pan={true} wheel={true} zoom={true} />
        <SyncControl />
    </Map>
    )
}