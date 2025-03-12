

const Server = () => {

const str = `// package.json
{
  "name": "expressjs",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {    
    "start": "node index.js",
    "dev":"nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.2",
    "nodemon": "^2.0.7"
  },
  "description": ""
}
//-------------------------------------------------------
// index.js
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.static('static'));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// JSON PRITIFYE
app.set("json spaces", 2);
// log request



//app.use("/bayprostab", require("./src/router/BayprostabRoute"));
app.use("/pw", require("./src/router/pw"));


app.use((req, res) => {
    res.send({ msg: "Page Not Found!" });
});

app.listen(PORT, () => {
    console.log(\`Server is running on: http://localhost:\${PORT}\`);
});



//-----------------------------------------------------
// src/router/pw.js
const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
		res.send({log:1699639379540});
});

module.exports = router;

    `;

    return str;
}

export default Server;