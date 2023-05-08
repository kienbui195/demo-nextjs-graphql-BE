import BookModel from '../models/BookModel.js'
import AuthorModel from '../models/AuthorModel.js'

const mongoDataMethods = {
	getAllBooks: async (condition = null) =>
		condition === null ? await BookModel.find().sort({ createdAt: 'asc'}) : await BookModel.find(condition).sort({createdAt: 'asc'}),
	getBookById: async id => await BookModel.findById(id),
	getAllAuthors: async () => await AuthorModel.find(),
	getAuthorById: async id => await AuthorModel.findById(id),
	createAuthor: async args => {
		const newAuthor = new AuthorModel(args)
		return await newAuthor.save()
	},
	createBook: async args => {
		const newBook = new BookModel(args)
		return await newBook.save()
	},
	updateAuthor: async args => {
		return await AuthorModel.findByIdAndUpdate({ _id: args.id }, { name: args.name, age: args.age })
	},
	deleteAuthor: async args => { 
		return await AuthorModel.findByIdAndDelete({ _id: args.id })
	}
}
export default mongoDataMethods