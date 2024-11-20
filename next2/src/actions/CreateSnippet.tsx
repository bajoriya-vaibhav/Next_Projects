"use server";
import { db } from "@/db";
import { redirect } from "next/navigation"; 
import { revalidatePath } from "next/cache";
export default async function CreateSnippet(formState:{msg:String},formData: FormData) {

    const title = formData.get("title");
    const code = formData.get("code");

    if(typeof title !== "string" || title.length < 3) {
        return {msg: "Title must be at least 3 characters long"};
        }
    if(typeof code !== "string" || code.length < 10) {
        return {msg: "Code must be at least 10 characters long"};
    }

    const snippet = await db.snippet.create({
        data: {
            title,
            code,
        },
    });
    revalidatePath("/");
    redirect("/");
}