import bcrypt from 'bcrypt';
import { generateJWT } from '../middleware';
import { prisma } from '@/lib/prisma';

// export async function POST(req) {
//     try {
//         const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//         const body = await req.json();
//         const { first_name, last_name, email_id, phone_number, password } = body;

//         // validate input
//         if (!first_name || !last_name || !email_id || !phone_number || !password) {
//             return Response.json({ error: 'All fileds are required' }, { status: 400 })
//         }

//         // validate mobile number
//         if (phone_number.length != 10) {
//             return Response.json({ error: 'Phone number must be 10 digit' }, { status: 400 })
//         }

//         // validate email id
//         if (!email_id.match(re)) {
//             return Response.json({ error: "Please include an '@' in the email address ' +email_id+ ' is missing '@'." }, { status: 400 })
//         }

//         // chaeck if email already exists
//         const existingUser = await prisma.user.findUnique({
//             where: { email_id }
//         });

//         if (existingUser) {
//             return Response.json({ error: 'Email already exists' }, { status: 400 });
//         }

//         //Hash passowrd
//         const hashedPassword = await bcrypt.hash(password, 10);

//         //Insert new user
//         const user = await prisma.user.create({
//             data: {
//                 first_name,
//                 last_name,
//                 email_id,
//                 phone_number,
//                 password: hashedPassword
//             }
//         });

//         const token = await generateJWT(user);

//         return Response.json({ message: 'User registrated successfully', user: { id: user.user_id, first_name: user.first_name, email_id: user.email_id, token } }, { status: 200 });

//     } catch (error) {
//         console.log('Registration error', error)
//         return Response.json({ error: "Internal server error", message: error }, { status: 500 });
//     }
// }
