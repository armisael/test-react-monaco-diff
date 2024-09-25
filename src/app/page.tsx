"use client"

import React, {useState} from "react";
import MonacoDiffEditor from "@/components/MonacoDiffEditor";

export default function Home() {
    const [showEditor, setShowEditor] = useState(false)

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {showEditor && (<>
                    <MonacoDiffEditor/>
                    <button className="p-2 border border-red-800 rounded bg-red-600"
                            onClick={() => setShowEditor(false)}>Hide editor
                    </button>
                </>)}
                {!showEditor && (
                    <button className="p-2 border border-gray-800 rounded bg-gray-600"
                            onClick={() => setShowEditor(true)}>Show editor</button>
                )}
            </main>
        </div>
    )
}
