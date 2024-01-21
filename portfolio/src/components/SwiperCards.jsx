import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules';

export default function SwiperCards({ projects, cardsNumber }) {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={20}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 30000,
        disableOnInteraction: false,
      }}
      slidesPerView={cardsNumber}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={true}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className='mySwiper w-full'>
      {projects.map((project) => (
        <SwiperSlide className='border-4 border-secondary h-full'>
          <div className='w-full h-full justify-between px-4 py-8 flex flex-col gap-6'>
            <div>
              <video
                className='border-2 border-secondary'
                src={`${project.video}`}
                autoPlay
                muted
                preload='none'
                playsinline
                loop
                type='video/mp4'></video>
            </div>
            <div className='flex flex-col justify-between gap-2'>
              <h4 className='text-tertiary text-3xl'>
                {project.name}{' '}
                <span className='text-secondary text-lg'>{`(${project.finished})`}</span>
              </h4>
              <p className='text-white text-lg'>{project.description}</p>
            </div>
            <div className='flex gap-4 flex-wrap'>
              {project.skills.map((skill) => (
                <div className='border-2 bg-white bg-opacity-20 border-tertiary w-[45%] md:w-[30%] flex items-center justify-center h-10 rounded-xl'>
                  <span className='text-white hover:text-secondary'>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            <div className='flex gap-8 items-center md:text-xl text-white'>
              <span>
                {' '}
                Code:{' '}
                <a target='blank' href={project.linkRepo}>
                  <FontAwesomeIcon
                    className=' hover:text-secondary'
                    icon={faGithub}
                  />
                </a>
              </span>
              <span>
                {' '}
                Live Demo:{' '}
                <a target='blank' href={project.linkProject}>
                  <FontAwesomeIcon
                    className=' hover:text-secondary'
                    icon={faArrowUpRightFromSquare}
                  />
                </a>
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
