import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { register } from "module";

// const db = new PrismaClient();

const userService = {
  db: new PrismaClient(),

  async findByEmail(email: string) {
    return await this.db.user.findUnique({
      where: { email },
    });
  },

  async register(email: string, password: string) {
    try {
      const existingUser = await this.findByEmail(email);

      if (existingUser) {
        throw new Error("Email sudah terdaftar");
      }

      await this.db.user.create({
        data: {
          email,
          password,
        },
      });
    } catch (err) {
      throw err;
    }
  },

  async login(email: string, password: string) {
    try {
      const existingUser = await this.findByEmail(email);
      if (!existingUser || existingUser.password !== password) {
        throw new Error("Email atau password salah");
      }

      return existingUser;
    } catch (err) {
      throw err;
    }
  },
};

export default userService;
