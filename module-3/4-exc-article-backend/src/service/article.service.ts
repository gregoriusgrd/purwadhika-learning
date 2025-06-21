import { PrismaClient } from "@prisma/client";
import { error } from "console";

// const prisma = new PrismaClient();

const articleService = {
  db: new PrismaClient(),

  // ini create new article
  async create(title: string, content: string) {
    return await this.db.article.create({
      data: {
        title,
        content,
      },
    });
  },

  // ini get article list
  async findAll() {
    return await this.db.article.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  // async findById(id: number) {
  //   return await this.db.article.findUnique({
  //     where: { id },
  //   });
  // },

  async update(id: number, title: string, content: string) {
    const existing = await this.db.article.findUnique({ where: { id } });

    if (!existing) {
      throw new Error("Article not found");
    }

    return await this.db.article.update({
      where: { id },
      data: { title, content },
    });
  },
};

export default articleService;
