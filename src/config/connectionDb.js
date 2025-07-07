import mongoose from "mongoose"

async function connectionDb() {
    mongoose.connect(process.env.CONNECTION_DATA_BASE)
    return mongoose.connection
}

export default connectionDb;