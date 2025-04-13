import FuelStationModel from "@models/fuelStationModel"
import FuelStationDto from "@dtos/fuelStationDto"
import CreateFuelStationModel from "@models/createFuelStationModel"
import CreateFuelStationDto from "@dtos/createFuelStationDto"


export const modelToDto = (model : FuelStationModel) : FuelStationDto => {
    return {
        id : model.id,
        address : model.address,
        city : model.city,
        latitude : model.latitude,
        longitude : model.longitude,
        name : model.name,
        pumps : model.pumps
    } 
}

export const dtoToModel = (dto : FuelStationDto) : FuelStationModel => {
    return {
        id : dto.id,
        address : dto.address,
        city : dto.city,
        latitude : dto.latitude,
        longitude : dto.longitude,
        name : dto.name,
        pumps : dto.pumps
    }
}

export const dtoToCreateModel = (dto : CreateFuelStationDto) : CreateFuelStationModel => {
    return {
        address : dto.address,
        city : dto.city,
        latitude : dto.latitude,
        longitude : dto.longitude,
        name : dto.name,
        pumps : dto.pumps
    }
}

