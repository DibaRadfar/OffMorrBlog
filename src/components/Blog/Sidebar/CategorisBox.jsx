import React from "react";

const CategorisBox = () => {
  return (
    <div className="border-[0.125rem] border-[#00395D] rounded-[0.313rem] pr-[2rem] pl-[2rem] pt-[2rem] w-full h-[23.313rem] mt-[1.688rem] ">

      <p className="mb-2 text-xl text-right text-[#283944] font-black">دسته‌بندی</p>


      <div className="flex flex-row gap-[1.063rem] mb-4 pt-[1.125rem] ">
        <div className="w-[1.875rem] h-[0.625rem] bg-[#004773] rounded-full"></div>
        <div className="w-[13.813rem] h-[0.625rem] bg-[#004773]  rounded-full"></div>
      </div>


      <div className="flex flex-row justify-between text-right list text-[18px] pt-[1.125rem] pb-[1.125rem]">
        <ul className="space-y-8">
          <li>کتونی</li>
          <li>استایل کژوال</li>
          <li>ست کردن </li>
          <li>راهنمای خرید</li>
        </ul>
        <ul className="space-y-7 text-[#FAFAFA] ">
          <li className="bg-[#004773] border w-[1.875rem] h-[1.875rem] rounded-full text-center place-items-center text-[18px]">11</li>
          <li className="bg-[#004773] border w-[1.875rem] h-[1.875rem] rounded-full text-center place-items-center text-[18px]">11</li>
          <li className="bg-[#004773] border w-[1.875rem] h-[1.875rem] rounded-full text-center place-items-center text-[18px]">11</li>
          <li className="bg-[#004773] border w-[1.875rem] h-[1.875rem] rounded-full text-center place-items-center text-[18px]">11</li>
        </ul>
      </div>
    </div>
  );
};

export default CategorisBox;
