const Helper = (tbl) => {

    const str = `
import { getDataFromFirebase } from '@/lib/${tbl}Function';
import { sortArray } from "@/lib/utils";

export const ${tbl}Helpers = async () => {
    try {
        const data = await getDataFromFirebase('${tbl}');
        const ${tbl}s = data.sort((a, b) => sortArray(new Date(b.createdAt), new Date(a.createdAt)));
        return { ${tbl}s };
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

`;
    return str;
}
export default Helper;
