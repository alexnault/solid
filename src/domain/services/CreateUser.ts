import UserRepo from "../../repos/UserRepo";
import User from "../entities/User";

export const CreateUser = (userRepo: UserRepo) => {
  return async (user: User) => {
    const emailTaken = await userRepo.getUserByEmail(user.email);
    if (emailTaken) {
      throw new Error("Email taken");
    }

    const usernameTaken = await userRepo.getUserByUsername(user.username);
    if (usernameTaken) {
      throw new Error("Username taken");
    }

    await userRepo.save(user);
  };
};
