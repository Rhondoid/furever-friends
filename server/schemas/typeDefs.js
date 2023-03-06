const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  // type Animal {
  //   _id: ID
  //   animalType: String
  //   animalBreed: String
  //   animalName: String
  //   animalAge: Int
  //   createdAt: String
  //   comments: [Comment]
  // }

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
    user(username: String!): User
    animals: [Animals]
    animal: (animalType: String, animalBreed: String, animalName: String, animalAge: Int, id: ID)
    comments(username: String): [Comment]
    comments(commentId: ID!): Comment
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAnimal(animalType: String!, animalBreed: String!, animalName: String!, animalAge: Int!)
    addComment(CommentText: String!): Comment
    addComment(commentId: ID!, commentText: String!): Comment
    removeAnimal(animalType: String, animalBreed: String, animalName: String, animalAge: Int, animalId: ID!)
    removeComment(commentId: ID!): Comments
    removeComment(thoughtId: ID!, commentId: ID!): Comment
  }
`;

module.exports = typeDefs;
