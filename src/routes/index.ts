import { Router } from 'express';
require('dotenv').config()
import User from './User'

const routes = Router();

// ejemplo
routes.use('/user', User)

export default routes;

