import { sql } from "../config/db.js";

export const createMessage = async ({ name, email, subject, message }) => {
  const rows = await sql`
    INSERT INTO messages (name, email, subject, message)
    VALUES (${name}, ${email}, ${subject}, ${message})
    RETURNING *;
  `;
  return rows[0];
};
