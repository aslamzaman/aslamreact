import { localStorageGetItem } from "@/lib/DatabaseLocalStorage";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import {localStorageAddItem, sortArray } from "@/lib/utils";
import { evaluate } from 'mathjs';



export const getFirebaseData = async () => {
    try {
        const [staffs, projects] = await Promise.all([
            getDataFromFirebase('staff'),
            getDataFromFirebase('project')
        ]);
        const scStaff = staffs.filter(staff => staff.placeId === "6BtqRhIrKQ776jyywIC8");
        const sortStaff = scStaff.sort((a, b) => sortArray(a.nmEn, b.nmEn));
        return { sortStaff, projects }
    } catch (err) {
        console.log(err);
    }
}



export const getLocalData = () => {
    try {
        const localData =  localStorageGetItem('bayprostabexecution');
        const data = localData.map(item => {
            const subtotal = parseFloat(item.nos) * evaluate(`0${item.taka}`);
            return {
                ...item, subtotal
            }
        })
      
        const totalTk = data.reduce((t, c) => t + parseFloat(c.subtotal), 0);
        return { data, totalTk }
    } catch (err) {
        console.log(err);
    }
}




export const addVatTax = (data = [], serial = [], vt = 0) => {
    try {
        const filtersData = data.filter((item, i) => serial.some((index) => parseInt(index) === i));
        const tk = filtersData.reduce((t, c) => t + parseFloat(c.subtotal), 0);
        const vatTaxPercent = Math.round(tk * (vt / 100));

        const slStr = serial.map(item => (parseInt(item) + 1)).join(",");
        const newObject = {
            id: Date.now(),
            item: `f¨vU Ges U¨v· (${vt}%)`,
            nos: 1,
            taka: vatTaxPercent
        }

        const msg = localStorageAddItem('bayprostabexecution', newObject);
        return msg;
    } catch (error) {
        console.error(error);
    }
}



export const addBkash = (data = [], serial = [], bk = 0, sendCharge = 0) => {
    try {
        const filtersData = data.filter((item, i) => serial.some((index) => parseInt(index) === i));
        const tk = filtersData.reduce((t, c) => t + parseFloat(c.subtotal), 0);
        const bkashCharge = Math.round(tk * (bk / 1000));
        const totalSendCharge = filtersData.length * sendCharge;

        const slStr = serial.map(item => (parseInt(item) + 1)).join(",");
        const newObject = {
            id: Date.now(),
            item: `PvR©: (weKvk= ${bk}, †mÛ= ${sendCharge})`,
            nos: 1,
            taka: (bkashCharge + totalSendCharge)
        }

        const msg = localStorageAddItem('bayprostabexecution', newObject);
        return msg;
    } catch (error) {
        console.error(error);
    }
}


