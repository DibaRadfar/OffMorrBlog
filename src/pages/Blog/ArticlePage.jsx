import React from "react";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const { id } = useParams(); 

  const article = {
    id: id, 
    title: "عنوان مقاله نمونه",
    content: "<p>این یک محتوای نمونه برای مقاله است. آیدی مقاله: " + id + "</p>",
    tags: ["تکنولوژی", "برنامه‌نویسی"]
  };

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <article className="p-6 bg-white rounded-lg shadow">
        <h1 className="mb-4 text-2xl font-bold">{article.title} (شماره: {id})</h1>
        
        <div 
          className="prose max-w-none" 
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        <div className="flex gap-2 mt-6">
          {article.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-sm bg-gray-100 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;