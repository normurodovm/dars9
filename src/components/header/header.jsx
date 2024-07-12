import React from "react";
import HeaderIcon2 from '../header/header-icon.svg'
import HeaderIcon3 from '../header/header-icon2.svg'
import HeaderIcon4 from '../header/header-icon3.svg'
import Headerlogo from '../header/header-logo.svg'
import headerimg from '../header/header-img.png'
export const Header = (icon,img) => {

   return <div className="header mb-[30px]"> <div className=" pb-[20px] header bg-white">
   <div className="container mx-auto px-[20px] max-w-[1270px]">
        <div className="flex gap-[100px] justify-end pt-[10px] pb-[8px]">
            <div className="flex gap-[10px]">
                <img src={HeaderIcon2} alt="" />
                <h2>Aloqa uchun</h2>
            </div>
            <div>
            <select className=" rounded-[5px]"  name="cars" id="cars">
  <option value="UZ">UZ</option>
  <option value="RUS">RUS</option>
  <option value="ENG">ENG</option>
</select>
            </div>
        </div>
            <div className="flex gap-[70px]">
                <img src={Headerlogo} />
                <img className="w-[149px] ml-[40px]" src={headerimg} alt="" />
                
                <div class="flex border-2 border-blue-500 overflow-hidden w-[400px] mx-auto font-[sans-serif] ml-0 mr-0">
        <input type="email" placeholder="Search Something..."
          class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
        <button type='button' class="flex items-center justify-center bg-[#007bff] px-5 text-sm text-white">
          Search
        </button>
      </div>
        <img className="ml-0 mr-0" src={HeaderIcon3} alt="" />
        <img className="ml-0 mr-0" src={HeaderIcon4} alt="" />
        <a className="btn" href="#">Kirish</a>
            </div>
    </div>
    </div>
    </div>
}