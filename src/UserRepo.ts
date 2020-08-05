import User from "./User";

export default interface UserRepo {
  // TODO optional User retuned?
  getUserById: (userId: string) => Promise<User>;
  getUsers: () => Promise<User[]>;
}
