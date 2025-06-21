import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { register } from "module";

const prisma = new PrismaClient();

const userService = {
  async findByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  },

  async register(email: string, password: string) {
    const existingUser = await this.findByEmail(email);

    if (existingUser) {
      throw new Error("Email sudah terdaftar");
    }

    return await prisma.user.create({
      data: {
        email,
        password,
      },
    });
  },

  async login(email: string, password: string) {
    const user = await this.findByEmail(email);
    if(!user || user.password !== password) {
        throw new Error("Email atau password salah")
    }

    return user
  }
};

export default userService;
