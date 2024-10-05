// News.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(
        "https://finnhub.io/api/v1/news?category=general&token=crvqbdhr01qkji45o89gcrvqbdhr01qkji45o8a0"
      );
      setNews(response.data);
      console.log(response.data);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4">
        {" "}
        {/* Use container and mx-auto */}
        <div className="flex flex-wrap justify-around p-4">
          {news.map((article, index) => (
            <Card
              key={index}
              image={article.image}
              title={article.headline}
              url={article.url}
              summery={article.summary}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
