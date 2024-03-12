const DexieDatabase = ()=>{
const errInsert = "`Error inserting into ${table}:`";
const insertedCode = '`Inserted ${numInserted} records into table "${tableName}"`';
const insertingCode = '`Error inserting into table "${tableName}":`';
const fetchCode = "`Error fetching ${table} with id ${id}:`";
const errUpdating = "`Error updating ${table}:`";
const errDeleting = "`Error deleting from ${table}:`";
const filFetch = "`Failed to fetch records from ${table}: ${error.message}`";
const recovercode = "`Recovered ${numInserted} records from ${table.name} file`";

  let str = `
  import Dexie from 'dexie';

const db = new Dexie('myDatabase');


try {
    db.version(1).stores({
        staff: 'id, nm_un, nm_en, nm_bn, deg_en, deg_bn, dt, sal, prj, picture_id',
        localta: 'id, place1, t1, place2, t2, vehicle, taka',
        localta_save: 'id, place1, t1, place2, t2, vehicle, taka, save_time, cause',
        project: 'id, name',
        picture: 'id, data',
        honda: "id, registration, reg_dt, chassis, engine, cc, seat, made_year, status, unit, unit_id, project",
        hondalocation: "id, honda_id, dt, name, desig, mobile, location, project, doc_pic_link, remarks",
        land: "id, unit_id, unit, school, qty, reg_dt, donors, remarks",
        unit: "id, nm_en, nm_bn",
        doc: "id, dt, unit, picurl, cat"
       

    });
    db.open();
} catch (error) {
    console.log('Error initializing Dexie:', error);
}



//----------------------------------------------------------------------------
export const insertOne = async (table, data) => {
    try {
        return await db[table].add(data);
    } catch (error) {
        console.log(${errInsert}, error);
        throw error;
    }
}


export const insertBulk = async (tableName, data) => {
    try {
        const numInserted = await db.transaction('rw', db[tableName], async () => {
            return await db[tableName].bulkAdd(data);
        });
        console.log(${insertedCode});
        return numInserted;
    } catch (error) {
        console.error(${insertingCode}, error);
        throw error;
    }
};



export const fetchOne = async (table, id) => {
    try {
        return await db[table].get(id);
    } catch (error) {
        console.log(${fetchCode}, error);
        throw error;
    }
}


export const updateOne = async (table, data) => {
    try {
        return await db[table].put(data);
    } catch (error) {
        console.log(${errUpdating}, error);
        throw error;
    }
}


export const deleteOne = async (table, id) => {
    try {
        return await db[table].delete(id);
    } catch (error) {
        console.log(${errDeleting}, error);
        throw error;
    }
}


export const fetchAll = async (table) => {
    try {
        return await db[table].toArray();
    } catch (error) {
        throw new Error(${filFetch});
    }
}


//------------------------------------------------------------------------------------


export const backup = async () => {
    try {
        const tables = db.tables;
        const data = await Promise.all(tables.map(async (table) => {
            return {
                [table.name]: await db[table.name].toArray()
            }
        }))
        return Object.assign({}, ...data);
    } catch (error) {
        console.error("Error: " + error)
    }
}


export const recover = async (datas) => {
    try {
        const tables = db.tables;
        const data = tables.map(async (table) => {
            await db[table.name].clear();
            const numInserted = await db[table.name].bulkAdd(datas[table.name]);
            console.log(${recovercode});
        })
    } catch (error) {
        console.error("Error: " + error)
    }
}

  `;
  return str;
}

export default DexieDatabase;