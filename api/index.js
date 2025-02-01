import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

import Menu from './models/menuModel.js';
import Item from './models/itemModel.js';


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

app.use(express.static(path.join(__dirname,'./client/dist')))

app.post('/api/menus', async (req, res) => {
  const { name, description } = req.body;
  try {
    const newMenu = new Menu({ name, description });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create menu' });
  }
});


app.get('/api/menus', async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve menus' });
  }
});

app.post('/api/menu-items', async (req, res) => {
  const { menuId, name, description, price } = req.body;
  try {
    const newItem = new Item({ menuId, name, description, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create menu item' });
  }
});

app.get('/api/menu-items/:menuId', async (req, res) => {
  const { menuId } = req.params;
  try {
    const items = await Item.find({ menuId });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve menu items' });
  }
});


app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'client', 'dist','index.html'))
})

app.listen(3000, () => {
  console.log('app listen on port 3000');
});
