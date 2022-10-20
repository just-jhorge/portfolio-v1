import React, { useEffect } from "react";
import gsap from "gsap";

const Preload = () => {
    useEffect(() => {
        gsap.to(".column", {
            duration: 3,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            stagger: 0.5,
            delay: 1,
            ease: "power1.Out",
        });
    }, []);

    return (
        <>
            <div className=" fixed top-0 left-0 h-full w-full grid grid-cols-3 opacity-100 z-50">
                <div className="clip-up column bg-black" />
                <div className="clip-up column bg-black" />
                <div className="clip-up column bg-black" />
            </div>
        </>
    );
};

export default Preload;
