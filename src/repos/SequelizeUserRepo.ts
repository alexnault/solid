import UserRepo from "./UserRepo";
import User from "../domain/entities/User";
import EntityId from "../shared/domain/EntityId";

export default class SequelizeUserRepo implements UserRepo {
  // constructor() {}

  async getUserById(userId: EntityId): Promise<User> {
    // TODO implement sequelize findByPk
    throw new Error("Not implemented");
  }

  async getUsers(): Promise<User[]> {
    // TODO implement sequelize findAll
    throw new Error("Not implemented");
  }

  async exists(userId: EntityId): Promise<boolean> {
    // TODO implement sequelize save
    throw new Error("Not implemented");
  }

  async save(user: User): Promise<void> {
    // TODO implement sequelize save
    throw new Error("Not implemented");
  }
}
