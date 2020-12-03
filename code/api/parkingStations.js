import { BASE_PATH_MOBILITY } from "./config";

export const requestMobilityParking = async () => {
  try {
    const request = await fetch(
      `${BASE_PATH_MOBILITY}/flat/ParkingStation/*?where=sactive.eq.true&select=scoordinate,smetadata,scode`
    );
    if (request.status !== 200) {
      throw new Error(request.statusText);
    }
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
