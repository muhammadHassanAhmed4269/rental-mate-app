const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');
app.use(express.json());
app.use(require('./router/auth'));
const PORT = process.env.PORT

// app.get('/', (req, res) =>{
//     res.send('Hello World from the server');
// });
//
// app.get('/about', middleware, (req, res) =>{
//     res.send('About World from the server');
// });
//
// app.get('/contact', (req, res) =>{
//     res.send('Contact World from the server');
// });
//
// app.get('/wishlist', (req, res) =>{
//     res.send('Wishlist World from the server');
// });
//
// app.get('/categories', (req, res) =>{
//     res.send('Categories World from the server');
// });
//
// app.get('/signin', (req, res) =>{
//     res.send('Login World from the server');
// });
//
// app.get('/signup', (req, res) =>{
//     res.send('Register World from the server');
// });


app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})