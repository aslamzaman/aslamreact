//let tbl = "docs";
//let data = "id, cat_id, picurl, dt, head";
//let tbl = "report";
//let data = "id, title, pic, content, createdat, slug, description, keyword, scripter, editing, category";
//----------------------------------
const DbRouter = (tbl, data) => {

  const toTitleCase = (str) => {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }


  let ar = data.split(",");

  let insert = "";
  let insert_val = "";
  let insert_req_body = "";
  let update = "";
  let fld_lst = data;
  let join_sql = `SELECT ${tbl}.${ar[0]}, `;
  for (let j = 0; j < (ar.length - 1); j++) {
    if (j != 0) {
      insert = insert + `${ar[j].trim()}, `;
      insert_val = insert_val + "?, ";
      insert_req_body = insert_req_body + `req.body.${ar[j].trim()}, `;
      update = update + `${ar[j].trim()} = ?, `;
      join_sql = join_sql + `${tbl}.${ar[j].trim()}, `;

    }
  }
  insert = insert + `${ar[ar.length - 1].trim()}`;
  insert_val = insert_val + "?";
  insert_req_body = insert_req_body + `req.body.${ar[ar.length - 1].trim()}`;
  update = update + `${ar[ar.length - 1].trim()} = ?`;
  join_sql = join_sql + `${tbl}.${ar[ar.length - 1].trim()} FROM ${tbl} LEFT JOIN tbl_2 ON ${tbl}.col_id = tbl_2.id ORDER BY ${tbl}.id DESC`;


  //---------------------------------------------------

  let str = `    const express = require("express");
    const router = express.Router();    
    const db = require("../utils/db");
    
    // app.use("/${tbl}", require("./src/routes/${toTitleCase(tbl)}Route"));
    // ${fld_lst}
    // ${join_sql}
    
    
    router.post("/insert_one", async (req, res) => {
        let sql = "INSERT INTO ${tbl} (${insert}) VALUES(${insert_val})";
        await db.query(sql, [${insert_req_body}], (err) => {
            if (err) {
                res.json({ msg: "Data inserting error!!" });
            } else {
                res.json({ msg: "Data inserted seccessfully." });
            }
        });
    })
    
    
    router.post("/update_one/:id", async (req, res) => {  
        let sql = "UPDATE ${tbl} SET ${update} WHERE id = ?";
        let paramsId = req.params.id;
        await db.query(sql, [${insert_req_body}, paramsId], (err) => {
            if (err) {
                res.json({ msg: "Data updating error!!" });
            } else {
                res.json({ msg: "Data updated seccessfully." });
            }
        });
    })
    
    
    router.delete("/delete_one/:id", async (req, res) => {
        let sql = "DELETE FROM ${tbl} WHERE id = ?";
        let paramsId = req.params.id;
        await db.query(sql, paramsId, (err) => {
            if (err) {
                res.json({ msg: "Data deleting error!!" });
            } else {
                res.json({ msg: "Data deleted seccessfully." });
            }
        });
    });
    
    
    router.get("/get_one/:id", async (req, res) => {
      await db.query("SELECT *FROM ${tbl} WHERE id = ?", req.params.id, (err, row) => {
        if (err) {
          res.json({ msg: "No data found!" });
        } else {
          res.json(row[0]);
        }
      });
    });
    
    
    router.get("/", async (req, res) => {
      await db.query("SELECT *FROM ${tbl} ORDER BY id DESC", (err, row) => {
        if (err) {
          res.json({ msg: "No data found!" });
        } else {
          res.json(row);
        }
      });
    });
    
    
    module.exports = router;
    `;





  return str;
}

export default DbRouter;