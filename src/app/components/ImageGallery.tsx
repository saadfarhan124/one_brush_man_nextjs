"use client"
import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  openModal: boolean;
  closeModal: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal, closeModal }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isNext, setIsNext] = useState<boolean>(false);

  const goToPrevious = () => {
    setIsNext(false);
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    setIsNext(true);
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const close = () => {
    setCurrentIndex(0);
    closeModal();
  }

  const transitionClasses = {
    enter: 'transform transition ease-in-out duration-500 sm:duration-700',
    enterFrom: 'translate-x-full',
    enterTo: 'translate-x-0',
    leave: 'transform transition ease-in-out duration-500 sm:duration-700',
    leaveFrom: 'translate-x-0',
    leaveTo: 'translate-x-full',
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {openModal && (
        <div id='gallery' className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
          <span
            className="absolute z-[1000] top-4 right-8 text-white hover:text-red text-4xl font-bold cursor-pointer"
            onClick={close}
          >
            &times;
          </span>
          <div className="relative flex items-center justify-center gap-4 w-full h-full">
            <button
              className="bg-black bg-opacity-50 hover:text-red text-white p-2 text-2xl absolute left-4 z-[1000]"
              onClick={goToPrevious}
            >
              &#10094;
            </button>
            <div className="relative flex items-center justify-center w-full h-full">
              <Transition
                key={currentIndex}
                show={true}
                appear={true}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom={isNext ? 'translate-x-full' : '-translate-x-full'}
                enterTo='translate-x-0' 
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo={isNext ? 'translate-x-full' : '-translate-x-full'}
              >
                {/* <Transition
    key={currentIndex}
    show={true}
    appear={true}
    enter='transform transition ease-in-out duration-500 sm:duration-700'
    enterFrom='-translate-x-full'
    enterTo='translate-x-0'
    leave='transform transition ease-in-out duration-500 sm:duration-700'
    leaveFrom='translate-x-0'
    leaveTo='-translate-x-full'
> */}
                <Image
                  src={images[currentIndex]}
                  alt={`img-${currentIndex}`}
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full object-contain z-50"
                />
              </Transition>

              
              <img
                src={currentIndex > 0 ? images[currentIndex - 1] : images[images.length - 1]}
                className="w-1/4 opacity-50 absolute left-0"
              />

              <img
                src={currentIndex < images.length - 1 ? images[currentIndex + 1] : images[0]}
                alt={`img-${currentIndex + 1}`}
                className="w-1/4 opacity-50 absolute right-0"
              />

            </div>
            <button
              className="bg-black bg-opacity-50 hover:text-red text-white p-2 text-2xl absolute right-4 z-[1000]"
              onClick={goToNext}
            >
              &#10095;
            </button>
            <div className="absolute bottom-4 w-full text-center z-50">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`h-3 w-3 rounded-full inline-block mx-1 cursor-pointer ${index === currentIndex ? 'bg-red' : 'bg-gray-500'
                    }`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
