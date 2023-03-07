import express, { Application } from 'express'
import errorHandler from './middlewares/errorHandler'
import cors from 'cors'
import dbConnection from './config/dbConnetion'
import keys from './config/keys'
import router from './routes'


const { PORT, DOMAIN, MONGO_URI } = keys

const app: Application = express()
const port: number = Number(PORT) || 4500

app.use(cors({
    origin: [DOMAIN as string],
    credentials: true as boolean
}))
app.use(express.json())
app.use(express.urlencoded({extended: true, limit: '10mb'})) // ?!!

app.use("/api/v1", router)

app.use(errorHandler)

const start = async ():Promise<void> => {
    try {
        await dbConnection(MONGO_URI as string)
        app.listen(port, (): void => console.info(`Server is running on : http://localhost:${port}`))
    } catch {
        console.error('Something was wrong!')
        process.exit(1)
    }
    
}

start()


export default app