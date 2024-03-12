
const DbRouter = (tbl, datas) => {

  const toTitleCase = (str) => {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }


  const splitData = datas.split(",");
  const data = splitData.map(s => s.trim());
  data.shift();
  console.log(data)


const stringData = data.map(t=>` ${t}`).toString();
const stringQuestions = data.map(t=>` ?`).toString();
const updateQyery = data.map(t=>` ${t} = ?`).toString();


  const str = `const express = require('express');
const router = express.Router();
const db = require('../utils/Database');



// Create a new ${tbl}
router.post('/create', (req, res) => {
    const {${stringData} } = req.body;
    const query = 'INSERT INTO ${tbl} (${stringData}) VALUES (${stringQuestions})';

    db.query(query, [${stringData}], (err, result) => {
        if (err) {
            console.error('Error creating ${tbl}:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json({ message: "Data inserted successfully." });
    });
});



// Get a specific ${tbl} by ID
router.get('/read/:id', (req, res) => {
    const ${tbl}Id = req.params.id;
    const query = 'SELECT * FROM ${tbl} WHERE id = ?';

    db.query(query, [${tbl}Id], (err, results) => {
        if (err) {
            console.error('Error fetching ${tbl}:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: '${toTitleCase(tbl)} not found' });
        }
       
        res.json(results[0]);
    });
});



// Update a ${tbl}
router.put('/update/:id', (req, res) => {
    const ${tbl}Id = req.params.id;
    const {${stringData} } = req.body;
    const query = 'UPDATE ${tbl} SET${updateQyery} WHERE id = ?';

    db.query(query, [${stringData}, ${tbl}Id], (err, result) => {
        if (err) {
            console.error('Error updating ${tbl}:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: '${toTitleCase(tbl)} not found' });
        }
        res.json({ message: "Updated successfully" });
    });
});



// Delete a ${tbl}
router.delete('/delete/:id', (req, res) => {
    const ${tbl}Id = req.params.id;
    const query = 'DELETE FROM ${tbl} WHERE id = ?';

    db.query(query, [${tbl}Id], (err, result) => {
        if (err) {
            console.error('Error deleting ${tbl}:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: '${toTitleCase(tbl)} deleted successfully' });
    });
});



// Get all ${tbl}s
router.get('/read_all', (req, res) => {
    const query = 'SELECT * FROM ${tbl}';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching ${tbl}s:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});



module.exports = router;
`

  return str;


}



export default DbRouter;
