import React, { useState } from "react";
import Layout from "../../Layout/Index";
import { Button, Space, Upload } from "antd";
import Gallery from "./Gallery";
import Video from "./Video";
import PrimaryCard from "../../Components/Common/primaryCard";
import MarketPlace from "../../Components/images/Market place and NFT (5).png";
import FinalSection from "../../Components/Common/Giff Images/Finale for first section of KryptoKloth-min.gif";
import PrimaryModel from "../../Components/Common/primaryModel";
import FashionDesign from "../../Components/Common/Giff Images/FashionDesign.gif";

function Index() {
  const [modal1Open, setModal1Open] = useState(false);
  const [modalClose, setModalClose] = useState(true);

  return (
    <>
      <Layout>
        <div className="container-fluid home-container pt-5">
          {/* Intro Container  */}
          <div className="intro-container">
            <h1>
              Shaping a sustainable fashion future in the age of artificial
              intelligence.
            </h1>
            <div className="choose-input">
              <p>Upload an image of the design that inspires you</p>
              <div className="upload-container">
                <Button
                  onClick={() => setModal1Open(true)}
                  className="button-property-2"
                >
                  Choose
                </Button>
              </div>
            </div>
          </div>

          {/* // Gallery Section */}
          <div className="gallery-container">
            <Gallery />
          </div>

          {/* About kryptokloth  */}
          <div className="about-kryptokloth">
            <h1>Take a moment or two to get to know Kryptokloth</h1>
            <p>
              And then go change the world of fashion in a new and sustainable
              way
            </p>
            <div className="conatiner-fluid video-container">
              <Video />
            </div>
          </div>

          {/* assistance container  */}
          <div className="container-fluid assist-container">
            <div className="row justify-content-between px-5">
              <div className="col-6">
                <h1>
                  Your fashion design creative assistant from beginning to end
                </h1>
                <p className="px-5">
                  Discover boundless inspiration for your upcoming fashion
                  designs by harnessing the power of AI as your fashion
                  assistant
                </p>
                <div className="">
                  <Button className="button-property">
                    Get started upload an image
                  </Button>
                </div>
              </div>

              <div className="col-6">
                <img src={FashionDesign} alt="" width={550} />
              </div>
            </div>
          </div>

          {/* //cards container  */}
          <div className="container-fluid card-container">
            <h1>Advanced AI and web 3 tools make it easy</h1>
            <PrimaryCard />
          </div>

          {/* //web3 and hassle-free container  */}
          <div className="container-fluid web3-container ">
            <div className="row justify-content-between pt-5 align-items-center">
              <h1 className="text-center mb-5">
                Advanced and intuitive AI and Web 3 Tools to make your fashion
                future sustainable and hassle-free
              </h1>
              <div className="col-6 advance-ai">
                <h3>
                  Welcome to the new era of Marketplace
                </h3>
                <p>
                  A creative 360 "microverse" where designers can come
                  together to change the world. Be part of the new AI era where
                  physical meets digital and reducing emissions is paramount
                </p>
              </div>
              <div className="col-6 text-center">
                <img src={MarketPlace} alt="" width={650} />
              </div>
            </div>
          </div>

          {/* fashion future container  */}
          <div className="container-fluid finishing-touch">
            <div className="row justify-content-between pt-5 align-items-center">
              <div className="col-12 finishing-content">
                <h1>We are putting the finishing touches on Kryptokloth</h1>
                <p>
                  Be the first to join our list to get updates before we go live
                </p>
                <div className="d-flex email-dev">
                  <input
                    type="text"
                    placeholder="Get update on mobile and other Kryptonews"
                  />
                  <Button className="button-property-2">Email me</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-image text-center">
            <h1>Unleash your fashion future</h1>
            <Button className="button-property">
              Try Kryptokloth for free
            </Button>
          </div>
        </div>
      </Layout>

      {/* //model here for login */}

      {/* {modal1Open && (
        <PrimaryModel modal1Open setModal2Open open onOK onCancel  />
      )} */}
    </>
  );
}

export default Index;
