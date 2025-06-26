import { getAllProject, getHRUsers, getUsers } from "./controller";

const resolvers = {
  Query: {
    users: async () => await getUsers(),
    hrUsers: async () => await getHRUsers(),
    allProjects: async () => await getAllProject(),
  },
};

export default resolvers;
