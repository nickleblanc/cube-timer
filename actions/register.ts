'use server';

import { z } from 'zod';
import bcrypt from 'bcryptjs';
import prisma from '@/app/lib/db';
import { getUserByEmail } from '@/data/user'
import { RegisterSchema } from '@/schemas';

export async function register(values: z.infer<typeof RegisterSchema>) {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already in use!" };
    }

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    return { success: "Account created!" };
}