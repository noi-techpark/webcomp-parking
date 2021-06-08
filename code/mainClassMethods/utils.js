import greenIcon from "../assets/pins/green.svg";
import redIcon from "../assets/pins/red.svg";
import Leaflet from "leaflet";


export const getPin = (mvalue) => {
  let hasRealtimeData = false;
  var pin;
  if (mvalue === undefined || mvalue < 0) {
    pin = greenIcon;
  } else if (mvalue >= 1) {
    pin = greenIcon;
    hasRealtimeData = true;
  } else {
    pin = redIcon;
    hasRealtimeData = true;
  }

  let dotdiv = hasRealtimeData ? '<div class="custom-div-icon-dot"></div>' : ""

  return Leaflet.divIcon(
    {
      className: 'custom-div-icon',
      html: `<div><img src="${pin}" />${dotdiv}</div>`,
      iconSize: [36, 36]
    }
  )
};
