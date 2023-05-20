import React from "react"
import { Map, ZoomControl, MouseControl, KeyboardControl, CompassControl, SyncControl } from 'react-mapycz'

export const SimpleMap = () => {
    return (
    <Map>
        <ZoomControl/>
        <CompassControl  top={50} />
        <KeyboardControl />
        <MouseControl pan={true} wheel={true} zoom={true} />
        <SyncControl />
    </Map>
    )
}