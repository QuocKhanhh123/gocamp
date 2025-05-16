'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function DualSlideshow() {
  const leftSlidesRef = useRef<HTMLDivElement[]>([]);
  const rightSlidesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let leftIndex = 0;
    let rightIndex = 0;

    const showLeftSlides = () => {
      leftSlidesRef.current.forEach(slide => (slide.style.display = 'none'));
      leftIndex = (leftIndex + 1) % leftSlidesRef.current.length;
      leftSlidesRef.current[leftIndex].style.display = 'block';
    };

    const showRightSlides = () => {
      rightSlidesRef.current.forEach(slide => (slide.style.display = 'none'));
      rightIndex = (rightIndex + 1) % rightSlidesRef.current.length;
      rightSlidesRef.current[rightIndex].style.display = 'block';
    };

    const leftInterval = setInterval(showLeftSlides, 2000);
    const rightInterval = setInterval(showRightSlides, 2000);

    // Hiển thị slide đầu tiên ngay khi load
    showLeftSlides();
    showRightSlides();

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 SlideContainer">
      {/* Slideshow bên trái */}
      <div className="w-full md:basis-2/3 relative slideshow-container h-[600px] overflow-hidden rounded-lg">
        {['KhoanhKhac1.png', 'KhoanhKhac2.png', 'Khoanhkhac3.png'].map((img, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) leftSlidesRef.current[index] = el;
            }}
            className="mySlides fade absolute top-0 left-0 w-full h-full"
            style={{ display: 'none' }}
          >
            <div className="numbertext absolute top-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded text-sm">
              {index + 1} / 3
            </div>
            <Image
              src={`/imgSlide/${img}`}
              alt={`slide-${index}`}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Slideshow bên phải */}
      <div className="w-full md:basis-1/3 relative slideshow-container-right h-[600px] overflow-hidden rounded-lg">
        {['2.png', '1.png', '3.png'].map((img, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) rightSlidesRef.current[index] = el;
            }}
            className="mySlidesRight fade absolute top-0 left-0 w-full h-full"
            style={{ display: 'none' }}
          >
            <Image
              src={`/imgSlide/${img}`}
              alt={`slideRight-${index}`}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
