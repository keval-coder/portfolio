"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// Image data array
const images = [
  <>
    <div className="relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold ">Project Manager</h1>
      <h2 className="text-2xl md:text-4xl italic  mt-2">
        & Full Stack Developer
      </h2>
      <p className="mt-4  text-lg max-w-lg mx-auto">
        Premium Web Design, Development, and SEO services to help your business
        stand out.
      </p>
    </div>
  </>,
  <>
    <div>Second Div</div>
  </>,
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(true);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // // Handle mouse over event
  // const handleMouseOver = (): void => {
  //   setIsHovered(true);
  // };

  // // Handle mouse leave event
  // const handleMouseLeave = (): void => {
  //   setIsHovered(false);
  // };

  return (
    <main>
      <div className="relative w-full h-screen min-h-full flex flex-col place-content-center items-center overflow-hidden">
        <div className="top-32">
          <div className="flex justify-center gap-5 items-center p-[12px]">
            <div className="text-xl pr-3 font-semibold">MK</div>
            <nav className="flex space-x-6">
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
              <a href="#" className="hover:text-gray-400">
                Work
              </a>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
              <a href="#" className="hover:text-gray-400">
                Blog
              </a>
            </nav>
            <button
              type="button"
              className="px-4 py-2 font-bold rounded-md commonBorder"
            >
              Let's Talk
            </button>
          </div>
        </div>
        <div className="container h-screen flex items-center justify-between">
          {/* <div
            className="relative h-[460px] mx-12 group hover:-translate-y-2"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <div>Mouse Hover</div>
          </div> */}
          <button
            type="button"
            className="commonBorder w-10 h-30 break-words px-4 py-2 font-bold rounded-md"
            onClick={prevSlide}
          >
            BACK
            {/* <ChevronLeft className="text-gray-400 group-hover:text-white" /> */}
          </button>
          <div className="justify-center">
            {images.map((ele, index) => (
              <>{index === currentIndex && ele}</>
            ))}
          </div>
          <button
            type="button"
            className="commonBorder w-10 h-30 break-words px-4 py-2 font-bold rounded-md"
            onClick={nextSlide}
          >
            NEXT
            {/* <ChevronRight className="text-gray-400 group-hover:text-white" /> */}
          </button>
        </div>
      </div>
    </main>
    // <div
    //   className="relative flex flex-col bg-cover bg-center opacity-30 items-center justify-center min-h-screen text-center"
    //   // style={{
    //   //   backgroundImage: "url('/assets/common/BG_Image.avif')",
    //   // }}
    // >
    //   {/* <div className="absolute inset-0  opacity-70"></div> */}

    //   {/* <div className="relative z-10">
    //     <h1 className="text-4xl md:text-6xl font-bold text-white">
    //       Web Designer
    //     </h1>
    //     <h2 className="text-2xl md:text-4xl italic text-white mt-2">
    //       & Developer
    //     </h2>
    //     <p className="mt-4 text-gray-300 text-lg max-w-lg mx-auto">
    //       Premium Web Design, Development, and SEO services to help your
    //       business stand out.
    //     </p>
    //   </div> */}

    //   <div className="absolute top-0 flex justify-center items-center p-[12px] bg-slate-200">
    //     <div className="text-xl pr-3 font-semibold">MK</div>
    //     <nav className="flex space-x-6">
    //       <a href="#" className="hover:text-gray-400">
    //         Services
    //       </a>
    //       <a href="#" className="hover:text-gray-400">
    //         Work
    //       </a>
    //       <a href="#" className="hover:text-gray-400">
    //         About
    //       </a>
    //       <a href="#" className="hover:text-gray-400">
    //         Blog
    //       </a>
    //     </nav>
    //     <a
    //       href="#"
    //       className="px-4 py-2 bg-yellow-600 text-black font-bold rounded-md"
    //     >
    //       Let's Talk
    //     </a>
    //   </div>

    //   {/* <div className="absolute bottom-6 left-6">
    //     <span className="text-xs text-green-500">● AVAILABLE</span>
    //   </div>

    //   <div className="absolute bottom-6 right-6">
    //     <button className="px-4 py-2 bg-white text-black font-semibold rounded-md">
    //       Buy Template
    //     </button>
    //   </div> */}
    // </div>
  );
}
