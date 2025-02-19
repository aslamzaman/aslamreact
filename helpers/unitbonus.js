import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { sortArray } from "@/lib/utils";


export const UnitbonusHelper = async () => {

    try {
        const [unitbonuss, staffs, units, posts] = await Promise.all([
            getDataFromFirebase("unitbonus"),
            getDataFromFirebase("staff"),
            getDataFromFirebase("unit"),
            getDataFromFirebase("post")
        ]);

        const joinCollection = staffs.map(staff => {
            return {
                ...staff,
                unit: units.find(unit => unit.id === staff.unitId) || {},
                post: posts.find(post => post.id === staff.postId) || {}
            }
        });
        
        const joinBounus = unitbonuss.map(unitbonus => {
            return {
                ...unitbonus,
                staff: joinCollection.find(staff => staff.id === unitbonus.staffId) || {}
            }
        });
  
        const data = joinBounus.sort((a, b) => sortArray(new Date(a.createdAt), new Date(b.createdAt)));
        const total = unitbonuss.reduce((t, c) => t + parseFloat(c.bonus), 0);
      
        return {data,total};

    } catch (error) {
        console.error("Error fetching data:", error);
    }

}

