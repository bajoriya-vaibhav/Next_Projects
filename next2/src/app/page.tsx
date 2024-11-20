import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const sniplist = snippets.map((snippet) => (
    <div key={snippet.id} className="p-4 border-2 rounded-lg my-4 mx-4 flex justify-between">
      <div>
        <h3>#{snippet.title}</h3>
        <pre>{snippet.code}</pre>
      </div>
      <Link href={`/snippets/${snippet.id}`} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold m-6 py-2 px-4 border border-gray-400 rounded shadow">
        View
      </Link>
    </div>
  ));
  return (
    <div className="container ">
      <div className="text-4xl flex justify-between my-4 mx-8">
        <div className="font-bold py-4">Snippets</div>
        <Link href="/snippets/new" className="border-2 rounded-lg p-3">New</Link>
      </div>
      {sniplist}
    </div>
  );
}
