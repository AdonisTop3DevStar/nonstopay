import { useCallback } from "react";
import { Image } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { BannerAnimation1, BannerAnimation2, BannerAnimation3, BannerAnimation4, BannerAnimation5, BannerAnimation6, BannerAnimationHero } from "../assets";

export const FramerBackground = () => {
    return (
        <div class="bg-container">
            <div class="frame"></div>
            <div class="frame"></div>
            <div class="frame"></div>
            <div class="frame"></div>
            <div class="frame"></div>
            <div class="frame"></div>
            <div class="frame"></div>
            <div class="frame"></div>
            <div class="frame"></div>
            <div class="frame"></div>
            <div class="frame"></div>
            <div class="frame"></div>
            <div class="frame"></div>
            <div class="frame"></div>
        </div>
    )
}

export const ParticlesBackground = () => {

    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#031013",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#27CCB8",
                    },
                    links: {
                        color: "#0D3141",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export const BannerAnimation = () => {
    return(
        <div className="BannerAnimation position-relative">
            <Image src={BannerAnimation1} alt="banner-animation-1" className="banner-animation-1"/>
            <Image src={BannerAnimation2} alt="banner-animation-2" className="banner-animation-2"/>
            <Image src={BannerAnimation3} alt="banner-animation-3" className="banner-animation-3"/>
            <Image src={BannerAnimation4} alt="banner-animation-4" className="banner-animation-4"/>
            <Image src={BannerAnimation5} alt="banner-animation-5" className="banner-animation-5"/>
            <Image src={BannerAnimation6} alt="banner-animation-6" className="banner-animation-6"/>
            <Image src={BannerAnimationHero} alt="banner-animation-hero" className="banner-animation-hero"/>
        </div>
    )
}