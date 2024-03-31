import { useDispatch, useSelector } from 'react-redux';
import CategoryList from "./CategoryList";
import { clearCart, removeItem } from './cartSlice';

const Carts = () => {
  const cartItems = useSelector((store)=>store.cart.items);
  const dispatch = useDispatch();
  const handleClearItem = ()=>{
    dispatch(clearCart())
  }
  const handleRemoveItem = () =>{
    dispatch(removeItem())
  }
  return(
    <div className="text-center w-6/12 items-center m-auto">
    <h1 className='font-bold text-4xl m-4 p-4'>CART</h1>
    <div className='flex '>
    <button className='border bg-red-400 m-4 rounded-full px-4 py-2' onClick={handleRemoveItem}>Delete Item</button>
    <button className='border bg-red-400 m-4 rounded-full px-4 py-2' onClick={handleClearItem}>Clear Cart</button>
    </div>
    {cartItems.length===0 && <h1 className='font-bold text-2xl'>OOPS! Your Cart is Empty <br/> Add Some Items</h1>}
    <CategoryList items={cartItems}/>
    </div>
  )
};
export default Carts;
