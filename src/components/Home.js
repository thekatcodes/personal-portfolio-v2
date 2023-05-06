import React from 'react';
// import glass from 'src/images/glasshome.png';
import { StaticImage } from "gatsby-plugin-image"


export default function Intro() {
    return (
        <section>
            {/* <div>
                <div>
                    <div>
                        <h1>Creative Developer</h1>
                        <h2>
                            Full-Stack capable
                        </h2>
                    </div>
                    <div>
                        <h1>Katie Liu</h1>
                        <h2>
                            Front-End addicted
                        </h2>
                    </div>
                </div>
            </div>
            <div>
                <a href="index.html#summary-header" class="arrow-link"><i class="fa-solid fa-angles-down"></i></a>
            </div> */}
            <StaticImage className='glass-home' src='../images/glasshome.png' alt='glass home'/>
        </section>
    )
}