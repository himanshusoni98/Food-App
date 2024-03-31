import { useState } from "react";
import { useParams } from "react-router-dom";
import { ICON_URL, STAR_URL } from "../../constant";
import useRestaurentMenu from "../utilis/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurentMenu(resId);

    const[showIndex, setShowIndex] = useState(null)

    if (resInfo === null) return <Shimmer />;

    const resBasicInfo = resInfo?.cards.filter(
        (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )[0].card.card.info;
    
    
    const categoryCards = resInfo?.cards.filter((c) => c.groupedCard);
    
    const {
        name,
        cuisines,
        locality,
        costForTwoMessage,
        totalRatingsString,
        avgRating
    } = resBasicInfo;
    const { lastMileTravelString,deliveryTime , slaString} = resBasicInfo?.sla;
    const {icon, message} = resBasicInfo?.feeDetails;
    console.log(resBasicInfo)

    const categories =
        categoryCards[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    //console.log(categories)
    return (
        <div className="items-center md:w-1/2 m-auto">
        <div className="flex justify-between">
        <div className="flex-row-reverse  m-5">
            <h1 className="text-2xl font-bold">
            {name}
            </h1>
            <p className="text-sm pt-2 font-light ">
            {cuisines?.join(", ")}
            </p>
            <p className="text-md pt-2 font-light">
                {locality} , {lastMileTravelString}
            </p>
            <p className="text-md pt-2 font-light">Delivery Time :{deliveryTime} min</p>
        </div>
        <div className="flex-row-reverse m-10 border rounded-lg">
        <span className="flex ml-2 p-2">
            <img src={STAR_URL} className="w-4"/>
            <p className="text-green-900 font-extrabold text-xs">{avgRating}</p>
        </span>
            <hr></hr>
            <p className="text-xs my-2 p-1">{totalRatingsString}</p>
        </div>
        </div>
        <div className="flex ml-5 text-sm font-light mb-4">
        <img src={ICON_URL}/><p>{message && message.replace(/<\/?b>/g, '')}</p>
        </div>
        <hr></hr>
        <h1 className="ml-5 text-xl font-extrabold">{slaString}  {costForTwoMessage}</h1>
            <div>
            {categories?.map((category, index)=>(
                <RestaurentCategory key={category?.card?.card?.title} data={category?.card?.card}
                    showItem={index === showIndex ? true: false}
                    setShowIndex={()=>setShowIndex(index)}
                />
            ))}
            </div>
        </div>
    );
};

export default RestaurentMenu;
