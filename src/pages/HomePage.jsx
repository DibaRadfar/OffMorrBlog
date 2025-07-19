import React from "react";
// Import کامپوننت‌ها
import Header from "../components/Header/Header.jsx";
import Title from "../components/TopSection/Title.jsx";
import SearchBar from "../components/TopSection/SearchBar.jsx";
import BlogSection from "../components/BlogContent/BlogSection.jsx";
import TagsSection from "../components/BlogContent/TagsSection.jsx";
import PopularArticles from "../components/Sidebar/PopularArticles.jsx";
import CategorisBox from "../components/Sidebar/CategorisBox.jsx";
import CommentsForm from "../components/FeedbackForm/CommentsForm.jsx";
import Testimonials from "../components/CustomerReviews/Testimonials.jsx";

const HomePage = () => (
  <div className="text-black bg-white font-iranSans" dir="rtl">
    {/* بخش عنوان و جستجو */}
    <section className="bg-gray-50 py-6 px-[32px]">
      <div className="max-w-[1440px] mx-auto">
        <Title />
        <SearchBar className="mt-4" />
      </div>
    </section>

    {/* محتوای اصلی */}
    <div className="py-8 px-[32px] max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row gap-[45px]">
        {/* محتوای وبلاگ */}
        <main className="space-y-8 md:w-2/3">
          <BlogSection />
          <TagsSection />
        </main>

        {/* سایدبار */}
        <aside className="space-y-6 md:w-1/3">
          <CategorisBox />
          <PopularArticles />
          <CommentsForm />
        </aside>
      </div>
    </div>

    {/* نظرات کاربران */}
    <section className="py-12 bg-gray-50 px-[32px]">
      <div className="max-w-[1440px] mx-auto">
        <Testimonials />
      </div>
    </section>
  </div>
);

export default HomePage;
