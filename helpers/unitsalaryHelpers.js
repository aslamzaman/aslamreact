import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { sortArray } from "@/lib/utils";



export const staffData = async () => {
    try {
        const [unitsalaryResponse, staffResponse, unitResponse, postResponse] = await Promise.all([
            getDataFromFirebase("unitsalary"),
            getDataFromFirebase("staff"),
            getDataFromFirebase("unit"),
            getDataFromFirebase("post")
        ]);


        const staffs = staffResponse.map(staff => {
            const getUnit = unitResponse.find(unit => unit.id === staff.unitId);
            const getPost = postResponse.find(post => post.id === staff.postId);
            return {
                ...staff,
                post: getPost,
                unit: getUnit
            }
        })

        const data = unitsalaryResponse.map(salary => {
            const staff = staffs.find(staff => staff.id === salary.staffId);
            return {
                ...salary,
                staff
            }
        })

        const sortData = data.sort((a, b) => sortArray(new Date(a.createdAt), new Date(b.createdAt)));
        return sortData;

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}



export const totalSallary = async () => {
    const data = await staffData();
    const totalSalary = data.reduce((t, c) => t + parseFloat(c.arear)+ parseFloat(c.sal1) + parseFloat(c.sal2), 0);
    return totalSalary;

}