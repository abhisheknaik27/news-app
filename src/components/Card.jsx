import React from "react";

const Card = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
      {data.map((news, i) => {
        if (!news.urlToImage) return null;
        else {
          return (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img src={news.urlToImage} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2 cursor-pointer">
                  <a
                    className="hover:text-blue-500"
                    onClick={() => window.open(news.url)}
                  >
                    {news.title}
                  </a>
                </h2>
                <p className="text-md mb-4 text-gray-700 text-justify mr-2">
                  {news.description}
                </p>
                <div className="flex justify-end">
                  <a
                    className=" text-blue-500 px-4 py-2 hover:text-blue-700 cursor-pointer"
                    onClick={() => window.open(news.url)}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
