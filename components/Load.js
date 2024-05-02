import Dexie from 'dexie';

const db = new Dexie('myDatabase');


try {
    db.version(1).stores({
        staff: 'id, nm_un, nm_en, nm_bn,dt, sal,mobile, address, district_id, gender_id, post_id, project_id, picture_id, emp_id, status, place_id, unit_id, remarks',
        localta: 'id, place1, t1, place2, t2, vehicle, taka',
        localta_save: 'id, place1, t1, place2, t2, vehicle, taka, save_time, cause',
        project: 'id, name',
        post: 'id, nm_en,nm_bn',
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
        district: "id, name,bn_name"

    });
    db.open();
} catch (error) {
    console.log('Error initializing Dexie:', error);
}

const preProjectData = [
    {
        "id": 1700067429671,
        "name": "SDC & SIDA"
    },
    {
        "id": 1700067440343,
        "name": "EDM"
    },
    {
        "id": 1700067449958,
        "name": "YSES"
    },
    {
        "id": "1699885557183",
        "name": "GO"
    },
    {
        "id": "1699885571615",
        "name": "MC"
    },
    {
        "id": "1699885580575",
        "name": "IDCOL"
    },
    {
        "id": "1699885591518",
        "name": "CORE"
    },
    {
        "id": "1699885603134",
        "name": "COL"
    },
    {
        "id": "1699885614222",
        "name": "CateringField"
    },
    {
        "id": "1699885626814",
        "name": "3rd AC"
    },
    {
        "id": "1699885636894",
        "name": "Trade AC"
    }
]


try {
    for (let i = 0; i < preProjectData.length; i++) {
        db.project.add(preProjectData[i]);
    }
} catch (error) {
    console.log(`Error inserting into ${table}:`, error);
    throw error;
}

