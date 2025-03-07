const express = require("express");
let app = express();
app.use(express.json()) //middleware which is convert the post data into json 

let check = (req, res, next) => {
    if (req.headers.token == "xyz") {
        next()
    } else {
        res.status(401).send("access denied")
    }
}

app.use(check)
app.get("/", (req, res) => {
    console.log(req.body)
    res.send("hello world")
})
// middleware , 
app.post("/postdata", (req, res) => {
    console.log(req.body)
    res.send("data submitted successfully")
})

app.listen(4000, "localhost", (err) => {
    console.log(err || "server run on port 4000")
})