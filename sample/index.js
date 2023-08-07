const express =  require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({ "msg": "Hello from Sample" });
});

app.listen(9001, () => {
    console.log('Sample is Listening to Port 9001');
});