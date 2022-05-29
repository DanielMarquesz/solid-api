import { Router, Request, Response } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router()

router.post('/users', (req: Request, res: Response) => {
    return createUserController.handle(req, res)
})

export { router }