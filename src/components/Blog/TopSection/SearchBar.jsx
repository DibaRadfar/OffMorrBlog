const Searchbar = () => {
    return(
        <div className="w-full max-w-[86] h-[4.938rem] bg-[#F5F5F5] rounded-[3.125rem]
         px-[1.625rem] py-[1rem] flex items-center justify-center gap-[0.625rem] mb-[1.688rem] self-center">
        <input
          type="text"
          className="w-full text-right bg-transparent outline-none"
          placeholder="جست و جوی مقالات"
        />
      </div>
    );
};
export default Searchbar;