import React, { useState } from "react";
import { Button } from "antd";

import InstaImage from "../Components/icons/Insta.svg";
import TwitterImage from "../Components/icons/twitter.svg";
import Logo from "../Components/images/logo.svg";
import Logo1 from "../Components/images/transparentLogo.png";
import Modal from "../Components/Common/Modal";

function Index(props) {
	const [navbar, setNavbar] = useState(false);
	const [modal, setModal] = useState(null);
	const onClose = () => {
		setModal(null);
	};

	const onViewClicked = () => {
		setModal(<Modal onClose={() => onClose()} />);
	};

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(false);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeBackground);

	return (
		<>
    {modal && modal}
			<div className={navbar ? "navbar active" : "navbar"}>
				<div className="">
					<img src={Logo1} alt="" />
					<h3>KRYPTOKLOTH</h3>
				</div>
				<Button
					onClick={() => {
						onViewClicked();
					}}
					className="button-property"
				>
					Request Early Access
				</Button>
			</div>

			{props.children}

			{/* footer section  */}
			<div className="container-fluid footer mt-5">
				<div className="row">
					<div className="footer-elements">
						<div className="d-flex gap-4 mt-3">
							<h5>Connect with Kryptocloth </h5>
							<img src={InstaImage} alt="" />
							<img src={TwitterImage} alt="" />
						</div>
						<br />
					</div>
				</div>
			</div>
		</>
	);
}

export default Index;
