import React from "react";

const CategorisBox = () => {
  return (
    <div className="border-[2px] border-[#00395D] rounded-[5px] pr-[32px] pl-[32px] pt-[32px] w-[445px] h-[373px] ">

      <h2 className="mb-2 text-xl font-bold text-right text-[#283944]">دسته‌بندی</h2>


      <div className="flex flex-row gap-[17px] mb-4 pt-[18px] ">
        <div className="w-[30px] h-[10px] bg-[#004773] rounded-full"></div>
        <div className="w-[221px] h-[10px] bg-[#004773]  rounded-full"></div>
      </div>


      <div className="flex flex-row justify-between text-right list text-[18px] pt-[18px] pb-[18px]">
        <ul className="space-y-8">
          <li>کتونی</li>
          <li>استایل کژوال</li>
          <li>ست کردن </li>
          <li>راهنمای خرید</li>
        </ul>
        <ul className="space-y-8 text-[#FAFAFA] ">
          <li className="bg-[#004773] border rounded-[50px]">11</li>
          <li className="bg-[#004773] border rounded-[50px]">11</li>
          <li className="bg-[#004773] border rounded-[50px]">11</li>
          <li className="bg-[#004773] border rounded-[50px]">11</li>
        </ul>
      </div>
    </div>
  );
};

export default CategorisBox;
