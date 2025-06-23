import { getUsers } from "./controller";


const resolvers = {
  Query: {
    users: async () => await getUsers(),
  },
  Mutation: {
    updateUserRole: async (_, { id, role }) => {
      return await updateUserRole(id, role);
    },
  },
};

export default resolvers;
