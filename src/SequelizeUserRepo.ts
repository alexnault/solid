import User from "./User";
import UserRepo from "./UserRepo";

export default class SequelizeUserRepo implements UserRepo {
  // constructor() {}

  async getUserById(userId: string): Promise<User> {
    // TODO implement sequelize findByPk
    throw new Error("Not implemented");
  }

  async getUsers(): Promise<User[]> {
    // TODO implement sequelize findAll
    throw new Error("Not implemented");
  }
}
