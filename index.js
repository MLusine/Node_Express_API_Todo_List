import express from 'express';
import bodyParser from 'body-parser';

import tasksRoutes from './routes/tasks.js';

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.use('/tasks', tasksRoutes)

app.get('/', (req, res) => res.send('Hello from Homepage.'))

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))