import { Schema, model } from 'mongoose';

const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
    },
    authorId: {
        type: String
    }
}, {timestamps: true});

const BookModel = model('Book', BookSchema)

export default BookModel;