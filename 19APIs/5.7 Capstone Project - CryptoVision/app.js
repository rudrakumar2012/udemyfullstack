import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const apiKey = process.env.API_KEY;
        const response = await axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apiKey}`);
        const cryptoData = response.data.data;
        // Pass cryptoData to EJS template
        res.render('index.ejs', { cryptoData });
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
        res.status(500).send('Error fetching cryptocurrency data');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});