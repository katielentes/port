"use client";
import React, { useState, useEffect, useRef } from "react";
import { imageFiles } from "./quickstepImageData"; // Import imageFiles from the imageData.js file
import Image from "next/image";

const ProjectsPage = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  const artboardRef = useRef(null);
  console.log(imageDimensions);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % imageFiles.length);
    }, 1000); // Change photo every 1 second

    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
    };
  }, [imageFiles]); // Include imageFiles in the dependency array

  const currentPhoto = imageFiles[currentPhotoIndex];

  return (
    <div className="">
      <div className="flex flex-start">
        <div className="mr-16">
          <h2 className="text-2xl font-bold mb-2">Foxtrot Market: </h2>
          <p className="text-xl mb-2">Quickstep</p>
          <p className="text-sm">
            Inventory <br />
            management app
          </p>
        </div>
        <div
          className="mockup-phone border-primary"
          style={{ margin: 0 }}
          ref={artboardRef}
        >
          <div className="camera"></div>
          <div className="display">
            <div
              style={{ height: "599px", width: "284px" }}
              className="artboard artboard-demo phone-1 relative ease-in-out duration-1000"
            >
              <Image
                src={currentPhoto}
                alt="Quickstep - Receiving screenshot"
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
