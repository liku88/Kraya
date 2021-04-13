import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import ConnectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js';

ConnectDB();

app.get('/', (req, res) => {
    res.send("Api is running");
})
app.use('/api/products', productRoutes);
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port no :- ${PORT}`);

})