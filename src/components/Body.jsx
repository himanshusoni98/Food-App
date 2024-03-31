
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MAIN_API } from "../../constant";
import useOnlineStatus from "../utilis/useOnlineStatus";
import ResCard, { withPramotedLable } from "./ResCard";
const Body = () => {
    const [listOfRest, setListOfRest] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurentCardPromoted = withPramotedLable(ResCard);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(MAIN_API);
        const json = await data.json();
        console.log(json)
        setListOfRest(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setfilteredRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };
    

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return
    <h1>offline</h1>

    // return listOfRest?.length === 0 ? (
    //     <Shimmer />
    // ) :
    return (
        <>
            <div className="mx-12">
                <div className="font-bold text-3xl text-center p-6">
                    <h1>Restaurants with online food delivery in Lucknow</h1>
                </div>
                <div className="flex">
                    <input className="border border-solid border-black p-2 rounded-lg mr-2 ml-12" type="text" placeholder="search name" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value.toLowerCase())
                    }}></input>
                    <button className="search-name bg-red-500 px-4 py-2 rounded-lg" onClick={() => {
                        const filterRestaurent = listOfRest.filter((resList) => resList.info.name.toLowerCase().includes(searchText)
                        );
                        setfilteredRestaurant(filterRestaurent);
                    }}>Search</button>
                    <button className="border px-6 ml-2 rounded-3xl bg-green-300" onClick={() => {
                        const filteredList = listOfRest?.filter((resList) => resList?.info);
                        setfilteredRestaurant(filteredList);
                    }}>Home</button>
                    <button className="border px-6 ml-2 rounded-3xl" onClick={() => {
                        const filteredList = listOfRest?.filter((resList) => resList?.info?.avgRating > 4.0);
                        setfilteredRestaurant(filteredList);
                    }}>Rating 4.0+</button>
                    <button className="border px-6 ml-2 rounded-3xl" onClick={() => {
                        const filteredList = listOfRest?.filter((resList) => resList?.info?.sla?.deliveryTime < 25);
                        setfilteredRestaurant(filteredList)
                    }}>Fast Delivery</button>
                    <button className="border px-6 ml-2 rounded-3xl" onClick={() => {
                        const filteredList = listOfRest.filter((resList) => {
                        const costForTwo = parseInt(resList?.info?.costForTwo
                            .replace("₹", "")
                            .replace(" for two", "")
                            .trim());
                        return costForTwo > 300 && costForTwo<=600});
                        setfilteredRestaurant(filteredList)
                    }}>₹300-₹600</button>
                    <button className="border px-6 ml-2 rounded-3xl" onClick={() => {
                        const filteredList = listOfRest.filter((resList) => {
                        const costForTwo = parseInt(resList?.info?.costForTwo
                            .replace("₹", "")
                            .replace(" for two", "")
                            .trim());
                        return costForTwo <= 300});
                        setfilteredRestaurant(filteredList)
                    }}>Less ₹300</button>
                    <button className="border px-6 ml-2 rounded-3xl" onClick={() => {
                        const filteredList = listOfRest.filter((resList) => resList?.info?.veg === true);
                        setfilteredRestaurant(filteredList);
                    }}>Pure Veg</button>
                </div>
                <div className="flex flex-wrap ml-10 ">
                    {filteredRestaurant?.map((rescard) => (
                        <Link
                            key={rescard.info.id}
                            to={"/restaurent/" + rescard?.info?.id}>
                            {rescard?.data?.promoted ? (
                                <RestaurentCardPromoted resData={rescard} />
                            ) : (
                                <ResCard resData={rescard} />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Body;
