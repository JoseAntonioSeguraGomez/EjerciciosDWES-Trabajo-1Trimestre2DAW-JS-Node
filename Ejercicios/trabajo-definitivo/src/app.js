import express from 'express';
import * as loader from './loaders/index.js';

const server = express();

loader.init(server);

export default server;