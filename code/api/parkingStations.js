import { BASE_PATH_MOBILITY } from "./config";

export const requestMobilityParking = async () => {
  try {
    const request = await fetch(
      `${BASE_PATH_MOBILITY}/flat/ParkingStation/*?where=sactive.eq.true&select=scoordinate,scode`
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

export const requestMobilityParkingDetails = async ({ scode }) => {
  console.log(scode);

  try {
    const request = await fetch(
      `${BASE_PATH_MOBILITY}/tree,node/ParkingStation/*/latest?where=sactive.eq.true,scode.eq."${scode}"&select=scoordinate,smetadata,scode,sdatatypes,sname`
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
