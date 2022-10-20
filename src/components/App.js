import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Preload from "./Preload";
import ellipse1 from "../assets/ellipse1.svg";

const App = () => {
    const headerText1 = useRef(null);
    const headerText2 = useRef(null);
    const headerText3 = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(headerText1.current, {
            delay: 4,
            opacity: 1,
            y: 0,
            duration: 1.8,
        }).to([headerText2.current, headerText3.current], {
            translateX: 0,
            opacity: 100,
            duration: 1.8,
        });
    }, []);

    return (
        <div className="h-screen w-screen relative before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('../assets/bg-image.avif'),url('../assets/bg-image.png')] before:opacity-10 p-5 md:p-10 bg-orange-50">
            <Preload />
            <div className="md:hidden flex items-center justify-between">
                <p className="leading-3 mb-3 text-zinc-600 uppercase">
                    portfolio
                </p>
                <div className="leading-3 mb-3 text-zinc-600">Hamburger</div>
            </div>
            <hr className="w-full h-[1.5px] mb-5 bg-zinc-500" />
            <nav className="w-full items-start text-gray-700 font-light uppercase justify-between hidden md:flex">
                <a href="#home">home</a>
                <ul>
                    <li>
                        <a href="#about">about me</a>
                    </li>
                    <li>
                        <a href="#works">works</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                </ul>
            </nav>
            <header className="w-full mt-5 md:mt-10 overflow-hidden">
                <div
                    className="translate-y-[-100vh] opacity-0 font-cormorant font-light text-zinc-700"
                    ref={headerText1}
                >
                    <div className="relative w-full md:w-[85%] mx-auto flex flex-col md:flex-row items-end md:items-center justify-start uppercase text-6xl md:text-8xl lg:text-xxl">
                        <h1>front</h1>
                        <div className="rotate-[-10deg] hidden md:block">-</div>
                        <h1>end</h1>
                    </div>
                    <div className="w-full md:w-[85%] mx-auto flex items-center justify-end uppercase text-4xl md:text-7xl lg:text-xxl">
                        <h1>developer</h1>
                    </div>
                </div>
                <div className="opacity-100 font-cormorant text-zinc-700 mt-5">
                    <div className="w-full md:w-[85%] mx-auto flex items-center justify-between">
                        <h3
                            className="translate-x-[-100vh] opacity-0 text-xl"
                            ref={headerText2}
                        >
                            Completing your <br /> design ideas
                        </h3>
                        <h3
                            className="translate-x-[100vh] opacity-0 uppercase font-semibold text-4xl tracking-widest"
                            ref={headerText3}
                        >
                            george s. <br />{" "}
                            <span className="font-light">afrifa</span>
                        </h3>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default App;
