import {  useEffect, useRef, useState } from "react";

const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
};

const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
};

const sliderStyles = {
    position: "relative",
    height: "100%",
};

const slidesContainerOverflowStyles = {
    overflow: "hidden",
    height: "100%",
};

const ImageSlider = ({ slides, parentWidth }) => {

    const timerRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const getSlideStylesWithBackground = (slideIndex) => ({
        height: "100%",
        backgroundSize : "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${slides[slideIndex]})`,
        width: `${parentWidth}px`,
    });

    const getSlidesContainerStylesWithWidth = () => ({
        display: "flex",
        height: "100%",
        transition: "transform ease-out 0.3s",
        width: parentWidth * slides.length,
        transform: `translateX(${-(currentIndex * parentWidth)}px)`,
    });

    useEffect(() => {

        timerRef.current = setTimeout(() => {
            goToNext();
        }, 4000);

        return () => clearTimeout(timerRef.current);
        
    }, [goToNext]);

    return (
        <div style={sliderStyles}>
            <div>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>
            </div>
            <div style={slidesContainerOverflowStyles}>
                <div style={getSlidesContainerStylesWithWidth()}>
                    {slides.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            style={getSlideStylesWithBackground(slideIndex)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
