import dotenv from 'dotenv'

if(process.env.NODE_ENV !== 'PRODUCTION') dotenv.config()

type Keys =  {
    PORT: number | unknown,
    DOMAIN: string | undefined,
    MONGO_URI: string | undefined,
}

const { PORT, DOMAIN, MONGO_URI } = process.env

const keys: Keys = {
    PORT,
    DOMAIN,
    MONGO_URI
}

export default keys



