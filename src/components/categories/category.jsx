import React from "react";

export const Category = ({img,title,id}) => {
    return <div>
        <div className="max-w-[135px] bg-white pt-[9px] pb-[33px] h-[200px] rounded-lg text-center">
            
        <img className="mb-[3px] " src={img} alt="img" />
        <h2 className="text-base">{title}</h2>
        </div>
        
    </div>
}