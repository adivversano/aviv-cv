'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import NextIcon from '@/assets/next-icon.svg';
import PrevIcon from '@/assets/prev-icon.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Scrollbar } from 'swiper/modules';

type ResponsiveSliderProps = {
  imgUrls: string[];
  imageClass?: string;
  imageLayoutClass?: string;
};

export default function ResponsiveSlider({ imgUrls, imageClass, imageLayoutClass }: ResponsiveSliderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  if (isMobile) {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className={`gallery  ${imageLayoutClass ?? ''}`}
        modules={[Scrollbar, Navigation]}
        navigation={{
          prevEl: '.next-btn',
          nextEl: '.prev-btn',
        }}
        scrollbar={{ draggable: true }}
      >
        {imgUrls.map((imgUrl, i) => (
          <SwiperSlide key={i}>
            <Image
              className={`gallery-image ${imageClass}`}
              src={imgUrl}
              alt={`image of the project`}
              fill
            />
          </SwiperSlide>
        ))}

        <div className="navigation">
          <button className="next-btn reset-btn">
            <NextIcon />
          </button>
          <button className="prev-btn reset-btn">
            <PrevIcon />
          </button>
        </div>
      </Swiper>
    );
  }

  // Desktop: render grid layout
  return (
    <div className={`gallery  ${imageLayoutClass ?? ''}`}>
      {imgUrls.map((imgUrl, i) => (
        <div className="img-container" key={i}>
          <Image
            className={`gallery-image ${imageClass}`}
            src={imgUrl}
            alt={`image of the project`}
            fill
          />
        </div>
      ))}
    </div>
  );
}
