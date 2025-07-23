import React from "react";



const PopularArticles = () => {
    return(
    <div className="border-[2px] border-[#00395D] rounded-[5px] pr-[26px] pl-[32px] w-[445px] h-[373px] ">

      <h2 className="text-xl font-bold text-right text-[#283944] mt-[17px] ">مقالات پرطرفدار</h2>


      <div className="flex flex-row gap-[17px] mb-[7px] mt-[15px] pt-[18px] ">
        <div className="w-[30px] h-[10px] bg-[#004773] rounded-full"></div>
        <div className="w-[221px] h-[10px] bg-[#004773]  rounded-full"></div>
      </div>


      <div className="flex flex-row justify-between text-right list text-[18px] pt-[18px] pb-[18px]">
        <ul className="space-y-3">
          <li>
            <img src="/src/assets/images/Frame 3524.jpg" alt="" />
          </li>
          <li>
             <img src="/src/assets/images/Frame 3524.jpg" alt="" />
          </li>
          <li>
             <img src="/src/assets/images/Frame 3524.jpg" alt="" />
          </li>
        </ul>
        <ul className="space-y-10 text-[#FAFAFA] ">
          <li className="border rounded-[50px]">
            <p className="text-[#283944]">استایل شیک و راحت</p>
            <p className="text-[#283944CC]">3 اسفند    1379</p>
          </li>
          <li className="border rounded-[50px]">
            <p className="text-[#283944]">استایل شیک و راحت</p>
            <p className="text-[#283944CC]">3 اسفند    1379</p>
          </li>
          <li className="border rounded-[50px]">
            <p className="text-[#283944]">استایل شیک و راحت</p>
            <p className="text-[#283944CC]">3 اسفند    1379</p>
          </li>
        </ul>
      </div>
    </div>
    );
};
export default PopularArticles;