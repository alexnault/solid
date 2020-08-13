import User from "../domain/entities/User";

export default interface UserRepo {
  // TODO optional User retuned?
  getUserById: (userId: string) => Promise<User>;
  getUsers: () => Promise<User[]>;
}
