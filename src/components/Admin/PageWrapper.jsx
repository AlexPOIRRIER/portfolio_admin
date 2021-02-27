import React from "react";
import SideBar from "./Navigation/SideBar";

import '../../css/Admin/PageWrapper.css'

const PageWrapper = ({ children }) => {
	return (
		<div className="page_wrapper">
			<SideBar />
			<div className="page_content">
				<main>{children}</main>
			</div>
		</div>
	);
};

export default PageWrapper;
