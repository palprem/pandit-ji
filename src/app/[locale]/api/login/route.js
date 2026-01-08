import bcrypt from 'bcrypt';
import { generateJWT } from '../middleware';
import { prisma } from '@/lib/prisma';

export async function POST(req) {
    try {
        const body = await req.json();
        const { identifier, password } = body;

        // 1 Validate
        if (!identifier || !password) {
            return Response.json({ error: "All fields are required" }, { status: 400 });
        }

        // 2 Check valid user
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email_id: identifier },
                    { phone_number: identifier },
                ]
            }
        });

        if (!user) {
            return Response.json({ error: "User not found" }, { status: 400 })
        }

        // 3 compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return Response.json({ error: 'Invalid credentials' }, { status: 400 });
        }

        // 4 generate token
        const token = await generateJWT(user);

        return Response.json({ message: "Login successfully", user: { id: user.user_id, first_name: user.first_name, last_name: user.last_name, email_id: user.email_id, role: user.role, token } }, { status: 200 });

    } catch (error) {
        console.error(error);
        return Response.json({ error: "Internal Server Error", message: error }, { status: 500 });
    }
}