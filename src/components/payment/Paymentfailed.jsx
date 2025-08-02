import React from "react";
import { HiOutlineXCircle } from "react-icons/hi";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

const PaymentFailed = () => {
  return (
    <div className="flex items-center justify-center mt-[10.25rem] mb-[10.188rem] w-full overflow-x-hidden">
      <div className="bg-[#F5F5F5] rounded-[0.625rem] w-[28.375rem] h-[54.375rem] px-[30.813] flex flex-col">
        <div className="failedmessage bg-[#992123] w-[28.375rem] h-[15.375rem] rounded-tr-[0.625rem] rounded-tl-[0.625rem] place-content-center place-items-center">
          <HiOutlineXCircle className="w-[6.125rem] h-[6.125rem] text-[#FFFFFF] text-center items-center justify-center mb-[0.625rem] mt-[2rem]" />
          <h2 className="text-[#FFFFFF] text-[25px] items-center justify-center text-center mb-[0.25rem] font-bold">
            پرداخت ناموفق
          </h2>
          <p className="text-[#FFFFFF] text-[18px] items-center justify-center text-center font-normal mb-[0.625rem]">
            متاسفانه پرداخت شما تکمیل نشد
          </p>
        </div>

        <div className="failedinfo">
          <ul className="flex flex-row mx-[0.875rem]">
            <li className="mt-[1.438rem] mr-[0.875rem] w-[7.25rem] h-[2.063rem] text-[20px]">
              شماره سفارش
            </li>
            <li className="mt-[1.438rem] w-[6.25rem] h-[1.875rem] ml-[0.875rem] mr-[13.125rem] text-[18px]">
              458923475
            </li>
          </ul>

          <div className="w-[26.625rem] h-[1px] bg-[#C9D4DF] mx-[0.875rem] mt-[0.625rem]"></div>

          <ul className="flex flex-row mx-[0.875rem] gap-[8rem]">
            <li className="mt-[1.438rem] mr-[0.875rem] w-[7.25rem] h-[2.063rem] text-[20px]">
              زمان تلاش
            </li>
            <li className="mt-[1.438rem] w-[1.125rem] h-[1.875rem] ml-[0.875rem]  text-[18px] flex flex-row gap-x-[0.5rem] justify-between">
              <span>13:09</span>
              <span>-</span>
              <span>1400/05/09</span>
            </li>
          </ul>

          <div className="w-[26.625rem] h-[1px] bg-[#C9D4DF] mx-[0.875rem] mt-[0.625rem]"></div>

          <ul className="flex flex-row mx-[0.875rem]">
            <li className="mt-[1.438rem] mr-[0.875rem] w-[6.688rem] h-[2.063rem] text-[20px] whitespace-nowrap">
              مبلغ پرداخت
            </li>
            <li className="mt-[1.438rem] w-[6.75rem] h-[1.875rem] ml-[0.875rem] mr-[13.125rem] text-[18px]">
              11200000تومان
            </li>
          </ul>
        </div>

        <div className="failedreason bg-[#FFD9D9] mx-[0.875rem] mt-[1.125rem] mb-[1.438rem] border-[#AF0A0D] border-[0.063rem] rounded-[0.625rem] text-[#AF0A0D]">
          <div className="flex flex-row title mt-[1.125rem] mx-[1.125rem] gap-[0.375rem] items-center">
            <FaCircleExclamation className="w-[1.75rem] h-[1.75rem] ml-[0.375rem]" />
            <p className="text-[20px] font-bold">علت عدم احتمالی</p>
          </div>

          <div className="menu mt-[1rem] mx-[1.125rem] mb-[1.438rem]">
            <ul className="pl-6 list-disc pr-[7.063rem] text-[15px]">
              <li>عدم موجودی کافی در حساب</li>
              <li>مشکل موقت در درگاه پرداخت</li>
              <li>اطلاعات کارت نامعتبر</li>
            </ul>
          </div>
        </div>
        <div
          className="chargemessage mx-[0.875rem] w-[26.625rem] bg-[#C4D6E0] border-[#8BABBC] border-[0.063rem]
           pr-[3.625rem] pl-[3.625rem] pt-[0.25rem] pb-[0.25rem] rounded-[0.625rem]"
        >
          <p className="text-[15px] text-[#2A6E93] w-[19.438rem] h-[5.938rem] border-[0.013rem] border-[#C4D6E0] 
           place-content-center place-items-center items-center text-justify font-bold">
            در صورت اینکه مبلغ از حساب شما کسر شده است تا 24 ساعت آینده به حساب
            شما باز خوواهد گشت درغیر اینصورت با پشتیبانی تماس بگیرید
          </p>
        </div>

        <input  
          type="button"
          value="بازگشت به سبد خرید"
          className="bg-[#AF0A0D] border-[#AF0A0D] w-[26.625rem] h-[3.688rem] rounded-[10px] 
          mt-[1.75rem] mx-[0.875rem] text-[25px] text-[#FFFFFF] text-center font-bold cursor-pointer hover:bg-[#f83236] "
        />

        <div className="flex flex-col items-center justify-center mt-6 mb-[0.625rem] help">
          <p className="text-[13px] text-[#283944] text-center mb-2">
            برای راهنمایی بیشتر با پشتیبانی تماس بگیرید
          </p>
          <div className="flex flex-row items-center justify-center bg-[#D2D2D2] border-[#767676] border-[0.063rem] rounded-[0.625rem] px-4 py-1 gap-2 mb-[0.625rem] h-[1.688rem]">
            <FaPhone />
            <p>458923475</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
