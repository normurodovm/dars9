import React from "react";
import { Link } from "react-router-dom";
import { categoryData } from "../data/categories";
import categoryimg1 from '../assets/img/category1.png'
import { SamplePrevArrow } from "../components/slider/SamplePrevArrow";
import { SampleNextArrow } from '../components/slider/SampleNextArrow'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderimg from '../assets/img/slider-img.png'
export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:2000, 
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <div className="container mx-auto px-[20px] max-w-[1270px] mb-[100px] mt-[70px]">
  <Slider {...settings}>
      
          <div>
            <img src={sliderimg} alt="" />
          </div>
          <div>
            <img src={sliderimg} alt="" />
          </div>
          <div>
            <img src={sliderimg} alt="" />
          </div>
    </Slider>
    </div>
    <div className="max-w-[1200px] mx-auto flex flex-wrap gap-[20px]">
      {categoryData.map((item) => (<div className="">
        <Link to={`/products/product-detail/${item.id}`} key={item.id}>
          <div className="w-[205px] h-[400px] pl[10px] pt[10px] bg-white pt-[9px] pb-[33px] rounded-lg text-center">
            <div className=" inline">
          <img className="mx-auto" src={categoryimg1} alt="img" />
          <h2 className="text-base mb-2 mt-2">{item.name}</h2>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p className="mb-[30px] mt-[15px]">{item.count}</p>
          <a className="p-[10px] bg-blue-500  rounded-[10px] text-white" href="#">Sotib olish</a>
          </div>
          </div>
        </Link>
        </div>
      ))}
    </div>
    </>
  );
};
