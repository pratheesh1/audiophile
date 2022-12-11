import { PrismaClient } from "@prisma/client";
import { seederDownFunctions, seederUpFunctions } from "./seed/";

async function seed() {
  try {
    const prismaClient = new PrismaClient();

    for (const seedFunction of seederDownFunctions) {
      await seedFunction(prismaClient);
      console.info(seedFunction.name + " executed successfully.");
    }

    for (const seederFunction of seederUpFunctions) {
      await seederFunction(prismaClient);
      console.info(seederFunction.name + " executed successfully.");
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();
