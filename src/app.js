import express from 'express';
import productsRoutes from './routes/products.routes.js';
import indexRoutes from './routes/index.routes.js';
import bodyParser from "body-parser";

//json parser
var jsonParser = bodyParser.json();

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use('/api/products', jsonParser, productsRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: "endpoint not found"
    });
});

export default app;