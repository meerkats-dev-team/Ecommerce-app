import mongoose from 'mongoose'
mongoose.set('strictQuery', false)

const dbConnection = async (URI: string) => {
    try {
       await mongoose.connect(URI)
       console.info(`${mongoose.connection.host}`)
    } catch {
        console.error('Connection error')
    }
    
}

export default dbConnection