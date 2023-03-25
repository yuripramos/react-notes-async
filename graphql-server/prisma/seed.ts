import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Delete all `User` and `Message` records
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.countries.deleteMany({});
  await prisma.post.deleteMany({});

  // (Re-)Create dummy `User` and `Message` records
  await prisma.user.createMany({
    data: [
      {
        name: 'Kyle',
        email: 'oneemail@yahoo.com',
      },
      {
        name: 'Mao',
        email: 'MaoTseTung@yahoo.com',
      },
      {
        name: 'Jeremy',
        email: 'jenjen@gmail.com',
      },
    ],
  });

  await prisma.user.create({
    data: {
      name: 'Mastrucia',
      email: 'nonewmail@gmail.com',
      messages: {
        create: [
          {
            body: 'message number one',
          },
          {
            body: 'message number two',
          },
          {
            body: 'message number three',
          },
        ],
      },
      countries: {
        create: [
          {
            list: 'Argentina, Brazil, Japan',
          },
        ],
      },
    },
  });

  await prisma.user.create({
    data: {
      name: 'Jeremy',
      email: 'Jeremy@gmail.com',
      messages: {
        create: [
          {
            body: 'new new message number one',
          },
          {
            body: 'new new message number two',
          },
          {
            body: 'new new message number three',
          },
        ],
      },
      countries: {
        create: [
          {
            list: 'Australia, Singapore, Israel',
          },
        ],
      },
    },
  });
}

main();
