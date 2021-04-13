import mongoose from 'mongoose';

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_ATLAS_URI, {
            useCreateIndex: true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`MongoDb Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default ConnectDB;