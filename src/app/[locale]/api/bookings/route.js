import { prisma } from '@/lib/prisma';
import 'dotenv/config';
import { NextResponse } from 'next/server';
import { verifyJWT } from '../middleware';

export async function POST(req) {
    try {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        const body = await req.json();
        const { name,
            phone,
            email,
            type,
            date,
            message, } = body;

        // validate input
        if (!name || !phone || !email || !type) {
            return Response.json({ error: 'All fileds are required' }, { status: 400 })
        }

        // validate mobile number
        if ((phone.length != 10)) {
            return Response.json({ error: 'Phone number must be 10 digit' }, { status: 400 })
        }

        // validate email id
        if (!email.match(re)) {
            return Response.json({ error: "Please include an '@' in the email address ' +email_id+ ' is missing '@'." }, { status: 400 })
        }

        const user = await prisma.bookings.create({
            data: {
                name,
                phone,
                email,
                type,
                date,
                message,
            }
        });


        return Response.json({ message: 'Data saved successfully' }, { status: 200 });

    } catch (error) {
        console.log('Registration error', error)
        return Response.json({ error: "Internal server error", message: error }, { status: 500 });
    }
}


export async function GET(req) {
    const authHeader = req.headers.get('authorization');

    if (!authHeader?.startsWith('Bearer ')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyJWT(token);
    console.log('decoded', decoded)
    if (!decoded) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const users = await prisma.bookings.findMany()
    return NextResponse.json(users)
}