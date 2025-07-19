import React from 'react';

const MainContent = () => {
  return (
    <div className="flex flex-col w-full px-[32px] pt-[224px] bg-[#FAFAFA]">
    
      {/* Title */}
      <h1 className="text-[#283944] font-normal text-[43px] text-right self-end mb-[64px]">
        وبلاگ
      </h1>

      {/* Searchbar */}
      <div className="w-full max-w-[1376px] h-[79px] bg-[#F5F5F5] rounded-[50px] px-[26px] py-[20px] flex items-center justify-center gap-[10px] mb-[80px] self-center">
        <input
          type="text"
          className="w-full text-right bg-transparent outline-none"
          placeholder="جست و جوی مقالات"
        />
      </div>

      {/* Main section */}
      <div className="flex justify-start w-full">
        <div className="flex flex-col category">
          <ul className='border-[2px] rounded-[5px]'>
            <li>دسته بندی ها</li>
            <li><a href="">کتونی</a></li>
            <li><a href="">ست کردن</a></li>
            <li><a href="">استایل کژوال</a></li>
            <li><a href="">راهنمای خرید</a></li>
            <li><a href="">ست کردن</a></li>
          </ul>
          <ul className='border-[2px] rounded-[5px]'>
            <li>مقالات پر طرفدار</li>
            <li><a href="">استایل شیک و راحت<img src="/src/assets/images/Frame 3524.jpg" alt="" /></a></li>
            <li><a href="">استایل شیک و راحت<img src="/src/assets/images/Frame 3524.jpg" alt="" /></a></li>
            <li><a href="">استایل شیک و راحت<img src="/src/assets/images/Frame 3524.jpg" alt="" /></a></li>
          </ul>
          <p className='text-right top-[1228px] left-[364px] p-[10px] gap-[10px] text-[22px] text-[#283944]'>:ارسال نظرات</p>
          <div className="com bg-[#FFFFFF] w-[465px] h-[473] top-[1314px] left-[32px] justify-center text-right ">
            <input type="text"
            className='w-[160px] h-[60px] border-[2px] border-[#8BABBC] rounded-[10px] text-[#283944] mt-[20px] ml-[13px]' 
            placeholder='نام و نام خانوادگی'
            />
            <input type="text"
            className='w-[252px] h-[60px] top-[8px] left-[142px] p-[10px] gap-[10px]
             border-[2px] rounded-[10px] border-[#8BABBC] text-[#283944] mr-[13px] ml-[20px] mt-[20px] mb-[20px]'
            placeholder='شماره تماس:'
            />
            <input type="text"
            className='w-[426px] h-[60px] border-[2px] rounded-[10px] border-[#8BABBC] text-[#283944] m-[20px]'
            placeholder='ایمیل'
            />
            <input type="text"
            className='w-[425px] h-[193px] border-[2px] border-[#8BABBC] rounded-[10px] text-[#283944] m-[20px]'
            placeholder='موضوع پیام'
            />
            <button className='bg-[#00395D] text-center w-[425px] h-[60px] m-[20px] border-[2px] rounded-[10px]
             text-[#FFFFFF] text-[20px] justify-center hover:bg-blue-800 cursor-pointer '>ارسال پیام</button>
          </div>
        </div>
        <div className="flex flex-col items-end text-right" style={{ marginRight: '32px' }}>
          <img
            src="/src/assets/images/Frame 3551.jpg"
            alt="OffMoor"
            className="w-[886px] h-[596px] mb-[20px]"
          />
          <div className="flex flex-row gap-4">
            <span className="bg-[#00395D] text-white px-4 py-1 rounded-[5px] text-sm">
              استایل کژوال
            </span>
            <span className="text-sm text-gray-500">۳ اسفند ۱۳۷۹</span>
            <span className="text-sm text-gray-500">۷ دقیقه مطالعه</span>
          </div>
          <div className="txt w-[886px] h-[639px] text-[#283944]">
            <p 
            className='text-[22px] text-[#283944]' >t چند راه مختلف برای ایجاد وب سایت رایگان خ</p>
            <p 
            className='w-[886px] h-[180px]'>بله.melonest چند راه مختلف برای ایجاد وب سایت رایگان خود ارائه می دهد، بنابراین می توانید فرآیند ایجاد
ا انتخاب کنید که بهترین کار را برای شما دارد. از بین بیش از 900 الگوی طراحی شده انتخاب کنید، یا از سازنده ر
 وب سایت هوش مصنوعی ما برای ایجاد یک سایت آماده برای کسب و کار در کمترین زمان با استفاده از یک رر
رابط مکالمه استفاده کنید. همچنین می توانید با استفاده از کش و رها کردن وب سایت ساز melonest از ابتدا 
کنید. هر راهی را که انتخاب کنید، همیشه می توانید برای آزادی کامل طراحی وب سایت، سفارشی سازی را در رر
ویرایشگر ادامه دهید. کنید، همیشه می توانید برای آزادی کامل طراحی وب سایت، سفارشی سازی را در ررسنتی</p>
             <p
              className='text-[22px] text-[#283944]'>t چند راه مختلف برای ایجاد وب سایت رایگان خ</p>
             <p 
             className='w-[886px] h-[330px]'>بله.melonest چند راه مختلف برای ایجاد وب سایت رایگان خود ارائه می دهد، بنابراین می توانید فرآیند ایجاد
ا انتخاب کنید که بهترین کار را برای شما دارد. از بین بیش از 900 الگوی طراحی شده انتخاب کنید، یا از سازنده ر
 وب سایت هوش مصنوعی ما برای ایجاد یک سایت آماده برای کسب و کار در کمترین زمان با استفاده از یک رر
رابط مکالمه استفاده کنید. همچنین می توانید با استفاده از کش و رها کردن وب سایت ساز melonest از ابتدا 
کنید. هر راهی را که انتخاب کنید، همیشه می توانید برای آزادی کامل طراحی وب سایت، سفارشی سازی را در رر
ویرایشگر ادامه دهید. کنید، همیشه می توانید برای آزادی کامل طراحی وب سایت، سفارشی سازی را در ررسنتیبله
ا انتخاب کنید که بهترین کار را برای شما دارد. از بین بیش از 900 الگوی طراحی شده انتخاب کنید، یا از سازنده ر
 وب سایت هوش مصنوعی ما برای ایجاد یک سایت آماده برای کسب و کار در کمترین زمان با استفاده از یک رر
رابط مکالمه استفاده کنید. همچنین می توانید با استفاده از کش و رها کردن وب سایت ساز melonest از ابتدا 
کنید. هر راهی را که انتخاب کنید، همیشه می توانید برای آزادی کامل طراحی وب سایت، سفارشی سازی را در رر
ویرایشگر ادامه دهید. کنید، همیشه می توانید برای آزادی کامل طراحی وب سایت، سفارشی سازی را در ررسنتی</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
