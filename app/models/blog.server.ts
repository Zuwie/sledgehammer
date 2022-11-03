import type { Post, User } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Post } from "@prisma/client";

export function getPosts({
  id,
  authorId,
}: Pick<Post, "id"> & {
  authorId: User["id"];
}) {
  return prisma.post.findFirst({
    select: { id: true, body: true, title: true },
    where: { id, authorId },
  });
}

export function getPostsListItems({ authorId }: { authorId: User["id"] }) {
  return prisma.post.findMany({
    where: { authorId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createPost({
  body,
  title,
  authorId,
}: Pick<Post, "body" | "title"> & {
  authorId: User["id"];
}) {
  return prisma.post.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: authorId,
        },
      },
    },
  });
}

export function deleteBlog({
  id,
  authorId,
}: Pick<Post, "id"> & { authorId: User["id"] }) {
  return prisma.post.deleteMany({
    where: { id, authorId },
  });
}
