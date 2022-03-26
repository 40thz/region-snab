import React from 'react'

const VacancyItem = ({image, title, description }) => {
    return (
        <div className="vacancy">
            <div className="vacancy-icon">
                <img src={image} alt="Изображение" />
            </div>
            <div className="colum">
                <div className="vacancy-title">
                    {title}
                </div>
                <div className="vacancy-description">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default VacancyItem