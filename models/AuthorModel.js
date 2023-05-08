import { Schema, model } from "mongoose";


const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    }
}, {timestamps: true})

const AuthorModel = model('Author', AuthorSchema)

export default AuthorModel