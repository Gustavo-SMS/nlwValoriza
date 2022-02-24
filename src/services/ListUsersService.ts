import { instanceToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"


class ListUsersService {
    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositories)

        const users = await usersRepositories.find()

        return instanceToPlain(users)
    }
}

export { ListUsersService }