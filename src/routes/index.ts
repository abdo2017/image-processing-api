import { Router } from 'express'
import images from './api/images'

const routes = Router()

routes.use('/images/', images)

routes.get('/', (req, res) => {
    res.send('this is the default api route,please to to /api/images')
})

export default routes
