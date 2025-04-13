import FuelStationModel from "@models/fuelStationModel"
import db from "@configs/db"
import CreateFuelStationModel from "@models/createFuelStationModel";


export const fetch = async () : Promise <FuelStationModel[]> => {
const snapshot = await  db.collection('fuelStations').get();

    return snapshot.docs.map((doc)=> {
        const data = doc.data(); 
        return {id: doc.id,
                name : data.name,
                address : data.address,
                city : data.city,
                latitude : data.latitude,
                longitude : data.longitude,
                pumps : data.pumps
        }
    })
};


export const insert = async (model : CreateFuelStationModel) : Promise <string> => {
    const ref = await  db.collection('fuelStations').add(model);
    return ref.id;
};

export const updateById = async (id: string, model : CreateFuelStationModel) : Promise <void> => {
    await  db.collection('fuelStations').doc(id).update({name: model.name, pumps: model.pumps});
};

export const deleteById = async (id : string) : Promise <void> => {
    await  db.collection('fuelStations').doc(id).delete();
};