import gql from "graphql-tag";
import { all } from "axios";

export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    email: String!
    department: String
    role: String
  }
  type allProject {
    id: ID!
    title: String!
    status: String
    department: String
    hrEmail: String
    hrName: String
  }
  type Query {
    users: [User]!
    hrUsers: [User]!
    allProjects: [allProject]!
  }
`;
