import React from "react";
import bestimg from '../../assets/img/best-img1.png'
 export const Best = ({price,description,count,img}) => {
    return <div className="bg-white w-[220px] p-[10px] rounded-[10px]">
        <img className="w-[180px] mx-auto " src={bestimg} alt="" />
        <p className="text-lg text-blue-700 font-medium mb-[6px]">{price}</p>
        <div className="mb-[33px]">
            <p className="">{description}</p>
        </div>    
        <p className="text-gray-500 mb-[25px]">{count}</p>
        <div>
            <button className="bg-blue-600 p-[10px] rounded-lg font-medium text-white pl-[15px] mb-[23px]">Sotib olish</button>
        </div>
    </div>
 }