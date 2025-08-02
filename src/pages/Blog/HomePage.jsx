import React from "react";
// Import کامپوننت‌ها
import Header from "../../components/Blog/Header/Header.jsx";
import Title from "../../components/Blog/TopSection/Title.jsx";
import SearchBar from "../../components/Blog/TopSection/SearchBar.jsx";
import BlogSection from "../../components/Blog/BlogContent/BlogSection.jsx";
import TagsSection from "../../components/Blog/BlogContent/TagsSection.jsx";
import PopularArticles from "../../components/Blog/Sidebar/PopularArticles.jsx";
import CategorisBox from "../../components/Blog/Sidebar/CategorisBox.jsx";
import CommentsFormDesktop from "../../components/Blog/FeedbackForm/CommentsFormDesktop.jsx";
import CommentsFormMobile from "../../components/Blog/FeedbackForm/CommentsFormMobile.jsx";
import Testimonials from "../../components/Blog/CustomerReviews/Testimonials.jsx";

const HomePage = () => (
  <div className="w-full overflow-x-hidden text-black bg-white font-iranSans" dir="rtl">
    {/* بخش عنوان و جستجو */}
    <section className="bg-gray-50 py-6 px-[32px]">
      <div className="max-w-full mx-auto">
        <Title />
        <SearchBar className="mt-4" />
      </div>
    </section>

    {/* محتوای اصلی */}
    <div className="py-8 px-[32px] max-w-full mx-auto flex flex-row">
      <div className="flex flex-col md:flex-row gap-[45px]">
        {/* محتوای وبلاگ */}
        <main className="space-y-8 md:w-2/3">
          <BlogSection />
          <TagsSection />
        </main>

        {/* سایدبار */}
        <aside className="space-y-6 md:w-1/3">
            <div className="hidden md:block">
               <CategorisBox />
            </div>

            <div className="hidden md:block">
                <PopularArticles />
            </div>
            <div className="hidden md:block">
              <CommentsFormDesktop />
            </div>
            <div  className="block md:hidden">
              <CommentsFormMobile/>
            </div>

        </aside>

      </div>
    </div>

    {/* نظرات کاربران */}
    <section className="py-12 bg-gray-50 px-[32px] hidden md:block">
      <div className="max-w-full mx-auto">
        <Testimonials />
      </div>
    </section>
  </div>
);

export default HomePage;
