"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import img1 from "public/images/quickstep/receiving/IMG_0203.PNG";
import img2 from "public/images/quickstep/receiving/IMG_0204.PNG";
import img3 from "public/images/quickstep/receiving/IMG_0205.PNG";
import img4 from "public/images/quickstep/receiving/IMG_0206.PNG";
import img5 from "public/images/quickstep/receiving/IMG_0207.PNG";
import img6 from "public/images/quickstep/receiving/IMG_0208.PNG";
import img7 from "public/images/quickstep/receiving/IMG_0209.PNG";
import img8 from "public/images/quickstep/receiving/IMG_0210.PNG";
import img9 from "public/images/quickstep/receiving/IMG_0211.PNG";
import img10 from "public/images/quickstep/receiving/IMG_0212.PNG";
import img11 from "public/images/quickstep/receiving/IMG_0213.PNG";
import img12 from "public/images/quickstep/receiving/IMG_0214.PNG";
import img13 from "public/images/quickstep/receiving/IMG_0215.PNG";
import img14 from "public/images/quickstep/receiving/IMG_0216.PNG";
import img15 from "public/images/quickstep/receiving/IMG_0217.PNG";
import img16 from "public/images/quickstep/receiving/IMG_0218.PNG";
import img17 from "public/images/quickstep/receiving/IMG_0219.PNG";
import img18 from "public/images/quickstep/receiving/IMG_0220.PNG";
import img19 from "public/images/quickstep/receiving/IMG_0221.PNG";
import img20 from "public/images/quickstep/receiving/IMG_0222.PNG";
import img21 from "public/images/quickstep/receiving/IMG_0223.PNG";
import img22 from "public/images/quickstep/receiving/IMG_0224.PNG";
import img23 from "public/images/quickstep/receiving/IMG_0225.PNG";
import img24 from "public/images/quickstep/receiving/IMG_0226.PNG";
import img25 from "public/images/quickstep/receiving/IMG_0227.PNG";
import img26 from "public/images/quickstep/receiving/IMG_0228.PNG";
import img27 from "public/images/quickstep/receiving/IMG_0229.PNG";
import img28 from "public/images/quickstep/receiving/IMG_0230.PNG";
import img29 from "public/images/quickstep/receiving/IMG_0231.PNG";
import img30 from "public/images/quickstep/receiving/IMG_0232.PNG";
import img31 from "public/images/quickstep/receiving/IMG_0233.PNG";
import img32 from "public/images/quickstep/receiving/IMG_0234.PNG";
import img33 from "public/images/quickstep/receiving/IMG_0235.PNG";
import img34 from "public/images/quickstep/receiving/IMG_0236.PNG";
import img35 from "public/images/quickstep/receiving/IMG_0237.PNG";
import img36 from "public/images/quickstep/receiving/IMG_0238.PNG";
import img37 from "public/images/quickstep/receiving/IMG_0239.PNG";
import img38 from "public/images/quickstep/receiving/IMG_0240.PNG";
import img39 from "public/images/quickstep/receiving/IMG_0241.PNG";
import img40 from "public/images/quickstep/receiving/IMG_0242.PNG";
import img41 from "public/images/quickstep/receiving/IMG_0243.PNG";
import img42 from "public/images/quickstep/receiving/IMG_0244.PNG";
import img43 from "public/images/quickstep/receiving/IMG_0245.PNG";
import img44 from "public/images/quickstep/receiving/IMG_0246.PNG";
import img45 from "public/images/quickstep/receiving/IMG_0247.PNG";
import img46 from "public/images/quickstep/receiving/IMG_0248.PNG";

const ProjectsPage = () => {
  const imagesList = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
  ];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const artboardRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % imagesList.length);
    }, 1000); // Change photo every 1 second

    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
    };
  }, [imagesList]); // Include imagesList in the dependency array

  const currentPhoto = imagesList[currentPhotoIndex];
  const aspectRatio = 16 / 9; // Adjust this to match your image's aspect ratio
  useEffect(() => {
    // Get the dimensions of the artboard div and set them as the width and height
    if (artboardRef.current && currentPhoto) {
      const artboardWidth = artboardRef.current.clientWidth;
      const artboardHeight = artboardWidth / aspectRatio; // Calculate height based on aspect ratio
      setImageDimensions({ width: artboardWidth, height: artboardHeight });
    }
  }, [currentPhoto, aspectRatio]);

  return (
    <div>
      <h1>Projects</h1>
      <p>Foxtrot: Inventory management app</p>
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 h-[675px]" ref={artboardRef}>
            <Image
              src={currentPhoto}
              alt="Quickstep - Receiving screenshot"
              width={imageDimensions.width}
              height={imageDimensions.height}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
