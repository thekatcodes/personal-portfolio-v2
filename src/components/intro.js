import React from 'react';
export default function Intro() {
    return (
        <section class="home-page">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 fade-in-text">
                        <h1 class="intro">Hi there! I'm Katie Liu</h1>
                        <h2 class="description">
                            Front-end developer based in Canada
                            <i class="fa-brands fa-canadian-maple-leaf"></i>
                        </h2>
                    </div>
                    <div class="col-lg-4 d-flex justify-content-center fade-in-text">
                        <div class="ellipse"></div>
                        <img src="images/profilepic.png" alt="Profile picture" class="profile-pic" />
                    </div>
                </div>
            </div>
            <div class="arrow" id="arrow-down">
                <a href="index.html#summary-header" class="arrow-link"><i class="fa-solid fa-angles-down"></i></a>
            </div>
        </section>
    )
}