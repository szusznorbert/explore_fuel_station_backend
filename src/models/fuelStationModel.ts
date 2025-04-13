import PumpModel from "@models/pumpModel";

interface FuelStationModel {
    id: string;
    name: string;
    address: string;
    city: string;
    latitude: number;
    longitude: number;
    pumps: PumpModel[];
  }

export default FuelStationModel
  