import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Book {
		id: ID
		name: String
		genre: String
		author: Author
	}

	type Author {
		id: ID!
		name: String
		age: Int
		books: [Book]
	}

	# ROOT TYPE
	type Query {
		books: [Book]
		book(id: ID!): Book
		authors: [Author]
		author(id: ID!): Author
	}

	type Mutation {
		createAuthor(name: String, age: Int): Author
		createBook(name: String, genre: String, authorId: ID!): Book
		updateAuthor(id: ID!, name: String, age: Int): Author
		deleteAuthor(id: ID!): Author
	}
`

export default typeDefs