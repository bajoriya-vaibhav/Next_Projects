import {db} from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import DeleteAction from "@/actions/DeleteSnippet";

interface SnippetPageProps {
    params: {
        id: string;
    };
}
export default async function SnippetPage(props:SnippetPageProps) {
    const snippet = await db.snippet.findFirst({
        where : { id: parseInt(props.params.id) }
    });

    if(!snippet) { notFound(); }
    const DeleteSnippet = DeleteAction.bind(null, snippet.id);

    return (
        <div className="container">
            <div className="p-4 flex flex-col">
                <div className="flex justify-between">
                    <h3 className="font-bold text-2xl mb-2 border-2 rounded-lg p-4">{snippet.title}</h3>
                    <div className="inline-flex m-4">
                        <Link href={`/snippets/${props.params.id}/edit`} className="w-24 hover:bg-neutral-200 py-2 px-4 rounded-l">Edit</Link>
                        <form action={DeleteSnippet} className="w-24">
                        <button type="submit" className="w-24 hover:bg-neutral-200 py-2 px-4 rounded-r">Delete</button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-between bg-neutral-200 p-4 border-2 rounded-lg">
                    <pre>{snippet.code}</pre>
                    <Link href="/" className="border-2 bg-neutral-300 hover:bg-neutral-400 self-center mx-10 px-4 py-2 rounded-lg">Back</Link>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams(){
    const snippets = await db.snippet.findMany();
    return snippets.map((snippet) => {
        return { id: snippet.id.toString() };
    });
}