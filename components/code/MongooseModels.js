import { titleCamelCase } from "@/lib/utils";

const MongooseModels = (tbl, datas) => {


    const splitData = datas.split(",");
    const data = splitData.map(s => s.trim());

    
    let obj = "";
    for(let i = 0; i < data.length-1; i++){
        obj+= `            ${data[i]}: { type: String, required: true },\n`;
    }
    obj+= `            isDeleted: { type: Boolean, default: false }`;
  

    const str = `import mongoose, { Schema } from "mongoose";
	    

    //  ${tbl}Id: { type: Schema.Types.ObjectId, ref: '${titleCamelCase(tbl)}' },
    const ${titleCamelCase(tbl)}Schema = new Schema(
        {
${obj}            
        },
        {
            timestamps: true
        }
    );
    
    export const ${titleCamelCase(tbl)}Model = mongoose.models.${titleCamelCase(tbl)} || mongoose.model("${titleCamelCase(tbl)}", ${titleCamelCase(tbl)}Schema);  
    
  
`;

    return str;
}

export default MongooseModels;
