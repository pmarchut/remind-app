"use server";

import { prisma } from "@/lib/prisma";
import { createTaskSchemaType } from "@/schema/createTask";
import { stackServerApp } from "@/stack";

export async function createTask(data: createTaskSchemaType) {
    const user = await stackServerApp.getUser();
    
    if (!user) {
        throw new Error("user not found");
    }

    const { content, expiresAt, collectionId } = data

    return await prisma.task.create({
        data: {
            userId: user.id,
            content,
            expiresAt,
            Collection: {
                connect: {
                    id: collectionId,
                }
            }
        }
    })
}

export async function setTaskToDone(id: number) {
    const user = await stackServerApp.getUser();
    
    if (!user) {
        throw new Error("user not found");
    }

    return await prisma.task.update({
        where: {
            id,
            userId: user.id,
        },
        data: {
            done: true,
        }
    })
}