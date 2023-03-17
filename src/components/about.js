import React from 'react';
import Skills from "./skills"

export default function About() {
    return (
    <section class="about-content">
        <div class="about-style">
            <h1 id="about-header">About me</h1>
        </div>
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="center-content col-lg-6 d-flex justify-content-end">
                    <img src="images/about-me-pic.jpg" alt="Photo of Katie" class="img-fluid about-pic" />
                </div>
                <div class="center-content col-lg-6 ml-lg-auto d-flex justify-content-start">
                    <p class="about-desc">
                        Nice to meet you, my name is Katie! I am your friendly
                        neighbourhood web developer 👩🏻‍💻
                        <br /><br />Creative at heart and equipped with a strong eye for
                        detail, I value working beyond barriers and taking the most from
                        the world's variety in creating functional projects. Diligence and
                        compassion are the pillars that guide me in all that I do,
                        especially when it comes to my work. <br /><br />I am passionate
                        about technology, eager to contribute more knowledge to my
                        personal and professional training. I invite you to get to know a
                        little bit more about me!
                    </p>
                </div>
            </div>
        </div>
        <div class="about-style">
            <h1 id="skills-header">Skills</h1>
        </div>
        <Skills />
        <div class="row">
            <a href="portfolio.html" class="btn-portfolio-about d-flex"
                id="portfolio-button-about">Go to Portfolio</a>
                <a href="files/Katie_Liu_CV_2023.pdf" target="_blank" class="btn-portfolio-about d-flex"
                id="portfolio-button-about">Download CV</a>
        </div>
    </section>
    )
}