import express from "express";
import router from '../routes/index.js';
import { printDateMiddleware } from "../middlewares/misc-middleware.js";
import { errorMiddleware } from "../middlewares/error-middleware.js";
import { morganMiddleware } from "../config/morgan.js";
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';


dotenv.config();

export default function (server){
	// CONFIG
	server.use(express.json());
	server.use(express.urlencoded({ extended: true }));
	// MDW
	server.use(morganMiddleware);
	server.use(printDateMiddleware);
	server.use(fileUpload());
	// RUTAS
	server.use(router);
	// ERRORS
	server.use(errorMiddleware);
}
	