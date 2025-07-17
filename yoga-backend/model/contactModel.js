import {db} from "../config/db.js";

export const saveContact = async ({ name, email, phone, message }) => {
  const query = `
    INSERT INTO contacts (name, email, phone, message)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await db.execute(query, [name, email, phone, message]);
  return result;
};
