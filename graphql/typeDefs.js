import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    getQuote: String!
  }
`;

export { typeDefs };
