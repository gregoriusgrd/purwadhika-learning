import { PrismaClient } from "@prisma/client";
import { register } from "module";

const userService = {
  db: new PrismaClient(),

  async findAll(page: number, pageSize: number) {
    return await this.db.$transaction(async (tx) => {
      try {
        const count = await tx.user.count();
        const result = await tx.user.findMany({
          skip: (page - 1) * pageSize,
          take: pageSize,
        });

        return {
          user: result,
          totalData: count,
        };

        // await tx.user.update({
        //   data: {
        //     email: "asd123",
        //   },
        //   where: {
        //     id: 1,
        //   },
        // });

        // throw new Error("gagal")
      } catch (err) {
        throw err;
      }
    });
  },

  async findByEmail(email: string) {
    return await this.db.user.findUnique({
      where: {
        email,
      },
    });
  },

  async register(email: string, password: string) {
    try {
      const checkUser = await this.findByEmail(email);

      if (checkUser) throw new Error("Email sudah terdaftar");

      await this.db.user.create({
        data: {
          email,
          password,
          avatar: "",
        },
      });

      // update table saldo

      // update table pembayaran
    } catch (err) {
      throw err;
    }
  },

  async login(email: string, password: string) {
    try {
      const checkUser = await this.findByEmail(email);
      if (!checkUser) throw new Error("Email atau password salah");

      if (checkUser.password !== password)
        throw new Error("Email atau password salah");

      return checkUser;
    } catch (err) {
      throw err;
    }
  },

  async update(id: number, email: string, password: string, avatar: string) {
    try {
      await this.db.user.update({
        data: {
          email,
          password,
          avatar,
        },
        where: {
          id,
        },
      });
    } catch (err) {
      throw err;
    }
  },
};

export default userService;
