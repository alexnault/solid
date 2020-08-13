import User from "../domain/entities/User";
import UserRepo from "./UserRepo";

export default class InMemoryUserRepo implements UserRepo {
  private users: User[] = [];

  constructor() {
    // TODO set users?
  }

  async getUserById(userId: string): Promise<User> {
    return this.users.find((user) => user.id === userId);
  }

  async getUsers(): Promise<User[]> {
    return this.users;
  }
}
