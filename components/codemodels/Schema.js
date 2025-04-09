

const Schema = (tbl, datas) => {

    const splitData = datas.split(",");
    const data = splitData.map(s => s.trim());

    let arrString = "";
    for (let i = 0; i < data.length; i++) {
        if (i < (data.length - 1)) {
            arrString = arrString + `            ${data[i]}: ${data[i]},\n`;
        } else {
            arrString = arrString + `            ${data[i]}: ${data[i]},`;
        }
    }

    //----------------------------------------------------------------


    const str = `    // str.toString() ; Number(str) || 0 ; true/fale
    export const ${tbl}Schema = (data = []) => {
        if (!Array.isArray(data) || data.length < ${data.length}) {
            throw new Error("Data array of at least ${data.length} elements");
        }
        const [${data}] = data;
        return{
${arrString}
            createdAt: new Date().toISOString()
        }
    }       
`;

    return str;
}

export default Schema;

