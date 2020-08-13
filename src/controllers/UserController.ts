import { Request, Response } from "express";

import UserRepo from "../repos/UserRepo";
import User from "../domain/entities/User";

export default class UserController {
  constructor(private userRepo: UserRepo) {}

  async handleGetUsers(
    req: Request,
    res: Response
  ): Promise<Response<{ users: User[] }>> {
    const users = this.userRepo.getUsers();
    return res.status(200).json({ users });
  }
}
