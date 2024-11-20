"use server";
import {db} from '@/db';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
export default async function EditAction(id:number, code:string) {
    await db.snippet.update({
        where : { id },
        data : { code }
    });
    revalidatePath(`/snippets/${id}`);
    redirect(`/snippets/${id}`);
}