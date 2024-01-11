import React from "react";


import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import Works from "../components/homepage/works";
import Education from "../components/about/Education";

import INFO from "../data/user";


import "./styles/about.css";

const About = () => {
	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);


	return (
		<React.Fragment>


			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
									
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

							<div className="about-left-side">
							<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="homepage.png"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
							</div>
						</div>


						<div className="about-main-down">
							<div className="about-right-side">
							<div className="title about-title">
								<Works />
							</div>
							</div>

							<div className="about-left-side">
								
								<div className="title about-title">
									<Education />
								</div>
								
							</div>
						</div>

					</div>
					<div className="page-footer">
						<Footer />
					</div>
					
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;


