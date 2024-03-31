
import { useState } from 'react';

const About = () => {
  const [showIndex, setShowIndex] = useState(false);
  const [showItems , setShowItems] = useState(false)

  const handleClick = () => {
    setShowIndex(!showIndex);
    setShowItems(false);
  }
  const showItemClick = ()=>{
    setShowItems(!showItems);
    setShowIndex(false);
  }
  return (
    <div className="">
      <h1 className="text-3xl font-bold ">Help & Support</h1>
      <p>Let's take a step ahead and help you better.</p>
      <div className="bg-white sm:w-8/12  items-center border m-auto mt-6">
        <h1 className="text-2xl font-bold">Partner Onboarding</h1>
        <div className="">
        <div className="flex justify-between bg-gray-50 m-3 shadow-lg">
          <span className="p-4 font-bold cursor-pointer" onClick={handleClick}>I want to partner my restaurant with Swiggy</span>
          <span><img src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png" className="w-8 my-2 mx-2 cursor-pointer"/></span>
        </div>
        {showIndex && (
          <div className="ml-6">
          <h3 >Partner with us</h3>
          <button className="border border-orange-400 p-3 text-orange-500 font-extrabold">Send An Email</button>
          </div>
        )}
        </div>
        <div className="flex justify-between bg-gray-50 m-3 shadow-lg">
          <span className="p-4 font-bold cursor-pointer" onClick={showItemClick}>What are the mandatory documents needed to list my restaurant on Swiggy?</span>
          <span><img src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png" className="w-8 my-2 mx-2 cursor-pointer"/></span>
        </div>
        {showItems &&(
        <div className="ml-6 font-light">
        <p>- Copies of the below documents are mandatory</p>
        <p>- FSSAI Licence OR FSSAI Acknowledgement</p>
        <p>- Pan Card</p>
        <p>- GSTIN Certificate</p>
        <p>- Cancelled Cheque OR bank Passbook</p>
        <p>- Menu</p>
        </div>
        )}
      </div>
    </div>
  )
}

export default About