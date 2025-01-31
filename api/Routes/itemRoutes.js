
import express from 'express';
import Item from '../models/itemModel.js';

const router = express.Router();


router.post('/', async (req, res) => {
  const { menuId, name, description, price } = req.body;
  try {
    const newItem = new Item({ menuId, name, description, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create menu item' });
  }
});

router.get('/:menuId', async (req, res) => {
  const { menuId } = req.params;
  try {
    const items = await Item.find({ menuId });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve menu items' });
  }
});

export default router;
