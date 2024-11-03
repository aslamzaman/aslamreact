export const Database = (isLocalStorage) => {

    const strLocalStorage = `
/**
 * Get data from local storage
 * @param {String} key - Storage key
 * @returns 
 */
export const localStorageGetItem = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
}



/**
 * Add new data
 * @param {String} key - Storage key
 * @param {Object} item - JSON Object
 * @returns 
 */
export const localStorageAddItem = (key, item) => {
    try {
        const value = localStorage.getItem(key);
        const data = value ? JSON.parse(value) : [];
        data.push(item);
        localStorage.setItem(key, JSON.stringify(data));
        return \`Data saved successfully. New Id: \${item.id} \`;
    } catch (error) {
        console.error("Error adding item to localStorage:", error);
        return "Failed to save data.";
    }
}


/**
 * Local storage set item; Usase at upload data
 * @param {String} key  - Storage key
 * @param {Object} data  - JSON data
 * @returns 
 */
export const localStorageSetItem = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return "Data saved successfully.";
    } catch (error) {
        console.error("Error adding item to localStorage:", error);
        return "Failed to save data.";
    }
}



/**
 * Local storage update item
 * @param {String} key  - Storage key
 * @param {Number} id - Unique ID
 * @param {Object} item - Object Data
 * @returns 
 */
export const localStorageUpdateItem = (key, id, item) => {
    try {
        const value = localStorage.getItem(key);
        const data = value ? JSON.parse(value) : [];
        const updatedData = data.map(localData => (localData.id === id ? item : localData));
        localStorage.setItem(key, JSON.stringify(updatedData));
        return \`Data updated successfully. Updated Id: \${id} \`;
    } catch (error) {
        console.error('Error data updating to local storage.');
        return 'Failed to update data.';
    }
}



/**
 * Local storage delete item
 * @param {String} key  - Storage key
 * @param {Number} id  - Unique ID
 * @returns 
 */
export const localStorageDeleteItem = (key, id) => {
    try {
        const value = localStorage.getItem(key);
        const data = value ? JSON.parse(value) : [];
        const updatedItems = data.filter(item => parseInt(item.id) !== parseInt(id));

        if (updatedItems.length === data.length) {
            return 'Data does not match for deletion';
        }
        localStorage.setItem(key, JSON.stringify(updatedItems));
        return \`Data deleted successfully. Deleted Id: \${id} \`;
    } catch (error) {
        console.error('Error to deleting data to localstorage.');
        return 'Failed to delete data.';
    }
};



/**
 * Delete all data from local storage
 * @param {String} key  - Storage key
 * @returns 
 */
export const localStorageRemoveItem = (key) => {
    try {
        localStorage.removeItem(key);
        return "All data deleted successfully.";
    } catch (error) {
        console.error('Error to deleting data to localstorage.');
        return 'Failed to delete data.';
    }
};
`;
    const strIndexDB = `import { get, set, del } from "idb-keyval";



/**
 * Retrieve data from IndexedDB by key
 * @param {string} key - Storage key
 * @returns {Promise<Array>} - Retrieved data or an empty array
 */
export const getDataFromIndexDB = async (key) => {
    try {
        const data = await get(key);
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Error retrieving data from IndexedDB:", error);
        return [];
    }
}



/**
 * Add new data to IndexedDB under the specified key
 * @param {string} key - Storage key
 * @param {Object} item - Item to add, should contain a unique \`id\` property
 * @returns {Promise<string>} - Success or error message
 */
export const addDataToIndexDB = async (key, item) => {
    try {
        const data = await getDataFromIndexDB(key);
        data.push(item);
        await set(key, data);
        return \`Data saved successfully. New Id: \${item.id}\`;
    } catch (error) {
        console.error("Error adding item to IndexedDB:", error);
        return "Failed to save data.";
    }
};



/**
 * Update an item in IndexedDB by its ID
 * @param {string} key - Storage key
 * @param {number} id - ID of the item to update
 * @param {Object} updatedItem - Updated item data
 * @returns {Promise<string>} - Success or error message
 */
export const updateDataToIndexDB = async (key, id, updatedItem) => {
    try {
        const data = await getDataFromIndexDB(key);
        const updatedData = data.map((item) => (parseInt(item.id) === parseInt(id) ? updatedItem : item));
        await set(key, updatedData);
        return \`Data updated successfully. Updated Id: \${id}\`;
    } catch (error) {
        console.error("Error updating data in IndexedDB:", error);
        return "Failed to update data.";
    }
};



/**
 * Delete an item from IndexedDB by its ID
 * @param {string} key - Storage key
 * @param {number} id - ID of the item to delete
 * @returns {Promise<string>} - Success or error message
 */
export const deleteDataFromIndexDB = async (key, id) => {
    try {
        const data = await getDataFromIndexDB(key);
        const initialLength = data.length;
        const updatedData = data.filter((item) => parseInt(item.id) !== parseInt(id));

        if (updatedData.length === initialLength) {
            return \`Item with ID \${id} not found.\`;
        }
        await set(key, updatedData);
        return \`Data deleted successfully. Deleted Id: \${id}\`;
    } catch (error) {
        console.error("Error deleting data from IndexedDB:", error);
        return "Failed to delete data.";
    }
};



/**
 * Delete all item from IndexedDB
 * @param {string} key - Storage key
 * @returns {Promise<string>} - Success or error message
 */
export const deleteDataFromIndexDB = async (key) => {
    try {
        await del(key);
        return \`Data deleted successfully.\`;
    } catch (error) {
        console.error("Error deleting data from IndexedDB:", error);
        return "Failed to delete data.";
    }
};






/**
 * Sets new data to IndexedDB under the specified key; Usase at upload data
 * @param {string} key - Storage key
 * @param {Object} item - Item to add, should contain a unique \`id\` property
 * @returns {Promise<string>} - Success or error message
 */
export const setDataToIndexDB = async (key, item) => {
    try {
        await set(key, item);
        return \`Data uploded successfully.\`;
    } catch (error) {
        console.error("Error adding item to IndexedDB:", error);
        return "Failed to upload data.";
    }
};
`;
    return isLocalStorage? strLocalStorage: strIndexDB;
}