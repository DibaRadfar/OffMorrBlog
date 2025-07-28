import { useState, useEffect } from "react";
import { ChevronDown, Star } from "lucide-react";

const initialTestimonials = [
  {
    id: 1,
    name: "هادی هادی پور",
    daysAgo: 17,
    role: "خریدار",
    rating: 4,
    comment: "قشنگ و خوش استایل و از این مدل چند تا رنگ دیگه هم دارم که کلا خیلی خوبن",
    avatar: "/src/assets/images/b78f1ef1fc67a89bd5195319fc0ccbcc.jpg",
  },
  {
    id: 2,
    name: "هادی هادی پور",
    daysAgo: 12,
    role: "خریدار",
    rating: 5,
    comment: "قشنگ و خوش استایل و از این مدل چند تا رنگ دیگه هم دارم که کلا خیلی خوبن",
    avatar: "/src/assets/images/b78f1ef1fc67a89bd5195319fc0ccbcc.jpg",
  },
  {
    id: 3,
    name: "هادی هادی پور",
    daysAgo: 5,
    role: "خریدار",
    rating: 3,
    comment: "قشنگ و خوش استایل و از این مدل چند تا رنگ دیگه هم دارم که کلا خیلی خوبن",
    avatar: "/src/assets/images/b78f1ef1fc67a89bd5195319fc0ccbcc.jpg",
  },
  {
    id: 4,
    name: "هادی هادی پور",
    daysAgo: 2,
    role: "خریدار",
    rating: 4,
    comment: "قشنگ و خوش استایل و از این مدل چند تا رنگ دیگه هم دارم که کلا خیلی خوبن",
    avatar: "/src/assets/images/b78f1ef1fc67a89bd5195319fc0ccbcc.jpg",
  },
];

const MAX_VISIBLE = 3;

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(MAX_VISIBLE);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {

    setTestimonials(initialTestimonials);


    fetch("https://your-backend.com/api/testimonials", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(initialTestimonials),
    })
      .then((res) => {
        if (!res.ok) throw new Error("خطا در ارسال داده به سرور");
        return res.json();
      })
      .then((data) => {
        console.log("داده‌ها با موفقیت ارسال شدند:", data);
      })
      .catch((error) => {
        console.error("ارسال داده ناموفق بود:", error);
      });
  }, []);

  const handleShowMore = () => setVisibleCount(testimonials.length);

  return (
    <section className="py-2 bg-gray-50 rtl" dir="rtl" style={{ marginLeft: "auto" }}>
      <p className="text-[22px] mb-[1.063rem] font-extrabold pb-[1.063rem]">دیدگاه ها</p>
      <div className="w-full px-4 space-y-8" style={{ maxWidth: "60.625rem" }}>
        {testimonials.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="pb-6 border-b">
            <div className="relative flex items-center justify-start gap-6" dir="rtl">
   
              <img
                src={item.avatar}
                alt={item.name}
                className="object-cover w-12 h-12 rounded-full"
              />


              <div
                className="flex items-center gap-[1.813rem]"
                style={{
                  width:"23.938rem",
                  height: "1.875rem",
                }}
              >
                <span className="text-sm font-semibold">{item.name}</span>
                <span className="text-xs text-gray-500">{item.daysAgo} روز پیش</span>
              </div>


              <div
                className="text-white text-sm rounded-full bg-[#00395D]"
                style={{
                  padding: "0.25rem 1.063rem 0.5rem",
                  minWidth: "3.438rem",
                  height: "2rem",
                  lineHeight: "1.25rem",
                  textAlign: "center",
                }}
              >
                {item.role}
              </div>

              <div className="flex items-center gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>


            <p className="px-6 mt-4 text-sm text-gray-700">{item.comment}</p>
          </div>
        ))}


        {visibleCount < testimonials.length && (
          <div className="flex justify-center pt-4">
            <button
              onClick={handleShowMore}
              className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
            >
              نمایش دیدگاه‌های بیشتر
              <ChevronDown size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
