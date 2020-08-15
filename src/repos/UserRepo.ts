import User from "../domain/entities/User";
import EntityId from "../shared/domain/EntityId";

export default interface UserRepo {
  // TODO optional User retuned?
  getUserById: (userId: EntityId) => Promise<User>;
  getUsers: () => Promise<User[]>;
}
