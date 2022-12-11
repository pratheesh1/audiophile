import { TSeederFunction } from "./index";
import type { Category } from "@prisma/client";

type TCategory = Pick<Category, "name">;
const categories: TCategory[] = [
  { name: "Headphones" },
  { name: "Earphones" },
  { name: "Boomboxes" },
  { name: "Music Players" },
  { name: "Speakers" },
  { name: "Microphones" },
  { name: "Cables" },
  { name: "Accessories" },
  { name: "Amplifiers" },
  { name: "Mixers" },
  { name: "Other" },
];

export const seedCategoriesDataUp: TSeederFunction = async (dbConnection) => {
  const transaction = await dbConnection.$transaction([
    ...categories.map((category) =>
      dbConnection.category.create({
        data: {
          name: category.name,
        },
      })
    ),
  ]);
};

export const seedCategoriesDataDown: TSeederFunction = async (dbConnection) => {
  const transaction = await dbConnection.$transaction([
    dbConnection.category.deleteMany(),
  ]);
};
