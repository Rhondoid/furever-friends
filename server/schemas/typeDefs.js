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
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addAnimal(animalType: String!, animalBreed: String!, animalName: String!, animalAge: Int!)
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeAnimal(animalType: String, animalBreed: String, animalName: String, animalAge: Int, animalId: ID!)
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
