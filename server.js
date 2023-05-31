import express from 'express';
import { getData } from './modules/getData.js';

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api/notion/data', async (_req, res) => {
    const data = await getData();
    res.json(data);
});

app.listen(PORT, console.log(`Servidor corriendo en puerto ${PORT}`));
