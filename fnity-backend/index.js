import express from "express";
import mongoose from "mongoose";
import itemRouter from "./routes/item.route.js";

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
})

app.use('/api/v1/item', itemRouter);

app.get('/', (req, res) => {
    res.send('FNITY API');
})

mongoose.connect('mongodb+srv://trav:travisbruh@cluster0.cfb0yez.mongodb.net/FNITY?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connected to the database');
    app.listen(8000, () => {
        console.log('Server is running on port 8000');
    })
})
.catch((error) => {
    console.log(error);
})