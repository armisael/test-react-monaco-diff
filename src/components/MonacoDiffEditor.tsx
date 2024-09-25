"use client"

import React from "react";
import {loader, DiffEditor} from "@monaco-editor/react";

// loader.config({paths: {vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.50.0/min/vs'}});  // OK
loader.config({paths: {vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.51.0/min/vs'}});  // ERROR
// loader.config({paths: {vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs'}});  // ERROR


export default function MonacoDiffEditor() {
    return (
        <DiffEditor
            width='40vh'
            height='30vh'
            language='json'
            original={JSON.stringify({foo: "bar"}, null, 2)}
            modified={JSON.stringify({foo: "baz"}, null, 2)}
        />
    )
}
