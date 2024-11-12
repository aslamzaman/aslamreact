
const MongooseModels = () => {


    const str = `import mongoose, { Schema } from "mongoose";
	    
	import mongoose,{ Schema } from "mongoose";

    //  projectId: { type: Schema.Types.ObjectId, ref: 'Project' },
    const HondahistorySchema = new Schema(
        {
            dt: { type: String, required: true },
            name: { type: String, required: true },
            mobile: { type: String, required: true },
            isDeleted: { type: Boolean, default: false }      
        },
        {
            timestamps: true
        }
    );
    
    export const HondahistoryModel = mongoose.models.Hondahistory || mongoose.model("Hondahistory", HondahistorySchema);  
    
  
`;

    return str;
}

export default MongooseModels;
