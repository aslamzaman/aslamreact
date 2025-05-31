import { titleCase, titleCamelCase } from "@/lib/utils"






// Page functions -----------------------------------
export const importToPageHeader = (tbl) => {
    return `"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/${tbl}/Add";
import Edit from "@/components/${tbl}/Edit";
import Delete from "@/components/${tbl}/Delete";`
}

export const pageStateVariables = (tbl) => {
    return `    const [${tbl}s, set${titleCamelCase(tbl)}s] = useState([]);
    const [waitMsg, setWaitMsg] = useState("");
    const [msg, setMsg] = useState("Data ready");`
}

export const th = (fld) => {
    const result = fld.map(f => `                                <th className="text-center border-b border-gray-200 px-4 py-1">${titleCamelCase(f)}</th>`);
    const sliceLast = result.slice(0, result.length);
    return sliceLast.join("\n");
}

export const td = (tbl, fld) => {
    const result = fld.map(f => `                                        <td className="text-center py-1 px-4">{${tbl}.${f}}</td>`);
    const sliceLast = result.slice(0, result.length);
    return sliceLast.join("\n");
}

// Add Component functions -----------------------------------
export const addPageStateVariables = (fld) => {
    const result = fld.map(f => `    const [${f}, set${titleCamelCase(f)}] = useState('');`);
    const sliceLast = result.slice(0, result.length);
    return sliceLast.join("\n");
}

export const addPageResetVariables = (fld) => {
    const result = fld.map(f => `       set${titleCamelCase(f)}('');`);
    const sliceLast = result.slice(0, result.length);
    return sliceLast.join("\n");
}

export const addPageCreateObject = (fld) => {
    const result = fld.map((f, i) => i !== fld.length - 1 ? `              ${f}: ${f},` : `              ${f}: ${f}`);
    const sliceLast = result.slice(0, result.length);
    return sliceLast.join("\n");
}

export const addPageInputText = (fld) => {
    const result = fld.map(f => `                                            <TextEn Title="${titleCamelCase(f)}" Id="${f}" Change={e => set${titleCamelCase(f)}(e.target.value)} Value={${f}} Chr={50} />`);
    const sliceLast = result.slice(0, result.length);
    return sliceLast.join("\n");
}



// Edit Component functions -----------------------------------
export const editPageStateVariables = (fld) => {
    const result = fld.map(f => `    const [${f}, set${titleCamelCase(f)}] = useState('');`);
    return result.join("\n");
}

export const editPageDestructureData = (fld) => {
    const result = fld.map(f => f);
    const joinString = result.join(", ");
    return `                const {${joinString}} = data;`;
}

//setName(name);
export const editPageSetVariables = (fld) => {
    const result = fld.map(f => `               set${titleCamelCase(f)}(${f});`);
    return result.join("\n");
}

export const editPageCreateObject = (fld) => {
    const result = fld.map((f, i) => i !== fld.length - 1 ? `              ${f}: ${f},` : `              ${f}: ${f}`);
    return result.join("\n");
}


export const editPageInputText = (fld) => {
    const result = fld.map(f => `                                    <TextEn Title="${titleCamelCase(f)}" Id="${f}" Change={e => set${titleCamelCase(f)}(e.target.value)} Value={${f}} Chr={50} />`);
     return result.join("\n");
}


