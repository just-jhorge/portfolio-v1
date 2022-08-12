import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full bg-slate-50">
            <div className="w-full md:max-w-[30%] h-full">
                <img
                    src={require("../assets/pattern-2.webp")}
                    alt="Pattern"
                    className="w-full h-full"
                />
            </div>
            <div className="w-full flex items-center justify-center text-ash">
                <div className="max-w-[30rem] px-12 py-16 md:px-0 md:py-0">
                    <h4 className="font-light italic font-Josefin text-xl capitalize mb-5">
                        i'm an open book
                    </h4>
                    <h1 className="text-5xl md:text-7xl capitalize font-black mb-10">
                        about <br /> me.
                    </h1>
                    <p className="font-figtree text-md md:text-lg mb-5">
                        Lorem ipsum dolor sit amet, cons ctetur adipisng elit,
                        seled do eiumod tempor incidnt uhgt labore reliut dolore
                        magna aliqua.
                    </p>
                    <Link
                        to="/about"
                        className="capitalize font-figtree font-semibold border-b-2 border-ash py-1 text-xl hover:text-blue-500 transition-colors hover:border-blue-500"
                    >
                        learn more <span className="ml-2">&gt;</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
