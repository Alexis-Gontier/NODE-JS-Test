const express = require("express")
const port = process.env.PORT || 5000

const app = express()

app.get("/", (req, res) => {
    res.status(200).json({
        id: 1,
        user: "alexis",
        age: 20
    })
})

const users = require("./routes/users")
app.use("/users", users)



app.listen(port, (err) => {
    console.log("Le serveur est en ligne !");
})