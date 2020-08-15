import { Request, Response } from "express";

export default interface ExpressController {
  handleRequest: (req: Request, res: Response) => Promise<Response<any>>;
}
