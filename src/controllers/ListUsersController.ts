import { Request, response, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";


class ListUsersController {
    async handle(req: Request, res: Response) {
        const listUsersService = new ListUsersService()

        const users = await listUsersService.execute()

        return response.json(users)
    }
}

export { ListUsersController }