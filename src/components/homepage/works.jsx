import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Progress_bar from "../about/Progresbar";
import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="SKILLS"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./c.png"
								className="work-image"
							/>
							<div className="work-title">C</div>
							<div className="work-subtitle">
								<Progress_bar progress='60'  height={20} />
							</div>
							
						</div>

						<div className="work">
							<img
								src="./cpp.png"
								className="work-image"
							/>
							<div className="work-title">C++</div>
							<div className="work-subtitle">
								<Progress_bar progress='70'  height={20} />
							</div>
							
						</div>
						<div className="work">
							<img
								src="./java.png"
								className="work-image"
							/>
							<div className="work-title">JAVA</div>
							<div className="work-subtitle">
								<Progress_bar progress='80'  height={20} />
							</div>
							
						</div>
						<div className="work">
							<img
								src="./ft.png"
								className="work-image"
							/>
							<div className="work-title">Frontend Technologies</div>
							<div className="work-subtitle">
								<Progress_bar progress='60'  height={20} />
							</div>
							
						</div>
						<div className="work">
							<img
								src="./sql.png"
								className="work-image"
							/>
							<div className="work-title">SQL</div>
							<div className="work-subtitle">
								<Progress_bar progress='70'  height={20} />
							</div>
							
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
