import React from "react";



const PopularArticles = () => {
    return(
    <div className="border-[0.125rem] border-[#00395D] rounded-[0.313rem] pr-[1.625rem] pl-[2rem] w-[27.813rem] h-[23.313rem] ">

      <h2 className="text-xl font-black text-right text-[#283944] mt-[1.063rem] ">مقالات پرطرفدار</h2>


      <div className="flex flex-row gap-[1.063rem] mb-[0.438rem] mt-[0.2rem] pt-[1rem] ">
        <div className="w-[1.875rem] h-[0.625rem] bg-[#004773] rounded-full"></div>
        <div className="w-[13.813rem] h-[0.625rem] bg-[#004773]  rounded-full"></div>
      </div>


      <div className="flex flex-row justify-between text-right list text-[18px] pt-[1.125rem] pb-[1.125rem]">
        <ul className="space-y-3">
          <li>
            <img src="/src/assets/images/Popularimg.jpg" alt="" />
          </li>
          <li>
             <img src="/src/assets/images/Popularimg.jpg" alt="" />
          </li>
          <li>
             <img src="/src/assets/images/Popularimg.jpg" alt="" />
          </li>
        </ul>
        <ul className="space-y-5 text-[#FAFAFA] ">
          <li className="border rounded-[3.125rem]">
            <p className="text-[#283944] mb-[1rem] font-extrabold">استایل شیک و راحت</p>
            <p className="text-[#283944CC]">3 اسفند    1379</p>
          </li>
          <li className="border rounded-[3.125rem]">
            <p className="text-[#283944] mb-[1rem] font-extrabold">استایل شیک و راحت</p>
            <p className="text-[#283944CC]">3 اسفند    1379</p>
          </li>
          <li className="border rounded-[3.125rem]">
            <p className="text-[#283944] mb-[1rem] font-extrabold">استایل شیک و راحت</p>
            <p className="text-[#283944CC]">3 اسفند    1379</p>
          </li>
        </ul>
      </div>
    </div>
    );
};
export default PopularArticles;