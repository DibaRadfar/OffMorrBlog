const CommentsForm = () => {
  return (
    <div className="Comments">
      <p className="text-right p-[10px] gap-[10px] text-[22px] text-[#283944]">ارسال نظرات</p>
      <div className="com bg-[#FFFFFF] w-[465px] justify-center text-right">
        

        <div className="flex justify-between mx-[20px] mt-[20px]">
          <input
            type="text"
            className='w-[200px] h-[60px] border-[2px] border-[#8BABBC] rounded-[10px] text-[#283944]'
            placeholder='نام و نام خانوادگی'
          />
          <input
            type="text"
            className='w-[200px] h-[60px] border-[2px] border-[#8BABBC] rounded-[10px] text-[#283944]'
            placeholder='شماره تماس'
          />
        </div>


        <input
          type="text"
          className='w-[425px] h-[60px] border-[2px] border-[#8BABBC] rounded-[10px] text-[#283944] m-[20px]'
          placeholder='ایمیل'
        />
        <input
          type="text"
          className='w-[425px] h-[193px] border-[2px] border-[#8BABBC] rounded-[10px] text-[#283944] m-[20px]'
          placeholder='موضوع پیام'
        />
        <button
          className='bg-[#00395D] text-center w-[425px] h-[60px] m-[20px] border-[2px] rounded-[10px] text-[#FFFFFF] text-[20px] hover:bg-blue-800 cursor-pointer'
        >
          ارسال پیام
        </button>
      </div>
    </div>
  );
};

export default CommentsForm;
