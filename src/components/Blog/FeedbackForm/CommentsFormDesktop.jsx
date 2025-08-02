const CommentsFormDesktop = () => {
  return (
    <div className="Comments">
      <p className=" w-full text-right p-[0.625rem] gap-[0.625rem] text-[22px] text-[#283944] font-extrabold pr-[1.438rem]">ارسال نظرات</p>
      <div className="com bg-[#FFFFFF] w-full justify-center text-right">
        

        <div className="flex flex-row justify-between mt-[1.25rem] w-full">
          <input
            type="text"
            className='w-[12.5rem] h-[3.75rem] border-[0.125rem] border-[#8BABBC] rounded-[0.625rem] text-[#283944] pr-[1.438rem]'
            placeholder='نام و نام خانوادگی'
          />
          <input
            type="text"
            className='w-[12.5rem] h-[3.75rem] border-[0.125rem] border-[#8BABBC] rounded-[0.625rem] text-[#283944] pr-[1.438rem]'
            placeholder='شماره تماس'
          />
        </div>


        <input
          type="text"
          className='w-full h-[3.75rem] border-[0.125rem] border-[#8BABBC] rounded-[0.625rem] text-[#283944] mt-[1.25rem] mb-[1.25rem] pr-[1.438rem]'
          placeholder='ایمیل'
        />
        <input
          type="text"
          className='w-full h-[12.063rem] border-[0.125rem] border-[#8BABBC] rounded-[0.625rem] text-[#283944] mt-[1.25rem] mb-[1.25rem] pr-[1.438rem]'
          placeholder='موضوع پیام'
        />
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

export default CommentsFormDesktop;
