import prisma from "../prisma";

export default class UserService {
    public async getUsers() {
        const users = await prisma.user.findMany()

        return users
    }
}