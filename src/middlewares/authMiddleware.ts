import { Request, Response, NextFunction } from "express";
import * as env from "@configs/environment"

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log(req.headers);
    const apiKey = req.headers['authorization'] as string;
    console.log(apiKey);
    if (!apiKey || env.API_KEY !== apiKey) {
        console.log(env.API_KEY);
        console.log(process.env);
        console.log(process.env.API_KEY);
        res.status(401).send();
        return;
    }
    next();
};