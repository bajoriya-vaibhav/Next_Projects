"use server"

import { db } from "@/db";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

export default async function DeleteSnippet(id:number) {
    await db.snippet.delete({
        where : { id }
    });
    revalidatePath("/");
    redirect("/");
}