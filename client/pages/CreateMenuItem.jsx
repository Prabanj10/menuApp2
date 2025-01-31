
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const CreateMenuItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const { menuId } = useParams(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/menu-items', { menuId, name, description, price });
      window.location.reload();
    } catch (error) {
      console.error('Failed to create menu item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default CreateMenuItem;
