import { Request, response, Response } from "express";
import { MessageService } from "../services/MessageService";

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { message } = req.body;
    const { user_id } = req;

    const service = new MessageService();

    const result = await service.execute(message, user_id);

    return res.json(result);
  }
}

export { CreateMessageController };
