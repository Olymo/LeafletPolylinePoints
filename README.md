# @whatsaaaaa/leafletpolylinepoints

Leaflet plug-in to add circular points on polyline coordinates.

## Install

```
npm i @whatsaaaaa/leafletpolylinepoints
```

## Usage

```js
import { addCircularPointToPolyline } from "@whatsaaaaa/leafletpolylinepoints";

addCircularPointToPolyline(
  [
    {
      latitude: route.latitude,
      longitude: route.longitude,
    },
  ],
  map,
  {
    color: "red",
    bindPopup: true,
    popupContent: `Popup Content!`,
  }
);
```

## Parameters

- coordinates: Array of objects (lat, lng)
- map: Obhect
- options: Object

## Options

- color - Default 'blue'. Change the color of circle
- bindPopup - Default 'false'. On click binds popup.
- popupContent - What to show in popup.

## Recommended CSS

```css
.polyline-point > div {
  margin-left: -1px;
  margin-top: -3px;
  transform-origin: center center;
}
```
