import gql from "graphql-tag";


export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    email: String!
    department: String
    role: String
  }
  type Query {
    users: [User]!
  }
`;
