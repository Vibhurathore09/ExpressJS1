import express from 'express'
import path from 'path'
import { homeController } from '../controller/homeController';
const router = express.Router();

app.get('/', homeController )