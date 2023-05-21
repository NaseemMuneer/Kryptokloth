import React from "react";
import { FaTimes } from "react-icons/fa";
function Modal({ onClose }) {
	return (
		<>
			<div className="modal-container">
				<div className="modal-body">
					<div className="upper-part">
						<div className="close-icon-wrapper">
							<FaTimes
								className="close-icon"
								onClick={() => {
									onClose && onClose();
								}}
							/>
						</div>
						<p>
							Lorem ipsum 
						</p>
					</div>
					<div>
						<a className="google-link" href="#">
							<img
								className="google-logo"
								src="https://blog.hubspot.com/hubfs/image8-2.jpg"
								alt="logo"
							/>
							Sign up or sign in with Google account
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Modal;
