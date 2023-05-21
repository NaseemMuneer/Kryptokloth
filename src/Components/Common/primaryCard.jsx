import React from "react";
import CameraIcon from "../icons/camera.png";
import CartIcon from "../icons/cart.png";
import HeartIcon from "../icons/hand heart.png";
import SettingIcon from "../icons/setting.png";
import WorldIcon from "../icons/world.png";

const cardInfo = [
  {
    id: 1,
    image: SettingIcon,
    title: "Turn Images into designs",
    description:
      "From one image designers can generate original editable designs",
  },
  {
    id: 2,
    image: HeartIcon,
    title: "Generate 2D and 3D technical specs",
    description:
      "Desinaible smart technology helps you design your technical assets efficiently from beginning to end",
  },
  {
    id: 3,
    image: WorldIcon,
    title: "Authenticate your designs",
    description:
      "Ensure design validity and ownership are authenticated , so valuable items can be traded within the virtual space.",
  },
  {
    id: 4,
    image: CameraIcon,
    title: "Assess your enviromental impact",
    description:
      "Offset your fashion footprint and get to carbon neutral and aspire to be carbon negative",
  },
  {
    id: 4,
    image: CartIcon,
    title: "Sell your Creations and recreations",
    description:
      "Be part of a unique community marketplace that fosters Sustainably made remade and reborn physical and digital future forward fashion",
  },
];

function primaryCard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center pt-4">
          {cardInfo.map((card) => {
            return (
              <div className="card card-div col-3 m-2">
                <div className="card-body">
                  <img src={card.image} alt="" width={120} />
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default primaryCard;
