import { Request, Response, NextFunction } from "express";

import ExpressController from "../shared/infra/rest/ExpressController";
import UserRepo from "../repos/UserRepo";
import User from "../domain/entities/User";
import Email from "../domain/valueObjects/Email";
import Username from "../domain/valueObjects/Username";
import Password from "../domain/valueObjects/Password";

interface CreateUserDTO {
  firstName: string;
  email: string;
  username: string;
  password: string;
}
export default class UserController implements ExpressController {
  constructor(private userRepo: UserRepo) {}

  handleRequest = async (
    req: Request,
    res: Response
  ): Promise<Response<{ users: User[] }>> => {
    const users = await this.userRepo.getUsers();
    return res.status(200).json({ users });
  };

  // TODO move
  handleRequestCreate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    // TODO make it so we don't have to repeat the try catch in every controller
    try {
      const dto = req.body as CreateUserDTO;

      const user = new User({
        firstName: dto.firstName,
        email: new Email(dto.email),
        username: new Username(dto.username),
        password: new Password(dto.password),
      });
      // await this.userRepo.save(user);

      // TODO createUser(...);

      return res.status(200).json({});
    } catch (e) {
      return next(e);
    }
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
