const express =  require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/customer', proxy('http://localhost:9002/'));
app.use('/products', proxy('http://localhost:9003/'));
app.use('/shopping', proxy('http://localhost:9004/'));
app.use('/', proxy('http://localhost:9001/')); //default


app.listen(9000, () => {
    console.log('Gateway is Listening to Port 9000');
});