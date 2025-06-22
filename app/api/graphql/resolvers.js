import { getUsers } from "./controller";


const resolvers = {
  Query: {

    users: async () => await getUsers(),
  },

};

export default resolvers;
