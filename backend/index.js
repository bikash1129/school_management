const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
const Routes = require("./routes/route.js")

const PORT =  5000


app.use(express.json({ limit: '10mb' }))
app.use(cors())

mongoose
    .connect("mongodb+srv://santrabikash29:bikash1129.be22@cluster0.5rvt4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})