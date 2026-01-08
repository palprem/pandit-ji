import jwt from "jsonwebtoken";
import 'dotenv/config';

export async function generateJWT(user) {

  const token = jwt.sign(
    { id: user.id, email_id: user.email_id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" } // token valid for 1 hour
  );

  return token;
}

export function verifyJWT(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded; // { id, email_id, role, iat, exp }
  } catch (error) {
    return null; // invalid or expired token
  }
}