import Dexie from 'dexie';

const db = new Dexie('myDatabase');


try {
    db.version(1).stores({
        staff: 'id, nm_un, nm_en, nm_bn,dt, sal,mobile, address, district_id, gender_id, post_id, project_id, picture_id, emp_id, status, place_id, unit_id, remarks',       
        project: 'id, name',
        post: 'id, nm_en, nm_bn',
        honda: "id, registration, reg_dt, chassis, engine, cc, seat, made_year, company, status,project_id, unit_id",
        hondalocation: "id, honda_id, dt, name, desig, mobile, location, project, doc_pic_link, remarks",
        land: "id, school, qty, reg_dt, donors, remarks, unit_id",
        unit: "id, nm_en, nm_bn",
        doc_cat: "id, title",
        doc: "id, cat_id, dt, unit, picurl ",
        price: "id, items, rate",
        mobile: "id, name, mobile",
        author: "id, name, deg",
        place: "id, name",
        gender: "id, name",
        district: "id, name,bn_name",
        ta: "id, unit_id, tk",
        da: "id,post_id, tk",
        unitsalary:"id, staff_id, arear,sal1,sal2,remarks"

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
        console.log(`Error inserting into ${table}:`, error);
        throw error;
    }

}


export const insertBulk = async (tableName, data) => {

    try {
        const numInserted = await db.transaction('rw', db[tableName], async () => {
            return await db[tableName].bulkAdd(data);
        });
        console.log(`Inserted ${numInserted} records into table "${tableName}"`);
        return numInserted;
    } catch (error) {
        console.error(`Error inserting into table "${tableName}":`, error);
        throw error;
    }

};


export const insertBulkOrUpdate = async (tableName, data) => {

    try {
        const numInserted = await db.transaction('rw', db[tableName], async () => {
            return await db[tableName].bulkPut(data);
        });
        console.log(`Inserted or updated ${numInserted} records into table "${tableName}"`);
        return numInserted;
    } catch (error) {
        console.error(`Error inserting or updating table "${tableName}":`, error);
        throw error;
    }

};


export const fetchOne = async (table, id) => {

    try {
        return await db[table].get(id);
    } catch (error) {
        console.log(`Error fetching ${table} with id ${id}:`, error);
        throw error;
    }

}


export const updateOne = async (table, data) => {

    try {
        return await db[table].put(data);
    } catch (error) {
        console.log(`Error updating ${table}:`, error);
        throw error;
    }

}

export const deleteOne = async (table, id) => {

    try {
        return await db[table].delete(id);
    } catch (error) {
        console.log(`Error deleting from ${table}:`, error);
        throw error;
    }

}


export const fetchAll = async (table) => {

    try {
        return await db[table].toArray();
    } catch (error) {
        return [];
        // throw new Error(`Failed to fetch records from ${table}: ${error.message}`);
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
            console.log(`Recovered ${numInserted} records from ${table.name} file`);
        })
    } catch (error) {
        console.error("Error: " + error)
    }

}



