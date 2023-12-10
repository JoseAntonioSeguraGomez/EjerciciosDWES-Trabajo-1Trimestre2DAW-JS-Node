import express from "express";
import router from '../routes/index.js';
import { printDateMiddleware } from "../middlewares/misc-middleware.js";
import { errorMiddleware } from "../middlewares/error-middleware.js";
import { morganMiddleware } from "../config/morgan.js";
import dotenv from 'dotenv';
//import { authenticateJWT } from "../middlewares/auth-middleware.js";


dotenv.config();

export default function (server){
	// CONFIG
	server.use(express.json());
	server.use(express.urlencoded());
	// MDW
	server.use(morganMiddleware);
	server.use(printDateMiddleware);
	// RUTAS
	server.use(router);
	// ERRORS
	server.use(errorMiddleware);

	// Middleware de autenticación
	/*
	server.use((req, res, next) => {
	const { path } = req;
	if (path !== '/auth' && !path.startsWith('/notes')) {
		return authenticateJWT(req, res, next);
	}
	next();
	});
	*/
}
	