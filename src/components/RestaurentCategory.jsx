import { useState } from "react";
import CategoryList from "./CategoryList";

const RestaurentCategory = ({ data, showItem , setShowIndex , showIndex}) => {

    const [isOpen , setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
        setShowIndex(isOpen ? null : data.id);
    }
    return (
        <div>
            <div className="m-auto  ">
                <div className="flex justify-between bg-gray-50 m-3 shadow-lg cursor-pointer" onClick={handleClick}>
                    <span className="p-4 font-bold">{data.title} ({data.itemCards.length})</span>
                    <span><img src={isOpen?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXVwIj48cGF0aCBkPSJtNSAxMiA3LTcgNyA3Ii8+PHBhdGggZD0iTTEyIDE5VjUiLz48L3N2Zz4=":
                    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LWRvd24iPjxwYXRoIGQ9Ik0xMiA1djE0Ii8+PHBhdGggZD0ibTE5IDEyLTcgNy03LTciLz48L3N2Zz4="
                    }
                    className="w-6 my-4 mx-2"
                    alt={isOpen ? "Collapse" : "Expand"}>
                    </img></span>
                </div>
                {isOpen && <CategoryList items={data.itemCards} />}
            </div>
        </div>

    )
}

export default RestaurentCategory;