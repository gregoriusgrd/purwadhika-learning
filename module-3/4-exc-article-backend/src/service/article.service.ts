import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

const articleService = {
  db: new PrismaClient(),

  async create(title: string, content: string) {
    return await this.db.article.create({
      data: {
        title,
        content,
      },
    });
  },

  async findAll() {
    return await this.db.article.findMany({
      orderBy: { createdAt: "desc" },
    });
  },
};

export default articleService;
