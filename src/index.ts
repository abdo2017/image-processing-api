import express from 'express'
import api from './routes'

const app = express()
const port = 3000

app.use('/api', api)

app.listen(port, (): void => {
    console.log('http://localhost:3000')
})

app.get('/', (req: express.Request, res: express.Response): void => {
    res.send('this is the main route,please go to /api/images')
})

export default app
