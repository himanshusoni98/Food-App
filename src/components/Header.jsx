
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../constant";
import useOnlineStatus from "../utilis/useOnlineStatus";

const Header = () => {

    const [btnName, setBtnName] = useState("Sig in")

    const OnlineStatus = useOnlineStatus();

    const cartItems = useSelector((store)=>store.cart.items);
    return (
    <div className="flex flex-col sm:flex-row justify-between shadow-lg bg-blue-100  sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-gray-100">
    <div className="flex justify-center items-center sm:justify-center sm:items-start w-full sm:w-auto ">
        <img
            className="sm:w-40 sm:ml-40 sm:mt-4"
            src={LOGO_URL}
        ></img>
    </div>
    <div className="flex justify-center sm:justify-end items-center w-full sm:w-auto">
        <ul className="flex flex-wrap p-5 m-5">
            <li className="px-4 mb-2 sm:mb-0">OnlineStatus: {OnlineStatus ? "Online" : "offline"}</li>
            <li className="px-4 mb-2 sm:mb-0 hover:text-orange-500">
            <Link to="body" className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Home</Link>
            </li>
            <li className="px-4  hover:text-orange-500">
            <Link to="#">Offers</Link><sup className="text-orange-500">NEW</sup>
            </li>
            <li className="px-4  hover:text-orange-500">
            <Link to="about">Help</Link>
            </li>
            <li className="px-4  hover:text-orange-500 flex">
            <Link to="cart" className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg><sup>{cartItems.length}</sup></Link>
            </li>
            <li className="px-4  hover:text-orange-500">
            <button className="border px-6 rounded-2xl flex" onClick={()=>{
                btnName==="Sig in" ?
                setBtnName("Sig out"):
                setBtnName("Sig in")}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                {btnName}</button>
            </li>
        </ul>
    </div>
    </div>
);
};

export default Header;