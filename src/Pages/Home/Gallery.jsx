import React from "react";
import Giff1 from "../../Components/Common/Giff Images/1.gif";
import Giff2 from "../../Components/Common/Giff Images/2.gif";
import Giff3 from "../../Components/Common/Giff Images/3.gif";
import Giff4 from "../../Components/Common/Giff Images/4.gif";
import Giff5 from "../../Components/Common/Giff Images/5.gif";
import Giff6 from "../../Components/Common/Giff Images/6.gif";
import Giff7 from "../../Components/Common/Giff Images/7.gif";
import Giff8 from "../../Components/Common/Giff Images/8.gif";
import Giff9 from "../../Components/Common/Giff Images/9.gif";
import Giff10 from "../../Components/Common/Giff Images/10.gif";
import Giff11 from "../../Components/Common/Giff Images/11.gif";
import Sell from "../../Components/images/sell2.png";
import SecondImage from "../../Components/images/secondImage.png";
import Creativegiff from "../../Components/Common/Giff Images/creativegiff.gif";
import Skirt from "../../Components/images/skirt.png";
import skirt360 from "../../Components/Common/Giff Images/360.gif";

function Gallery() {
  const imageGallery1 = [
    {
      id: 1,
      src: Giff9,
      alt: "Image 1",
    },
    {
      id: 2,
      src: SecondImage,
      alt: "Image 2",
    },
  ];
  const imageGallery2 = [
    {
      id: 4,
      src: Sell,
      alt: "Image 3",
    },
    {
      id: 5,
      src: Giff11,
      alt: "Image 3",
    },
    {
      id: 6,
      src: Giff6,
      alt: "Image 3",
    },
  ];
  const imageGallery3 = [
    {
      id: 7,
      src: Giff7,
      alt: "Image 3",
    },
    {
      id: 8,
      src: Giff8,
      alt: "Image 3",
    },
    {
      id: 9,
      src: Giff9,
      alt: "Image 3",
    },
    {
      id: 7,
      src: Giff10,
      alt: "Image 3",
    },
  ];
  const imageGallery4 = [
    {
      id: 10,
      src: Giff11,
      alt: "Image 3",
    },
  ];

  return (
    <>
      <div className="container-fluid w-75">
        <div className="row">
          <div className="col-3 gallery-div-1">
            {imageGallery1.map((image) => (
              <div key={image.id}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>

          <div className="col-4 gallery-div-2">
            <img className="sell-image" src={Sell} alt="" />
            <div className="d-flex">
              <div className="">
                <img  src={Giff11} alt=""/>
                <img  src={Creativegiff} alt="" />
                <p></p>
              </div>
              <img className="gallery-image-5" src={Skirt} alt=""/>
            </div>
          </div>

          <div className="col-4 gallery-div-3">
            <div className="row ">
              <div className="col-6">
                <img src={Giff5} alt="" />
                <img src={skirt360} alt="" />
              </div>
              <div className="col-6">
                <img src={Giff7} alt="" />
                <img src={Giff8} alt="" />
                <img src={Giff3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
