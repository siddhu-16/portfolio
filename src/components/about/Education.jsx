import React from "react";
import { faRoad } from "@fortawesome/free-solid-svg-icons";


import Card from "../common/card";

import "./styles/Edu.css";


const Education = () => {
	return (
		<div className="works">
			<Card
				icon={faRoad}
				title="MY JOURNEY"

				body={
					<div className="works-body">
						<div className="work">
						<img
								src="./edu.png"
								alt="School"
								className="work-image"
						/>
							<div className="work-title">School</div>
							<div className="work-subtitle">
								Govindrao High-School,Ichalkaranji
							</div>
							<div className="work-duration">2006 - 2017</div>
							
						</div>
						<div className="work">
						<img
								src="./edu.png"
								alt="high-school"
								className="work-image"
						/>
							<div className="work-title">11th & 12th</div>
							<div className="work-subtitle">
								Vyankatrao High-school & jr. College,Ichalkaranji
							</div>
							<div className="work-duration">2017 - 2019</div>

						</div>
						<div className="work">
						<img
								src="./edu.png"
								alt="diploma"
								className="work-image"
						/>
							<div className="work-title">Diploma</div>
							<div className="work-subtitle">
								Sharad Institute of Technology Polytechnic ,Ichalkaranji
							</div>
							<div className="work-duration">2019 - 2021</div>
						</div>

						<div className="work">
						<img
								src="./edu.png"
								alt="college"
								className="work-image"
						/>
							<div className="work-title">Graduation</div>
							<div className="work-subtitle">
								DKTE Society's Textile & Engineering Institute,Ichalkaranji
							</div>
							<div className="work-duration">2021 - Present</div>

						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Education;
