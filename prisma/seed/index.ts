import { PrismaClient } from "@prisma/client";
import { seedCategoriesDataDown, seedCategoriesDataUp } from "./category";
import { seedCountriesDataDown, seedCountriesDataUp } from "./country";

export type TSeederFunction = (dbConnection: PrismaClient) => Promise<void>;

export const seederUpFunctions: readonly TSeederFunction[] = [
  seedCategoriesDataUp,
  seedCountriesDataUp,
] as const;

export const seederDownFunctions: readonly TSeederFunction[] = [
  seedCategoriesDataDown,
  seedCountriesDataDown,
] as const;
