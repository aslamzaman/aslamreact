import { db } from '../util/ApiKey';
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, where, orderBy, limit, serverTimestamp } from 'firebase/firestore';

import { Age } from "../util/Lib";
import { async } from '@firebase/util';


export const detailHond = async ({ hondaAll, unitAll, projectAll }) => {


      let x = [];
      for (let i = 0; i < hondaAll.length; i++) {






            let unitName = "";
            let project = "";


            for (let u = 0; u < unitAll.length; u++) {
                  if (hondaAll[i].unit_id === unitAll[u].id) {
                        unitName = unitAll[u].name;
                  }
            }


            for (let p = 0; p < projectAll.length; p++) {
                  if (hondaAll[i].project_id === projectAll[p].id) {
                        project = projectAll[p].short;
                  }
            }


            let id = hondaAll[i].id;

            const userHistory = await getDocs(collection(db, "honda_history"), where("honda_id","==",id), orderBy("timestamp","desc"), limit(1));
            let historySnap = userHistory.docs.map((doc) => ({ ...doc.data(), id: doc.id }));


           console.log(historySnap[0]);


            let histories = `${historySnap[0].location}(${historySnap[0].desig})[${historySnap[0].name}}]`;
           // let histories = "";
          
           console.log(histories)









            x.push({
                  id: hondaAll[i].id,
                  unit: `${unitName}(${project})>${histories}`,
                  registration: hondaAll[i].registration,
                  reg_dt: hondaAll[i].reg_dt,
                  made_year: hondaAll[i].made_year,
                  age: Age(hondaAll[i].reg_dt)
            })



















      }
      return x;


}



/*
honda_history
,,,id,,,,,

honda_id,project_id,dt,name,desig,mobile,location,doc_pic_link,pic,remarks

*/