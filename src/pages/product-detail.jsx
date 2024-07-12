import React from "react";
import { useParams } from "react-router-dom";
import { categoryData } from "../data/categories";
import categoryimg1 from '../assets/img/detail-img.png'

export const ProductDetail = () => {
  const obj = useParams();
  const data = categoryData.find((item) => item.id == obj.id);
  return (
    <div className="max-w-[1200px] mx-auto mt-[100px] flex gap-14">
      <h1 className="text-4xl">{data?.name}</h1>
      <img className="w-[546px] " src={categoryimg1} alt="img" />
     <div>
      
      <p className="text-4xl">{data.description}</p>
     <p className="text-3xl mb-[30px] mt-[30px]">{data.count}</p>
      <p className="text-2xl mb-[60px]">{data.price}</p>
      <a className=" text-2xl bg-green-500 p-[20px] rounded-[15px]"  href="#">BUYURTMA BERISH</a>
      </div>
    </div>
  );
};
