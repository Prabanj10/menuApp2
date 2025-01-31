

const Item = ({item}) => {
  return (
    <div className="text-white">
    <div className="w-[370px] h-[66px] sm:w-[467px] flex flex-col gap-1  ">
    <div className="flex justify-between uppercase font-[Oswald] text-[16px]  sm:text-[26px]">
    <h1 className="">{item.name}</h1>
    <h1>${item.price}</h1>
    </div>
    <p className="font-[Kelly-Slab] text-[14px] sm:text-[18px]">Please food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
    </div>
    </div>
  )
}

export default Item