import React from "react";
import { Link } from "react-router-dom";

const Works = () => {
    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="bg-yellow-500 w-full p-16 md:p-44 text-ash flex items-center justify-start">
                <div className="max-w-[30rem] ">
                    <p className="font-light italic font-Josefin text-xl capitalize mb-5">
                        take a look
                    </p>
                    <h1 className="text-5xl md:text-7xl capitalize font-black mb-10">
                        my <br /> works.
                    </h1>
                    <p className="font-figtree text-sm md:text-md md:text-lg mb-7">
                        Lorem ipsum dolor sit amet, cons ctetur adipisng elit,
                        seled do iumd tempor incidnt uhgt labore reliut dolore
                        magna aliqua.
                    </p>
                    <Link
                        to="/works"
                        className="capitalize font-figtree font-semibold border-b-2 border-ash py-1 text-xl hover:text-blue-500 transition-colors hover:border-blue-500"
                    >
                        explore <span className="ml-2">&gt;</span>
                    </Link>
                </div>
            </div>
            <Link
                to="/works"
                className="lg:relative bg-red-500 lg:w-[50%] flex items-center justify-center p-10 md:p-5"
            >
                <img
                    src={require("../assets/gym-small.png")}
                    alt=""
                    className="lg:absolute md:-left-32 lg:-left-48 z-30 drop-shadow-2xl"
                />
            </Link>
        </div>
    );
};

export default Works;
