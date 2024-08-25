import React from 'react'
import './Project.css'

import Project1Img from 'public/about/img1.jpeg'
import Project2Img from 'public/about/img2.jpeg'
import Project3Img from 'public/about/img3.jpeg'
import Project4Img from 'public/about/img4.jpeg'
import Project5Img from 'public/about/img5.jpeg'

const Home = () => {
    return (
        <div className="w-100 relative ml-[calc(-50vw+50%+10px)] w-[calc(100vw-20px)] overflow-x-hidden px-[16px] pt-[2em]">
            <section className="w-100 my-0 mt-16">
                <div className="ml-auto flex w-full gap-[10rem]">
                    <div className="about-col flex flex-col gap-4 text-justify">
                        <p>(about me)</p>
                        <p>
                            Hey, I'm Sasank Reddy, also known as "decentparadox." I'm currently a
                            student pursuing a degree in Computer Science with a focus on Artificial
                            Intelligence at Amrita School of Engineering, Bangalore. During the day,
                            I work as a graphic and UI/UX designer, and I've got two years of
                            experience under my belt. I'm also into tech stuff like reverse
                            engineering, game hacking, and web development. On weekends, you'll find
                            me diving into Capture The Flag (CTF) challenges.
                        </p>
                        <p>
                            I'm all about learning and growth. My goal is to become a versatile
                            problem solver, so I'm constantly improving my skills in areas like
                            blockchain, app development, machine learning, and networking. I believe
                            in being well-prepared before taking on any projects. When I'm not busy
                            with tech, I love reading books and manga. It's my way of staying
                            creative and inspired. I don't limit myself to one industry; I'm ready
                            to adapt and take on new challenges. While I don't have a fancy mission
                            statement, my passion for learning and mastering new skills drive
                        </p>
                    </div>
                </div>
            </section>

            <div className="projects-nav">
                <div className="projects-nav-container">
                    <div className="project-item">
                        <a href="/Projects/Kalser">
                            <div className="project-link">
                                <div className="project-l">
                                    <div className="project-link-img">
                                        <img src="static/images/kalser.png" alt="" />
                                    </div>
                                    <div className="project-name">
                                        <h2>Kalser</h2>
                                    </div>
                                </div>
                                <div className="project-date">
                                    <p>TUI tool to rice your linux</p>
                                    <p>/2023</p>
                                </div>
                                <div className="project-dir">
                                    <p>&#8599;</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="project-item">
                        <a href="/Projects/evanix">
                            <div className="project-link">
                                <div className="project-l">
                                    <div className="project-link-img">
                                        <img src="static/images/evanix.png" alt="" />
                                    </div>
                                    <div className="project-name">
                                        <h2>Eva 01 nix</h2>
                                    </div>
                                </div>
                                <div className="project-date">
                                    <p>Nix os Flakes dotfiles</p>
                                    <p>/2024</p>
                                </div>
                                <div className="project-dir">
                                    <p>&#8599;</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="project-item">
                        <a href="/Projects/Orca">
                            <div className="project-link">
                                <div className="project-l">
                                    <div className="project-link-img">
                                        <img src="static/images/orca.png" alt="" />
                                    </div>
                                    <div className="project-name">
                                        <h2>Orca</h2>
                                    </div>
                                </div>
                                <div className="project-date">
                                    <p>Astro integration for Graphic Designers</p>
                                    <p>/2024</p>
                                </div>
                                <div className="project-dir">
                                    <p>&#8599;</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="project-item">
                        <a href="/Projects/bi0smeetups">
                            <div className="project-link">
                                <div className="project-l">
                                    <div className="project-link-img">
                                        <img src="static/images/bi0s.png" alt="" />
                                    </div>
                                    <div className="project-name">
                                        <h2>bi0s Meetups</h2>
                                    </div>
                                </div>
                                <div className="project-date">
                                    <p>bi0s meetups website</p>
                                    <p>/2024</p>
                                </div>
                                <div className="project-dir">
                                    <p>&#8599;</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-100 opacity-50">
                <div className="w-100 mx-0 my-[0.75em] h-[0.65px] bg-foreground"></div>
            </div>
        </div>
    )
}

export default Home
