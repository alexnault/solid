import User from "../domain/entities/User";
import UserRepo from "./UserRepo";
import EntityId from "../shared/domain/EntityId";

export default class InMemoryUserRepo implements UserRepo {
  private users: User[] = [];

  async getUserById(userId: EntityId): Promise<User> {
    return this.users.find((user) => user.id === userId);
  }

  async getUsers(): Promise<User[]> {
    return this.users;
  }
}

// export default function InMemoryUserRepo() {
//   const users: User[] = [];

//   const inMemoryUserRepo: UserRepo = {
//     getUserById: async (userId: string) => {
//       return users.find((user) => user.id === userId);
//     },

//     getUsers: async () => {
//       return users;
//     },
//   };

//   return inMemoryUserRepo;
// }
