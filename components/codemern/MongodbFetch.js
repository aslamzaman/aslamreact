export const MongodbFunction = () => {
    const str = `import { get, set, del } from "idb-keyval";



    const idbStorageGetItem = async (key, maxAge) => {
        try {
            const idbStorageData = await get(key);
            const now = Date.now();
            if (idbStorageData && idbStorageData.timestamp) {
                const isDataFresh = (now - idbStorageData.timestamp) < maxAge;
                return isDataFresh ? idbStorageData.data : null;
            }
            return null;
        } catch (error) {
            console.error("Error retrieving data from IndexedDB:", error);
            return null;
        }
    }

    const idbStorageSetItem = async (key, data) => {
        try {
            const now = Date.now();
            await set(key, {
                data: data,
                timestamp: now
            });
        } catch (error) {
            console.error("Error retrieving data from IndexedDB:", error);
        }
    }


    const idbStorageDeleteItem = async (key) => {
        try {
            await del(key);
        } catch (error) {
            console.error("Error retrieving data from IndexedDB:", error);
        }
    }




    export const getDataFromMongoDB = async (url, key) => {

        try {
            const maxAge = 2 * 60 * 60 * 1000;
            const cached = await idbStorageGetItem(key, maxAge);

            if (cached) {
                console.log("Data from indexedDB");
                return cached;
            }

            const response = await fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            await idbStorageSetItem(key, data);

            console.log("Data from MongoDB");
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }



    export const getSomeDataFromMongoDB = async (url, key, queryField) => {
        try {
            const maxAge = 2 * 60 * 60 * 1000;
            const cacheKey = \`\${key}_\${queryField}_\${id}\`;

            const cached = await idbStorageGetItem(cacheKey, maxAge);

            if (cached) {
                console.log("Data from indexedDB");
                return cached;
            }

            const response = await fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            await idbStorageSetItem(cacheKey, data);

            console.log("Data from MongoDB");
            return data;

        } catch (error) {
            console.error(error);
            return null;
        }
    }



    export const getSingleDataFromMongoDB = async (url, key, id) => {
        try {
            const cacheKey = \`\${key}_\${id}\`;

            const maxAge = 2 * 60 * 60 * 1000;
            const cached = await idbStorageGetItem(cacheKey, maxAge);

            if (cached) {
                console.log("Data from indexedDB");
                return cached;
            }

            const response = await fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            await idbStorageSetItem(cacheKey, data);

            console.log("Data from MongoDB");
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }



    export const addDataToMongoDB = async (url, key, data) => {
        try {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            };
            const response = await fetch(url, requestOptions);
            if (response.ok) {
                await idbStorageDeleteItem(key);
                return "Data is created at successfully";
            } else {
                throw new Error("Failed to create");
            }
        } catch (err) {
            console.error('Error adding document: ', err);
            return "Data saving error!";
        }
    }




    export const updateDataToMongoDB = async (url, key, data, id) => {
        try {
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            };
            const response = await fetch(url, requestOptions);
            if (response.ok) {
                const cacheKey = \`\${key}_\${id}\`;
                await idbStorageDeleteItem(key);
                await idbStorageDeleteItem(cacheKey);
                return "Updated successfully completed";
            } else {
                throw new Error("Failed to data updated!");
            }

        } catch (err) {
            console.error('Error adding document: ', err);
            return "Data updating error!";
        }
    }




    export const deleteDataFromMongoDB = async (url, key, id) => {

        try {
            const requestOptions = { method: "DELETE" };
            const response = await fetch(url, requestOptions);
            if (response.ok) {
                const cacheKey = \`\${key}_\${id}\`;
                await idbStorageDeleteItem(key);
                await idbStorageDeleteItem(cacheKey);
                return "Deleted successfully completed";
            } else {
                throw new Error("Failed to delete customer");
            }
        } catch (err) {
            console.error('Error deleting document: ', err);
            return "Data deleting error!";
        }
    }
`
return str;

}
