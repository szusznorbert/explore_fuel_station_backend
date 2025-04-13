import { Request, Response } from "express"
import * as FuelStationService from "@services/fuelStation";
import FuelStationDto from "@dtos/fuelStationDto";
import CreateFuelStationDto from "@dtos/createFuelStationDto";

export const fetchFuelStations = async (req: Request, res: Response) =>  {
    try {
        const result = await FuelStationService.fetchFuelStations();
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }  
};

export const addFuelStation = async (req: Request, res: Response) =>  {    
    try {
        const data = req.body as CreateFuelStationDto;
        const id = await FuelStationService.insertFuelStation(data);
        res.status(201).send({id});
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }  
};

export const updateFuelStation = async (req: Request, res: Response) =>  {    
    try {
        const data = req.body as CreateFuelStationDto;
        const id = req.params.id;
        await FuelStationService.updateFuelStation(id, data);
        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }  
};

export const deleteFuelStation = async (req: Request, res: Response) =>  {    
    try {
        const id = req.params.id;
        await FuelStationService.deleteFuelStation(id);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }  
};