import { CDN_URL, STAR_URL } from "../../constant";

const ResCard =(props)=>{
    const {resData}= props;
    const {cloudinaryImageId, name , cuisines , locality , costForTwo , avgRating } = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    return(
        <div className="  p-2 m-4 w-[300]">
            <img className="rounded-lg w-[300] h-[200]" src={CDN_URL
            +cloudinaryImageId}>
            </img>
            <h4 className="font-bold py-1 text-lg">{name}</h4>
            <div className="flex ">
            <p className="font-bold flex items-center">
            <img src={STAR_URL} className="w-4 h-4 text-lg"/>
            {avgRating}
            </p>
            <p className="ml-10">{costForTwo}</p>
            <p className="ml-14">{deliveryTime} min</p>
            </div>
            <p className="font-light text-nowrap overflow-hidden text-ellipsis">{cuisines?.join(", ")}</p>
            <p className="font-light">{locality}</p>
            
        </div>
    )

}
export const withPramotedLable = (ResCard)=>{
    return(props)=>{
        return(
            <div className="bg-black text-white">
                <lable>PRAMOTED</lable>
                <ResCard {...props}/>
            </div>
        )
    }
}
export default ResCard;