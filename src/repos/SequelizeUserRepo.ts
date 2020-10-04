import UserRepo from "./UserRepo";
import User from "../domain/entities/User";
import EntityId from "../shared/domain/EntityId";
import Email from "../domain/valueObjects/Email";
import Username from "../domain/valueObjects/Username";

export default class SequelizeUserRepo implements UserRepo {
  // constructor() {}
  async getUsers(): Promise<User[]> {
    // TODO implement sequelize findAll
    throw new Error("Not implemented");
  }

  async getUserById(userId: EntityId): Promise<User> {
    // TODO implement sequelize findByPk
    throw new Error("Not implemented");
  }

  async getUserByEmail(email: Email): Promise<User> {
    // TODO implement sequelize find
    throw new Error("Not implemented");
  }

  async getUserByUsername(username: Username): Promise<User> {
    // TODO implement sequelize find
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
