const express = require('express')
const app = express();
const port =3000;
const cors =require('cors');

const userRouter =require ('./Routers/User');

const ProductRouter =require ('./Routers/Product');



app.use(cors({
    origin:['http://localhost:5173']
}))
//Middleware--

app.use(express.json());
app.use('/user',userRouter);
app.use('/Product',ProductRouter);


app.listen(port , () =>
{
    console.log('server is running on port 3000');
});