import PumpDto from "@dtos/pumpDto";

interface CreateFuelStationDto {
    id: string;
    name: string;
    address: string;
    city: string;
    latitude: number;
    longitude: number;
    pumps: PumpDto[];
  }

export default CreateFuelStationDto
  