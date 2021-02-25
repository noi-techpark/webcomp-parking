import greenIcon from "../assets/pins/green.svg";
import redIcon from "../assets/pins/red.svg";
// import greyIcon from "../assets/pins/grey.svg";
// import orangeIcon from "../assets/pins/orange.svg";

export const getPin = (mvalue) => {
  if (mvalue >= 1) {
    return greenIcon;
  }
  if (mvalue <= 0) {
    return redIcon;
  }
};
