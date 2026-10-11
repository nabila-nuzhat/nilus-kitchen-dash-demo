import { z } from "zod";
/** updated after custom id for receipt option added*/ 
// create food item 
const createFoodSchema = z.object({
  name: z.string().trim().min(2).max(100),

  categoryId: z.string().regex(/^[a-f\d]{24}$/i), 

  price: z.number().min(0).max(1000000), // finite(). ommitted as its deprecated, zod 4 by default regects infinity value

  description: z.string().trim().max(500).optional(), 

  isAvailable: z.boolean().optional(),
});

// update Food -------------------------
const updateFoodSchema = z.object({
  name: z.string().trim().min(2).max(100).optional(),

  categoryId: z.string().regex(/^[a-f\d]{24}$/i).optional(),

  price: z.number().min(0).max(1000000).optional(),

  description: z.string().trim().max(500).optional(),

  isAvailable: z.boolean().optional(),
}).refine(
  (data) => Object.keys(data).length > 0,
  { message: "Provide at least one field to update" }
); // refine() by zod so that empty fields doesnt pass validation


export {createFoodSchema, updateFoodSchema}