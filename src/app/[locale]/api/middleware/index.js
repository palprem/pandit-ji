import jwt from "jsonwebtoken";

export async function generateJWT(user) {

  const token = jwt.sign(
    { id: user.id, email_id: user.email_id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" } // token valid for 1 hour
  );

  return token;
}