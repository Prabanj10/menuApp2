import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors'

import menuRouter from './routes/menuRoutes.js';
import itemRouter from './routes/itemRoutes.js';
import path from 'path'

const app = express();
const __dirname = path.resolve();

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log('database connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use('/api/menus', menuRouter);
app.use('/api/menu-items', itemRouter);
app.use(express.static(path.join(__dirname,'./client/dist')))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'client', 'dist','index.html'))
})

app.listen(3000, () => {
  console.log('app listen on port 3000');
});
