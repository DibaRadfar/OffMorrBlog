// TagsSection.jsx
const TagsSection = () => {
  return <div className="w-[501px] h-[48px] flex flex-row dir=rtl ">
    <span className="text-[22px] text-[#283944] w-[102px] ">برچسب ها</span>
    <div className="tag w-[359px] h-[48px] mr-[40px] text-[22px] text-[#283944] flex flex-row">
        <span className="w-[117px] h-[48px] border-[3px] border-[#00395D] rounded-[10px] text-[#283944] pt-[6px] pb-[6px] pl-[22px] pr-[22px] text-center mr-[4px] ml-[4px]">اجتماعی</span>
        <span className="w-[117px] h-[48px] border-[3px] border-[#00395D] rounded-[10px] text-[#283944] pt-[6px] pb-[6px] pl-[22px] pr-[22px] text-center mr-[4px] ml-[4px]">تیشرت</span>
        <span className="w-[117px] h-[48px] border-[3px] border-[#00395D] rounded-[10px] text-[#283944] pt-[6px] pb-[6px] pl-[22px] pr-[22px] text-center mr-[4px] ml-[4px]">تجارت </span>
    </div>
  </div>;
};

export default TagsSection;