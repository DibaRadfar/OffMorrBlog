import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center mt-[10.25rem] mb-[10.188rem]">
      <div className="bg-[#F5F5F5] rounded-[0.625rem] w-[28.375rem] h-[54.375rem] px-[30.813] flex flex-col">
        <div className="failedmessage bg-[#2F8B2F] w-[28.375rem] h-[15.375rem] rounded-tr-[0.625rem] rounded-tl-[0.625rem] place-content-center place-items-center">
          <FaRegCheckCircle className="w-[6.125rem] h-[6.125rem] text-[#FFFFFF] text-center items-center justify-center mb-[0.625rem] mt-[2.5rem]" />
          <h2 className="text-[#FFFFFF] text-[25px] items-center justify-center text-center mb-[0.25rem] mt-[0.625rem] font-bold">پرداخت با موفقیت انجام شد
          </h2>
        </div>

        <div className="successinfo bg-[#DCF3DC] border-[#2F8B2F] border-[0.063rem] mx-[0.875rem] mt-[3.188rem] rounded-[0.625rem] h-[26.375rem]">
          <ul className="flex flex-row mr-[0.875rem] w-[23.75rem] gap-[10.25rem]">
            <li className="mt-[1.438rem] mr-[0.875rem] w-[7.25rem] h-[2.063rem] text-[20px] whitespace-nowrap">
              شماره سفارش
            </li>
            <li className="mt-[1.438rem] w-[6.25rem] h-[1.875rem] ml-[0.875rem] mr-[2rem] text-[18px] whitespace-nowrap pl-[1.438rem]">
              458923475
            </li>
          </ul>

          <div className="w-[23.75rem] h-[1px] bg-[#C9D4DF] mx-[0.875rem] mt-[0.625rem]"></div>

          <ul className="flex flex-row mx-[0.875rem] gap-[8rem]">
            <li className="mt-[1.438rem] mr-[0.875rem] w-[7.25rem] h-[2.063rem] text-[20px] whitespace-nowrap">
                تاریخ
            </li>
            <li className="mt-[1.438rem] w-[1.125rem] h-[1.875rem] ml-[0.875rem] mr-[2.6rem]  text-[18px] justify-between whitespace-nowrap pl-[1.438rem]">
              <span>1400/05/09</span>
            </li>
          </ul>

          <div className="w-[23.75rem] h-[1px] bg-[#C9D4DF] mx-[0.875rem] mt-[0.625rem]"></div>

          <ul className="flex flex-row mx-[0.875rem]">
            <li className="mt-[1.438rem] mr-[0.875rem] w-[6.688rem] h-[2.063rem] text-[20px] whitespace-nowrap">
                مبلغ کل
            </li>
            <li className="mt-[1.438rem] w-[6.75rem] h-[1.875rem] ml-[0.875rem] mr-[13.125rem] text-[18px] whitespace-nowrap pl-[1.438rem]">
              11200000تومان
            </li>
          </ul>
          <div className="w-[23.75rem] h-[1px] bg-[#C9D4DF] mx-[0.875rem] mt-[0.625rem]"></div>
          
          <ul className="flex flex-row mx-[0.875rem]">
            <li className="mt-[1.438rem] mr-[0.875rem] w-[7.25rem] h-[2.063rem] text-[20px] whitespace-nowrap">
                روش پرداخت
            </li>
            <li className="mt-[1.438rem] w-[6.25rem] h-[1.875rem] ml-[0.875rem] mr-[13.125rem] text-[18px] whitespace-nowrap pl-[1.438rem]">
                آنلاین درگاه
            </li>
          </ul>

          <div className="w-[23.75rem] h-[1px] bg-[#C9D4DF] mx-[0.875rem] mt-[0.625rem]"></div>
          <ul className="flex flex-row mx-[0.875rem]">
            <li className="mt-[1.438rem] mr-[0.875rem] w-[7.25rem] h-[2.063rem] text-[20px] whitespace-nowrap">
                وضعیت ارسال
            </li>
            <li className="mt-[1.438rem] w-[6.25rem] h-[1.875rem] ml-[0.875rem] mr-[11.5rem] text-[18px] whitespace-nowrap pl-[1.438rem]">
              458923475
            </li>
          </ul>
        </div>
        
        <div className="flex flex-row mt-[2.188rem] mb-[3.563rem]">
        <input  
          type="button"
          value="پیگیری سفارش"
          className="bg-[#2F8B2F] border-[#2F8B2F] w-[26.625rem] h-[3.688rem] rounded-[10px] 
           mx-[0.875rem] text-[18px] text-[#FFFFFF] text-center font-bold cursor-pointer mt-[2.188rem] mb-[3.563rem]"
        />
        <input  
          type="button"
          value="بازشگت به صفحه اصلی"
          className="bg-[#FFFFFF] border-[#2F8B2F] border-[0.125rem] w-[26.625rem] h-[3.688rem] rounded-[10px] 
           mx-[0.875rem] text-[18px] text-[#283944] text-center font-bold cursor-pointer mt-[2.188rem] mb-[3.563rem]"
        />
        </div>

      </div>
    </div>
  );
};

export default PaymentSuccess;
