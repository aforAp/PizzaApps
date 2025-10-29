
import images from '../Datas/Scroller'
import {Card, CardContent} from "../Components/ui/card";
import {useRef, useState} from "react";


const Pagescroller = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag handlers
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startX;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
    // Snap to nearest card
    const container = carouselRef.current;
    const children = Array.from(container.children);
    const scrollPos = container.scrollLeft;
    const cardWidth = children[0].offsetWidth + parseInt(getComputedStyle(children[0]).marginRight);
    const snapIndex = Math.round(scrollPos / cardWidth);
    container.scrollTo({
      left: snapIndex * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full overflow-hidden object-cover ml-3 no-scrollbar">
      <h1 className='font-bold'>What's New?</h1>
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory cursor-grab"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseUp}
        onMouseUp={onMouseUp}
      >
        {images.map((img) => (
          <div
            key={img.id}
            className="snap-start flex-none w-[300px] h-[200px] rounded-lg overflow-hidden"
          >
            <img
              src={img.images}
              alt={`offer-${img.id}`}
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pagescroller;