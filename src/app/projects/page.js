"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ProjectsPage = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState("03");
  const artboardRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => {
        const nextIndex = (parseInt(prevIndex) + 1) % 49;

        // Skip '01' and '02' and ensure it's a two-digit number
        if (nextIndex === 0 || nextIndex === 1 || nextIndex === 2) {
          return "03";
        }

        return nextIndex.toString().padStart(2, "0");
      });
    }, 1000); // Change photo every 1 second

    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
    };
  }, []);

  const currentPhoto = `/images/quickstep/receiving/IMG_02${currentPhotoIndex}.PNG`;

  return (
    <div className="sm:pt-8">
      <div className="flex flex-start flex-col sm:flex-row max-w-xl justify-center">
        <div className="mr-16">
          <h2 className="text-2xl font-bold mb-2">Foxtrot Market: </h2>
          <div className="flex flex-col  max-w-sm justify-between">
            <p className="text-xl mb-2">Quickstep</p>
            <p className="text-sm">Inventory management app</p>
          </div>
        </div>
        <div
          className="mockup-phone border-primary ml-0 mx-auto ml-auto sm:m-auto mt-8 sm:mt-0"
          ref={artboardRef}
        >
          <div className="camera"></div>
          <div className="display">
            <div
              style={{ height: "599px", width: "284px" }}
              className={`artboard artboard-demo phone-1 relative ease-in-out duration-1000 
              ${
                currentPhoto !== ""
                  ? "transition-opacity opacity-100"
                  : "transition-opacity opacity-0"
              }`}
            >
              <Image
                src={currentPhoto}
                alt="Quickstep - Receiving screenshot"
                height={600}
                width={285}
                className={currentPhoto === "" ? "hidden" : "block"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
