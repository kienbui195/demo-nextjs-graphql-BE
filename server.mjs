import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema/index.mjs';
import resolvers from './resolvers/index.js';
import cors from 'cors';
import mongoose from 'mongoose';
import mongoDataMethods from './data/db.js'
import * as dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 4000
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@demo-graphql.jdhd8mc.mongodb.net`



const connectDB = async () => {
    await mongoose.connect(URI)
        .then(() => console.log('DB connected successfully!'))
        .catch(err => console.error(err))
}

connectDB()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods })
})

const app = express();
await server.start()
server.applyMiddleware({ app })

app.use(
    cors()
)

app.listen({ port: PORT }, () => {
    console.log('Server listening on port' + PORT)
})
