import Item from '../src/components/Item';
import './Menu.css';
import juice from '../src/assets/juice.png';
import cocktail from '../src/assets/cocktail.png';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';





const Menu = () => {

  const { menuId } = useParams(); 
  const [menu, setMenu] = useState([
    {
        "_id": "679c03b0a227e137d48d3d88",
        "menuId": "679c01eaa227e137d48d3d86",
        "name": "LYCHEETINI",
        "description": "A refreshing lychee cocktail lychee cocktaillychee cocktail lychee cocktail vlychee cocktail.",
        "price": 10.99,
        "__v": 0
    },
    {
        "_id": "679c03b0a227e137d48d3d88",
        "menuId": "679c01eaa227e137d48d3d86",
        "name": "cooldrink",
        "description": "A refreshing cool and best lychee cocktail.",
        "price": 10.99,
        "__v": 0
    },

    {
        "_id": "679c03c1a227e137d48d3d8a",
        "menuId": "679c01eaa227e137d48d3d86",
        "name": "New drink",
        "description": "A cocktail.",
        "price": 10.99,
        "__v": 0
    }
]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      if(menuId){
        setMenu([])
      try {
        const response = await fetch(`/api/menu-items/${menuId}`);
        const data = await response.json();
        setMenu(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };}

    fetchMenuItems();
  }, [menuId]);

  return (
    <div>
      <div className="bg-im w-full flex flex-col justify-center items-center">
        <h1 className="text-white font-[Oswald] font-semibold text-[40px] sm:text-[75px] text-[#800020] [text-shadow:4px_3px_0px_#800020]">
          MENU
        </h1>
        <p className="text-[#BBBBBB] indent-5  max-w-[350px] sm:max-w-[600px] text-center sm:indent-[10px] text-[16px] sm:text-[18px] font-[KellySlab]">
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </p>
      </div>

      <div className="bg-im2 w-full"></div>
      <div className="bg-im3 w-full relative flex justify-center items-center">
        <div className=" border border-1 sm:min-h-[416px] h-auto flex flex-col   border-white pt-7 pl-5 sm:pl-5 pr-25 pb-35 sm:pb-30 min-h-[466px] w-[85%] ">
          <div className=' flex justify-center'>
          <h1 className="text-white font-[Oswald] mt-5 max-w-30 sm:max-w-full indent-3 font-semibold text-[30px] sm:text-[50px] text-[#800020] [text-shadow:4px_3px_0px_#800020]">
            BRUNCH COCKTAILS
          </h1>
          </div>
          <div className='flex max-w-fit flex-wrap gap-10 justify-start pl-3 pt-5 sm:pl-15 sm:pt-10 '>

          {menu && menu.map(item => (
              <Item key={item._id} item={item} /> 
            ))}

          


          </div>
          
        </div>
        
        <img
          src={juice}
          alt="juice"
          className="absolute h-[120px] w-[86px] left-5 top-4 sm:top-0 sm:left-15 sm:w-[170px] sm:h-[230px]"
        />
        <img
          src={cocktail}
          alt="juice"
          className="absolute bottom-5 h-[91px] right-10 sm:bottom-20 sm:right-25 sm:w-[170px] sm:h-[230px]"
        />
      </div>
    </div>
  );
};

export default Menu;
