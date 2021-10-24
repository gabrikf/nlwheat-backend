import { Router } from "express";
import { AuthenticateUSerController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLastThreeMessagesController } from "./controllers/GetLastThreeMessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuth } from "./middleware/ensureAuth";
import { GetLastThreeMessagesService } from "./services/GetLastThreeMessagesService";

const router = Router();

router.post("/authenticate", new AuthenticateUSerController().handle);

router.post("/messages", ensureAuth, new CreateMessageController().handle);

router.get("/messages/last3", new GetLastThreeMessagesController().handle);

router.get("/profile", ensureAuth, new ProfileUserController().handle);

export { router };
