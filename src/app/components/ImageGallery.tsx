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
  const [isLoading, setIsLoading] = useState(true);



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

  const handleImageLoad = () => {
    setIsLoading(false); // Set loading state to false when image is loaded
  };

  const close = () => {
    setCurrentIndex(0);
    setIsNext(true);
    closeModal();
  };

  const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {openModal && (
        <div id='gallery' className="fixed inset-0 z-50 flex items-center justify-center bg-black">
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
            <div className="relative flex items-center justify-center w-full h-4/5">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <div role="status">
                    <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-red" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>                </div>
              )}
              <Transition
                key={currentIndex}
                show={true}
                appear={true}
                enter="transform transition ease-in-out duration-200 sm:duration-200"
                enterFrom={isNext ? 'translate-x-full' : '-translate-x-full'}
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-200 sm:duration-200"
                leaveFrom="translate-x-0"
                leaveTo={isNext ? 'translate-x-full' : '-translate-x-full'}
              >
                <Image
                  src={images[currentIndex]}
                  alt={`img-${currentIndex}`}
                  fill
                  style={{ objectFit: "contain" }}
                  className="w-full z-50"
                  onLoad={handleImageLoad}
                />
              </Transition>


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
                  className={`h-2 w-2 rounded-full inline-block mx-1 cursor-pointer ${index === currentIndex ? 'bg-red' : 'bg-gray-500'
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

// "w-1/4 opacity-50 absolute right-0"