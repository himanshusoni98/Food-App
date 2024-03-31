import { useEffect, useState } from "react";
import { MAIN_API } from "./constant";

const useListOfRestaurent = () => {

    const [listOfRestaurent , setListOfRestaurent] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(MAIN_API);
        const json = await data?.json();
        console.log(json);
        setListOfRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
  return listOfRestaurent
}

export default useListOfRestaurent