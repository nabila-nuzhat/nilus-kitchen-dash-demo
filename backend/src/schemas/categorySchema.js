import z from "zod";

const createCategorySchema = z.object({
  categoryId: z.string().trim().min(1).max(40),
  name: z.string().trim().min(2).max(80),
  description: z.string().trim().max(300).optional(),
});

const updateCategorySchema = z.object({
  name: z.string().trim().min(2).max(80).optional(),
  description: z.string().trim().max(300).optional(),
  isActive: z.boolean().optional(),
}).refine(
  (data) => Object.keys(data).length > 0,
  { message: "Provide at least one field to update" }
);

export {createCategorySchema, updateCategorySchema}