"use client";

import notFound from "@/app/not-found";
import Editor from "@monaco-editor/react";
import { Snippet } from "@prisma/client";
import { useState } from "react";
import EditAction from "@/actions/editAction";

export default function EditForm(snippet:Snippet) {
    const [code, setCode] = useState(snippet.code); 
    const handleChange = (value:string = '') => {
        setCode(value);
    };
    if (!snippet) { notFound(); }
    const edit = EditAction.bind(null, snippet.id, code)
    return (
        <div>
            <Editor
                height="60vh"
                defaultLanguage="javascript"
                theme="vs-dark"
                defaultValue={snippet.code}
                onChange={handleChange}
            />
            <form action={edit}>
                <button type="submit" className="p-4 border-2 rounded-lg hover:bg-neutral-200">Save</button>    
            </form> 
        </div>
    );
}