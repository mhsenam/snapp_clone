import React from "react";

const ImageSlider = () => {
  const delay = 2500;
  const images = ["/public/market.jpg", "/public/market.jpg"];
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [images.length]);

  return (
    <div className="relative overflow-hidden my-16 mx-[15%]">
      <div
        className="whitespace-nowrap transition ease 0.3s"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <img
            className="inline-block h-[350px] w-full rounded-lg object-cover xs:object-contain"
            src={image}
            key={index}
          />
        ))}
      </div>

      <div className="absolute left-[50%] bottom-[2%] inline text-center rounded-2xl px-2 bg-[#c4c4c46f]">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`inline-block h-[10px] w-[10px] rounded-full cursor-pointer mx-1 bg-[#c4c4c4] ${
              index === idx ? "bg-white" : ""
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
