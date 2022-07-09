import { useState } from "react";
import City from "./City";

const PageFavouritesSlider = (props) => {

  const favourites = props.favourites;

  const [visibleSlide, setVisibleSlide] = useState(0);

  const _nextSlide = () => {
    const max = favourites.length - 1;
    if (visibleSlide === max) {
      setVisibleSlide(0);
    } else {
      setVisibleSlide(visibleSlide + 1)
    }
  };

  let jsxSlides = favourites.map((id, index) => {
    let cl = "slide";
    if (index === visibleSlide) {
      cl = " slide visible";
    } else if (index < visibleSlide) {
      cl = " slide post-visible";
    }

    return (
      <div key={id} className={cl}>
        <City key={id} id={id} />
      </div>
    );
  });

  return (
    <div className="page-favourites">
      <h2>Favourite Cities Slider</h2>

      <div className="slide-show">
        <div className="visible-frame">
          <div className="slides">
            {jsxSlides}
          </div>
        </div>
        <button type="button" onClick={(e) => { _nextSlide() }}>Next Slide</button>
      </div>
    </div>
  );
};

export default PageFavouritesSlider;