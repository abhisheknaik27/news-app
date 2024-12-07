import React from "react";

const Card = ({ data }) => {
  return (
    <div>
      {data.map((news, i) => {
        if (!news.urlToImage) return null;
        else {
          return (
            <div className="">
              <div className="">
                <img src={news.urlToImage} />
                <div>
                  <a className="title" onClick={() => window.open(news.url)}>
                    {news.title}
                  </a>
                  <p>{news.description}</p>
                  <button onClick={() => window.open(news.url)}>
                    Read More
                  </button>
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
