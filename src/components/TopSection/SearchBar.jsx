const Searchbar = () => {
    return(
        <div className="w-full max-w-[1376px] h-[79px] bg-[#F5F5F5] rounded-[50px] px-[26px] py-[20px] flex items-center justify-center gap-[10px] mb-[80px] self-center">
        <input
          type="text"
          className="w-full text-right bg-transparent outline-none"
          placeholder="جست و جوی مقالات"
        />
      </div>
    );
};
export default Searchbar;