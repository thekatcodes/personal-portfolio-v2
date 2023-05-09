import React from "react";
import Skills from "./Skills";
import { StaticImage } from "gatsby-plugin-image";

export default function About() {
	return (
		<section className="about-content">
			<div className="about-header">
				<h1>About me</h1>
			</div>
			<div className="container-fluid">
				<div className="row align-items-center">
					<StaticImage
						classNameName="about-pic"
						src="../images/profilepic.png"
						alt="Profile picture"
					/>
				</div>

				<div className="center-content col-lg-6 ml-lg-auto d-flex justify-content-start">
					<p className="about-desc">
						Nice to meet you, my name is Katie! I am your friendly neighbourhood
						web developer 👩🏻‍💻
						<br />
						<br />
						Creative at heart and equipped with a strong eye for detail, I value
						working beyond barriers and taking the most from the world's variety
						in creating functional projects. Diligence and compassion are the
						pillars that guide me in all that I do, especially when it comes to
						my work. <br />
						<br />I am passionate about technology, eager to contribute more
						knowledge to my personal and professional training. I invite you to
						get to know a little bit more about me!
					</p>
				</div>
			</div>
			<div className="about-style">
				<h1 id="skills-header">Skills</h1>
			</div>
			<Skills />
			<div className="row">
				<a
					href="portfolio.html"
					className="btn-portfolio-about d-flex"
					id="portfolio-button-about"
				>
					Go to Portfolio
				</a>
				<a
					href="files/Katie_Liu_CV_2023.pdf"
					target="_blank"
					className="btn-portfolio-about d-flex"
					id="portfolio-button-about"
				>
					Download CV
				</a>
			</div>
		</section>
	);
}
