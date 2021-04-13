import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import products from './data/products.js';
import ConnectDB from './config/db.js'

ConnectDB();

app.get('/', (req, res) => {
    res.send("Api is running");
})
app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
})
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port no :- ${PORT}`);

})