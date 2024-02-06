require("dotenv").config()

const fs = require("fs")

const db = require("./connect")

const sql = fs.readFileSync("./database/countries.sql").toString()


const setupDatabase = async () =>{
    try {
        const data = await db.query(sql)
        console.log("Setup complete")
    } catch (error) {
        console.error(error)
    } finally {
        db.end()
    }
}

setupDatabase()

// Promise chain approach (obsolete)
// db.query(sql)
//     .then((data) => {
//         db.end()
//         console.log("Setup complete")
//     })
//     .catch((error) => console.log(error))