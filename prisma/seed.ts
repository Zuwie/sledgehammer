import { PrismaClient, User } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

/**
 * It returns a fake user object with a random email, password, userName, and avatar
 * @returns An object with a data property that contains an object with email, password, userName, and avatar properties.
 */
function getFakeUser() {
  return {
    data: {
      userName: `${faker.internet.userName("Fake")}#${faker.random.numeric(4)}`,
      avatar: faker.internet.avatar(),
    },
  };
}

async function seed() {
  // cleanup the existing database
  const userName = "Aquila";
  await prisma.user.delete({ where: { userName } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const userArray: User[] = [];

  const user1 = await prisma.user.create({
    data: {
      userName: "Aquila",
      avatar: faker.internet.avatar(),
    },
  });
  userArray.push(user1);

  /* It's creating 15 fake users and pushing them into an array. */
  for (let i = 0; i < 15; i++) {
    const fakeUser = await prisma.user.create(getFakeUser());
    await fakeUser;
    userArray.push(await fakeUser);
  }

  await prisma.post.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      authorId: user1.id,
    },
  });

  await prisma.post.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      authorId: user1.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
