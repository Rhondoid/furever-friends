const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Animal {
    _id: ID
    animalType: String
    animalBreed: String
    animalName: String
    animalAge: Int
    createdAt: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
   user:User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAnimal(animalType: String!, animalBreed: String!, animalName: String!, animalAge: Int!):Animal
    addComment(CommentText: String!): Comment
    
    removeAnimal(animalType: String, animalBreed: String, animalName: String, animalAge: Int, animalId: ID!):Animal
    removeComment(commentId: ID!): Comment
   
  }
`;

module.exports = typeDefs;

// parts removed from Query's by Austin

// user(username: String!): User
// animals: [Animal]
// animal: (animalType: String, animalBreed: String, animalName: String, animalAge: Int, id: ID):Animal
// comments(username: String): [Comment]
// comments(commentId: ID!): Comment

// parts removed from mutations by Austin
 // removeComment(thoughtId: ID!, commentId: ID!): Comment
//  addComment(commentId: ID!, commentText: String!): Comment