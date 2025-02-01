

const Item = ({item}) => {
  return (
    <div className="text-white">
    <div className="w-[260px] h-[66px]  sm:w-[467px] flex flex-col sm:gap-1 mb-5   ">
    <div className=" flex justify-between  uppercase font-[Oswald] text-[16px]  sm:text-[26px]">
    <h1 className="">{item.name}</h1>
    <h1>${item.price}</h1>
    </div>
    <p className=" font-[Kelly-Slab] text-[14px] sm:text-[18px] break-words">{item.description}</p>
    </div>
    </div>
  )
}

export default Item
