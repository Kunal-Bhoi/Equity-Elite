import React from "react";

const Card = ({ image, title, url, summery }) => {
  return (
    <div className="p-4">
      <div className="card card-side bg-[#1A0133] shadow-xl">
        <figure className="w-1/3 p-2 border border-[#1A0133] bg-[#1A0133]">
          <img src={image} alt={title} className="max-w-full h-auto" />
        </figure>
        <div className="card-body w-2/3">
          <h1 className="card-title">{title}</h1>
          <p>{summery}</p> {/* This line displays the summary */}
          <div className="card-actions justify-end">
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
