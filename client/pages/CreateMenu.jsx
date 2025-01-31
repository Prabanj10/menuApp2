import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';



const CreateMenu = () => {
    const navigate = useNavigate()
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/menus', { name, description })
      .then((res)=>{
        const createdMenu = res.data;
        navigate(`createmenuitem/${createdMenu._id}`)

      })
    } catch (error) {
      console.error('Failed to create menu:', error);
    }

  };

  return (
    <div>
    <form  onSubmit={handleSubmit}>
      <input type="text" placeholder="Menu Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Create Menu</button>
    </form>
    </div>
  );
};

export default CreateMenu;
