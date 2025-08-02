const CommentsFormMobile = () => {
  return (
    <div className="Comments">
      <p className=" w-full text-right gap-[0.625rem] text-[20px] text-[#283944] font-black">دیدگاهتان را ارسال کنید</p>
      <div className="com bg-[rgb(255,255,255)] w-full justify-center text-right">
        

        <div className="flex flex-col justify-between mt-[1.25rem] w-full">
          <span className="text-[15px] font-bold  w-full my-[0.625rem]">دیدگاه</span>
          <input
          type="text"
          placeholder="دیدگاه ها "
          className='w-full h-[12.063rem] border-[0.125rem] border-[#8BABBC] rounded-[0.625rem] text-[#283944]
           pr-[1.438rem]'
        />
        <span className=" text-[15px] font-bold  w-full my-[0.625rem]">نام و نام خانوادگی</span>
          <input
            type="text"
            className='w-full h-[3.75rem] border-[0.125rem] border-[#8BABBC] rounded-[0.625rem] text-[#283944] pr-[1.438rem]'
            placeholder='نام و نام خانوادگی'
          />
        <span className="text-[15px] font-bold  w-full my-[0.625rem]">شماره تماس</span>
          <input
            type="text"
            className='w-full h-[3.75rem] border-[0.125rem] border-[#8BABBC] rounded-[0.625rem] text-[#283944] pr-[1.438rem]'
            placeholder='شماره تماس'
          />
          <span className="text-[15px] font-bold  w-full my-[0.625rem]">ایمیل</span>
          <input
            type="text"
            className='w-full h-[3.75rem] border-[0.125rem] border-[#8BABBC] rounded-[0.625rem] text-[#283944] pr-[1.438rem]'
            placeholder='ایمیل'
          />
        </div>

        <button
          className='bg-[#00395D] text-center w-full h-[3.75rem] mt-[1.25rem] mb-[1.25rem] border-[0.125rem] rounded-[0.625rem]
           text-[#FFFFFF] text-[20px] hover:bg-blue-800 cursor-pointer'
        >
          ارسال پیام
        </button>
      </div>
    </div>
  );
};

export default CommentsFormMobile;
