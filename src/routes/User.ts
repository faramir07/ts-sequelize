import { Router } from "express";

const router = Router();

router.get('/', async (_req, res) =>{
  res.status(200).json('hola')
})

export default router

