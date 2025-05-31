import { titleCamelCase } from "@/lib/utils";

const MongooseRouteDynamic = (tbl, datas) => {

  const splitData = datas.split(",");
  const data = splitData.map(s => s.trim());
  const newData = data.map(item => item);
  const dataToString = newData.slice(0,newData.length).join(', ');
  console.log(dataToString);




    const str = `    import { NextResponse } from 'next/server';
    import { Connect } from '@/lib/Db';
    import { ${titleCamelCase(tbl)}Model } from '@/lib/Models';


    // Get one data
    export const GET = async (Request,{ params }) => {
      try {
        await Connect();
        const {id} = await params;
        const ${tbl}s = await ${titleCamelCase(tbl)}Model.findById(id);
        return NextResponse.json(${tbl}s);
      } catch (err) {
        return NextResponse.json({ message: "GET Error", err }, { status: 500 });
      }
    }



 // Update data
    export const PUT = async (Request,{ params }) => {
      try {
        await Connect();
        const {id} = await params;
        const { ${dataToString} } = await Request.json();
        const ${tbl}s = await ${titleCamelCase(tbl)}Model.findOneAndUpdate({ _id: id }, { ${dataToString} });
        return NextResponse.json(${tbl}s);
      } catch (err) {
        return NextResponse.json({ message: "PUT Error", err }, { status: 500 });
      }
    }

   
    
    // Soft deleted
    export const PATCH = async (Request, { params }) => {
      try {
        await Connect();
        const { id } = await params;
        const ${tbl}s = await ${titleCamelCase(tbl)}Model.findOneAndUpdate({_id: id, isDeleted: false},{isDeleted:true},{new:true});
        return NextResponse.json(${tbl}s);
      } catch (err) {
        return NextResponse.json({ message: "GET Error", err }, { status: 500 });
      }
    } 


    
    // Hard deleted
    export const DELETE = async ( Request, { params }) => {
      try {
        await Connect();
        const {id} = await params;
        const ${tbl}s = await ${titleCamelCase(tbl)}Model.findOneAndDelete({_id: id});
        return NextResponse.json(${tbl}s);
      } catch (err) {
        return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
      }
    } 

`;

    return str;
}

export default MongooseRouteDynamic;
