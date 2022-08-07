import Navbar from "./Navbar";
import { RiFacebookFill, RiGithubFill, RiTwitterFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <header className="w-full h-[90vh] md:h-[100vh] overflow-hidden bg-[crimson] relative flex items-center justify-center px-10 py-5">
            <Navbar />
            <p className="absolute text-[#990000] text-big rotate-90 md:rotate-0 md:text-huge capitalize italic font-Monoton opacity-10 z-10">
                hello
            </p>
            <div className="text-center absolute z-20">
                <p className="text-[#333] font-[900] font-Play text-2xl md:text-3xl mb-5">
                    Hi, I'm Kwadwo.
                </p>
                <p className="text-white capitalize font-Montserrat font-[900] text-4xl md:text-9xl drop-shadow-2xl">
                    a frontend <br />
                    web developer
                </p>
            </div>
            <div className="absolute z-20 right-[30%] md:right-10 bottom-5 md:bottom-[35%] flex md:flex-col items-center justify-between md:space-y-20 md:space-x-0 space-x-10 space-y-0">
                <Link to="/" className="text-3xl text-ash">
                    <RiFacebookFill />
                </Link>
                <Link to="/" className="text-3xl text-ash">
                    <RiGithubFill />
                </Link>
                <Link to="/" className="text-3xl text-ash">
                    <RiTwitterFill />
                </Link>
            </div>
            <div className="hidden md:block absolute z-20 bottom-10 animate-bounce">
                <span className="text-5xl text-ash">&#8595;</span>
            </div>
        </header>
    );
};

export default Intro;
