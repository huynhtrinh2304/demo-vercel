const express = require('express');
const app = express();
import { connectMGDB } from './connectMDB';

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port ' + (process.env.port
    || 3000));