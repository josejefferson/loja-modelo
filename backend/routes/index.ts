import { Router } from 'express'
const routes = Router()
import productRoutes from './products'

routes.use('/products', productRoutes)

export default routes
