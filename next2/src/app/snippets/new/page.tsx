"use client"
import { useFormState } from "react-dom";
import Link from "next/link";
import CreateSnippet from "@/actions/CreateSnippet";

export default function Snippets() {
    const [formState,action] = useFormState(CreateSnippet,{msg:""});

    return (
        <form action={action}>
            <div className="m-4 flex justify-between">
                <h3 className="font-bold text-3xl">Create a snippet</h3>
                <Link href="/" className="border-2 rounded-lg py-3 px-5 mx-12">Back</Link>  
            </div>
            <div className="flex flex-col gap-6 justify-center align-center mx-60 my-20">
                <div className="flex gap-2 ">
                    <div className="text-xl p-2 w-20">Title</div>
                    <input
                        name="title"
                        className="p-2 border-2 rounded-lg flex-1"
                        placeholder="Title of the snippet"
                        id="title"
                    />
                </div>
                <div className="flex gap-2">
                    <div className="text-xl p-2 w-20">Code</div>
                    <textarea
                        name="code"
                        className="p-2 border-2 rounded-lg flex-1"
                        id = "code"
                    />
                </div>
                {formState.msg && <div className="text-red-500">{formState.msg}</div>}
                <button className="m-auto w-1/2 h-12 text-xl overflow-hidden bg-blue-500 hover:bg-blue-700 text-white font-semibold text-center rounded-2xl">
                    Create
                </button>
            </div>
        </form>
    );
}