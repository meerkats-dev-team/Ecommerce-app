import dotenv from 'dotenv'

if(process.env.NODE_ENV !== 'PRODUCTION') dotenv.config()

type Keys =  {
    PORT: number | unknown,
    HOST: string | undefined,
    MONGO_URI: string | undefined,
}

const { PORT, HOST, MONGO_URI } = process.env

const keys: Keys = {
    PORT,
    HOST,
    MONGO_URI
}

export default keys



