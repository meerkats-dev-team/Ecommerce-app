import express, { Application } from 'express'
import cors from 'cors'
import dbConnection from './config/dbConnetion'
import keys from './config/keys'


const { PORT, HOST, MONGO_URI } = keys

const app: Application = express()
const port: number = Number(PORT) || 4500

app.use(cors({
    origin: [HOST as string],
    credentials: true as boolean
}))
app.use(express.json())
app.use(express.urlencoded({extended: true, limit: '10mb'})) // ?!!

const start = async () => {
    try {
        await dbConnection(MONGO_URI as string)
        app.listen(port, (): void => console.info(`Server is running on : http://localhost:${port}`))
    } catch {
        console.error('Something was wrong!')
    }
    
}

start()


export default app