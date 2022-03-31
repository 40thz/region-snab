import React from "react";

const VacancyItem = ({ image, title, description }) => {
  return (
    <div className="vacancy">
      <div className="vacancy-icon">
        <img
          src={`https://region-snab.s3.amazonaws.com/${image}`}
          alt="Изображение"
        />
      </div>
      <div className="colum">
        <div className="vacancy-title">{title}</div>
        <div
          className="vacancy-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default VacancyItem;
