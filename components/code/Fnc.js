
export const titleCase = (str) => {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}


export const createObjec = (tbl, flds, addEdit) => {
    let str = "";
    str = str + 'const create' + titleCase(tbl) + 'Object = () => {\n';
    str = str + "return {\n";
    let b = "";
    let x = addEdit === 'add' ? 'Date.now()' : 'Id';
    b = b + 'id:' + x + ',\n';


    for (let i = 0; i < (flds.length - 1); i++) {
        if (i != 0) {
            b = b + flds[i].trim() + ': ' + flds[i].trim() + ',\n';
        }
    }

    b = b + (flds[(flds.length - 1)]).trim() + ': ' + (flds[(flds.length - 1)]).trim() + '\n';

    str = str + b;
    str = str + "}\n";
    str = str + "}\n\n";

    return str;
}


export const stateVeriables = (flds) => {
    let a = "";
    for (let i = 0; i < flds.length; i++) {
        if (i != 0) {
            a = a + 'const [' + flds[i].trim() + ', set' + titleCase(flds[i].trim()) + '] = useState("");\n';
        }
    }
    return a;
}


export const formInput = (flds) => {
    let str = "";
    str = str + '<div className="px-6 pb-6 text-black overflow-hidden">\n';
    str = str + '<form onSubmit={saveHandler}>\n';
    str = str + '<div className="grid grid-cols-1 gap-4 my-4">\n';
    let x = "";
    for (let i = 0; i < flds.length; i++) {
        if (i !== 0) {
            x = x + `<TextEn Title="${titleCase(flds[i].trim())}" Id="${flds[i].trim()}" Change={e => set${titleCase(flds[i].trim())}(e.target.value) } Value={${flds[i].trim()}} Chr="50" />\n`;
        }
    }
    str = str + x;
    str = str + '</div>\n';
    str = str + '<BtnEn Title="Close" Click={() => {setShow(false); Msg("Data ready") }} Class="bg-red-600 hover:bg-red-800 text-white"  />\n';
    str = str + '<BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />\n';
    str = str + '</form>\n';
    str = str + '</div>\n';

    return str;
}

export const resetStateVariable = (flds, add) => {
    let str = "";
    let x = add === "add" ? '"Ready to add new"' : '"Ready to edit existing"';
    str = str + 'const resetStateVariables = () => {\n';
    str = str + `Msg(${x});\n`
    let y = "";

    for (let i = 0; i < flds.length; i++) {
        if (i !== 0) {
            y = y + `set${titleCase(flds[i].trim())}("");\n`
        }
    }

    str = str + y;
    str = str + '}\n';
    return str;
}