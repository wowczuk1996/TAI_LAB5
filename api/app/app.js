import express from 'express';
const app = express();

app.use(express('public'));

app.listen(3333, function () {
    console.info('Server is running')
});