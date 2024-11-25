import express from "express"
const app = express()
const port = 4000
app.use("/", (req, res) => {
    res.json({ message: "heyyy its me " })
})
app.listen(4000, () => {
    console.log("mmmemmemem")
})