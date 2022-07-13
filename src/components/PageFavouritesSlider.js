import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import City from "./City";

const PageFavouritesSlider = (props) => {

  // const favourites = props.favourites;
  const favourites = useSelector(state => state.favourites);
  
  const [visibleSlide, setVisibleSlide] = useState(0);
  
  const _nextSlide = () => {
    const maxIndex = favourites.length - 1;
    if (visibleSlide >= maxIndex) {
      setVisibleSlide(0);
    } else {
      setVisibleSlide(visibleSlide + 1)
    }
  };


  useEffect(() => {

    const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
      // ovo je funkcija koju izvrsavamo na svaki interval
      _nextSlide();
    }, 2000);

    // You need to clear your interval,
    return () => clearInterval(intervalId); // This is important

  }, [favourites, visibleSlide]);



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