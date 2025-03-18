import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { sortArray } from "@/lib/utils";



export const getStaffData = async () => {
    const [stafs, posts, projects, genders] = await Promise.all([
        getDataFromFirebase("staff"),
        getDataFromFirebase("post"),
        getDataFromFirebase("project"),
        getDataFromFirebase("gender")
    ]);
   // console.log(stafs, posts, projects, genders);

    const all = stafs.map(staff => {
        const matchPost = posts.find(post => post.id === staff.postId);
        const matchProject = projects.find(project => project.id === staff.projectId);
        const matchGender = genders.find(gender => gender.id === staff.genderId);
        return {
            ...staff, matchPost, matchProject, matchGender
        }
    }).sort((a, b) => sortArray(a.nmEn.toUpperCase(), b.nmEn.toUpperCase()));

    const sc = all.filter(staff => staff.placeId === "6BtqRhIrKQ776jyywIC8");
    const field = all.filter(staff => staff.placeId === "4ORlv0I0Klw4YvBC36XF");
    return { all, sc, field };
}