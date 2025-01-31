import express from 'express';
import Menu from '../models/menuModel.js';

const router = express.Router();


router.post('/', async (req, res) => {
  const { name, description } = req.body;
  try {
    const newMenu = new Menu({ name, description });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create menu' });
  }
});


router.get('/', async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve menus' });
  }
});

export default router;
