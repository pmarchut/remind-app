"use server";
import { prisma } from "@/lib/prisma";
import { createCollectionSchemaType } from "@/schema/createCollection";
import { currentUser } from "@clerk/nextjs/server";

export async function createCollection(form: createCollectionSchemaType) {
    const user = await currentUser();

    if (!user) {
        throw new Error("user not found");
    }

    return await prisma.collection.create({
        data: {
            userId: user.id,
            name: form.name,
            color: form.color,
        }
    })
}

export async function deleteCollection(id: number) {
    const user = await currentUser();

    if (!user) {
        throw new Error("user not found");
    }

    return await prisma.collection.delete({
        where: {
            id,
            userId: user.id,
        }
    })
}