import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({path: ".env"});
const uri = process.env.ATLASURI || "mongodb+srv://ryaansv:lycooperapi1001@cluster0.2teieej.mongodb.net/";

const client = new MongoClient(uri);

export async function connect(): Promise<MongoClient> {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    } catch (e) {
        console.error(e);
        throw new Error('Unable to Connect to MongoDB');
    }
}

export default connect;