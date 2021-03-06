import Repo from "./Repo";
import Email from "../domain/valueObjects/Email";
import Username from "../domain/valueObjects/Username";
import User from "../domain/entities/User";
import EntityId from "../shared/domain/EntityId";

export default interface UserRepo extends Repo<User> {
  // TODO optional User retuned?
  getUserById: (userId: EntityId) => Promise<User>;
  getUserByEmail: (email: Email) => Promise<User>;
  getUserByUsername: (username: Username) => Promise<User>;
  getUsers: () => Promise<User[]>;
}

// TODO mapper, dto
