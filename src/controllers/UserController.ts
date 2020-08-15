import { Request, Response } from "express";

import ExpressController from "../shared/infra/http/ExpressController";
import UserRepo from "../repos/UserRepo";
import User from "../domain/entities/User";

export default class UserController implements ExpressController {
  constructor(private userRepo: UserRepo) {}

  handleRequest = async (
    req: Request,
    res: Response
  ): Promise<Response<{ users: User[] }>> => {
    const users = await this.userRepo.getUsers();
    return res.status(200).json({ users });
  };
}

// export default function (userRepo: UserRepo) {
//   return {
//     // Promise<Response<{ users: User[] }>>
//     handleGetUsers: async (req: Request, res: Response) => {
//       const users = await userRepo.getUsers();
//       return res.status(200).json({ users });
//     },
//   };
// }
