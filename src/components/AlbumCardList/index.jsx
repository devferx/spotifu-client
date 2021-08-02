import { useState, useRef } from "react";
import Slider from "react-slick";

import { AlbumCard } from "../AlbumCard";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import "./styles.css";

export const AlbumCardList = ({ title, albumList, isPlaylist = false }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (index) =>
    sliderRef.current.slickGoTo(slideIndex + index);

  return (
    <div className="album-card-list">
      <div className="album-card-list__header">
        <p className="album-card-list__header__title">{title}</p>

        <div className="album-card-list__header__actions">
          <button
            className="album-card-list__header__actions__button"
            onClick={() => handleClick(-1)}
          >
            <img src={arrowLeft} alt="Arroww Left" />
          </button>
          <button
            className="album-card-list__header__actions__button"
            onClick={() => handleClick(1)}
          >
            <img src={arrowRight} alt="Arroww Right" />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...sliderSettings}>
        {albumList.map((album) => (
          <AlbumCard key={album.id} album={album} isPlaylist={isPlaylist} />
        ))}
      </Slider>
    </div>
  );
};
