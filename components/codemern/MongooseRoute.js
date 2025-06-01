import { titleCamelCase } from "@/lib/utils";


const MongooseRoute = (tbl, datas) => {

  const splitData = datas.split(",");
  const data = splitData.map(s => s.trim());
  const newData = data.map(item => item);
  const dataToString = newData.slice(0,newData.length).join(', ');
  console.log(dataToString);

  const str = `    import { NextResponse } from 'next/server';
    import { Connect } from '@/lib/db';
    import { ${titleCamelCase(tbl)}Model } from '@/lib/models';
    
    
    export const GET = async () => {
      try {
        await Connect();
        const ${tbl}s = await ${titleCamelCase(tbl)}Model.find({isDeleted: false}).sort({_id:'desc'});
        return NextResponse.json( ${tbl}s );
      } catch (error) {
        console.error('GET Error:', error);
        return NextResponse.json({ message: 'Failed to fetch ${tbl}s' }, { status: 500 });
      }
    }
    
    
    
    export const POST = async (Request) => {
      try {
        await Connect();
        const { ${dataToString} } = await Request.json();
        const ${tbl}s = await ${titleCamelCase(tbl)}Model.create({ ${dataToString} });
        return NextResponse.json(${tbl}s);
      } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "POST Error", err }, { status: 500 });
      }
    }
  
`;

  return str;
}

export default MongooseRoute;
