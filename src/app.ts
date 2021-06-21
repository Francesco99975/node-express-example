import express from "express";

const app = express();

const PORT = 4000;

app.get('/', (req, res, next) => {
    res.json({message: "Hello from Villetta Home"});
});

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});