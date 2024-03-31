import { useDispatch } from "react-redux";
import { MENU_IMG } from "../../constant";
import { addItem } from "./cartSlice";

const CategoryList = ({ items }) => {

    const dispatch = useDispatch();

    const handleItemAdd = (item)=>{
        dispatch(addItem(item))
    }
        return (
        <>
            <div>
                {items.map((item) => (
                    <div key={item.card?.info?.id} className="border-b-2 flex justify-between ">
                        <div className="text-left w-9/12 ml-6 cursor-pointer">
                            <span>{item.card.info.name}</span><br></br>
                            <span>₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                            <p className="text-sm font-light cursor-pointer">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12">
                            <div className="absolute">
                                <button className="bg-red-500 text-white mx-16 my-24 px-2 rounded-lg"
                                onClick={()=>handleItemAdd(item)}> Add</button>
                            </div>
                            <img src={MENU_IMG + item.card.info.imageId} className=" text-right w-44 h-24 my-4 rounded-lg cursor-pointer" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CategoryList