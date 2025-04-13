 import { Express } from "express";
 import fuelStationRouter from "@routes/fuelStationRouter"; 

export default (app: Express) => {
  app.use('/fuel-station', fuelStationRouter);
};