import React from "react";


import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";



import "./styles/projects.css";

const Projects = () => {
	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);



	return (
		<React.Fragment>


			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						{/* <div className="projects-logo">
							<Logo width={46} />
						</div> */}
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I’ve made trying to put my dent in the
							universe.
						</div>

						<div className="subtitle projects-subtitle">
							I've worked on a variety of projects over the years
							and I'm proud of the progress I've made.Here are some web based and application based projects are mentioned.
							just have a look.
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
