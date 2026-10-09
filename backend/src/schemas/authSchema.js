import { z } from "zod";

/** NOTE: email() crosses bcz in zod v4 it is deprecated */
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
  email: z.string().trim().toLowerCase().pipe(z.email()), // pipe for Zod version 4
  password: z.string().min(8).max(72),
});

const loginSchema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.email()),
  password: z.string().min(1),
});
