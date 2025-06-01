import { titleCamelCase } from "@/lib/utils";

const MongooseModels = (tbl, datas) => {


    const splitData = datas.split(",");
    const data = splitData.map(s => s.trim());

    
    /*
    let obj = "";
    for(let i = 0; i < data.length; i++){
        obj+= `            ${data[i]}: { type: String, required: true },\n`;
    }
    */
  const obj = data.map(item => (`            ${item}: { type: String, required: true }`)).join(", \n"); 

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
