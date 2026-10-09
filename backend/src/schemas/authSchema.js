import { z } from "zod";
// Build validation with Zod
// Validation checks incoming data before it reaches the database. For example, a customer must not submit a negative delivery charge, an invalid email or a food quantity of zero.

/** NOTE: .email() crossed bcz in zod v4 it is deprecated */
// // register
// const registerSchema = z.object({
//   username: z.string().trim().min(3).max(30),
//   email: z.string().trim().email(),
//   password: z.string().min(8).max(72),
// });
// // login 
// const loginSchema = z.object({
//   email: z.string().trim().email(),
//   password: z.string().min(1),
// });

/** Note:
 * Updated version for Zod v4 
 */

const registerSchema = z.object({
  username: z.string().trim().min(3).max(30),
  // username: z.string().trim(), // ommiting min max limit username, will impletemnt in fronend
  email: z.string().trim().toLowerCase().pipe(z.email()), // pipe for Zod version 4
  password: z.string().min(8).max(72),
  // password: z.string().min(8), // omitting max() bcz of hashing
});

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.email()),
  password: z.string().min(1), // ??????? why min(1) ???? to make sure it'not empty, and if limit ever increased to min 10 characters frpm 8 then older user's password wont break, is it logical????????
});

export { registerSchema, loginSchema }