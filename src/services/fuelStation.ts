import { response } from "express";
import FuelStationDto from "@dtos/fuelStationDto";
import * as FuelStationRepository from "@repositories/fuelStationRepository"
import * as FuelStationMapper from "@mappers/fuelStationMapper"
import CreateFuelStationDto from "@dtos/createFuelStationDto";

export const fetchFuelStations = async () : Promise <FuelStationDto[]> => {
 const fuelStationModels = await  FuelStationRepository.fetch();  
 return fuelStationModels.map((fuelStation) => {
    return FuelStationMapper.modelToDto(fuelStation);
 })
};

export const insertFuelStation = async (dto : CreateFuelStationDto) : Promise <string> => {
   const fuelStationModel = FuelStationMapper.dtoToCreateModel(dto);
   return await FuelStationRepository.insert(fuelStationModel);
};

export const updateFuelStation = async (id: string, dto : CreateFuelStationDto) : Promise <void> => {
   const fuelStationModel = FuelStationMapper.dtoToCreateModel(dto);
    await FuelStationRepository.updateById(id, fuelStationModel);
};

export const deleteFuelStation = async (id : string) : Promise <void> => {
   await FuelStationRepository.deleteById(id);
};