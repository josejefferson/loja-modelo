import { Router } from 'express'
import Product from '../models/Product'
const routes = Router()

routes.get('/', async (req, res) => {
  const data = await Product.find()
  res.json(data)
})

routes.get('/:id', async (req, res) => {
  const data = await Product.findById(req.params.id)
  res.json(data)
})

export default routes
