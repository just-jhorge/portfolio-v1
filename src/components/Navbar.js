import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
    RiMenu3Fill,
    RiCloseFill,
    RiFacebookFill,
    RiGithubFill,
    RiTwitterFill,
} from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const homeLinks = [
        { name: "home", to: "/" },
        { name: "about", to: "#about" },
        { name: "projects", to: "#projects" },
        { name: "skills", to: "#skills" },
        { name: "contact", to: "#contact" },
    ];

    return (
        <AnimatePresence>
            <>
                <div className="absolute z-20 top-0 w-full flex justify-between items-center md:px-10 px-5 py-5">
                    <Link
                        to="/"
                        className="font-Montserrat text-[#333] font-[900] text-3xl md:text-4xl"
                    >
                        GAS.
                    </Link>
                    <div
                        className={`${
                            isOpen ? "hidden" : ""
                        } text-4xl cursor-pointer text-ash hover:text-white transition-colors`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <RiMenu3Fill />
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    className={`${
                        isOpen ? "fixed" : "hidden"
                    } bg-white h-full w-full z-50 shadow-lg top-0 flex flex-col-reverse md:flex-row items-center justify-center`}
                >
                    <div className="min-h-[30%] md:h-full w-full text-white flex flex-col items-center justify-center">
                        <div className="h-full w-full">
                            <img
                                src={require("../assets/pattern.png")}
                                alt="Pattern"
                                className="h-full w-full"
                            />
                        </div>
                        <div className="bg-blue-500 h-full w-full hidden py-14 px-20 md:flex items-end justify-between leading-loose font-Josefin">
                            <div className="flex flex-col space-y-5">
                                <h3 className="capitalize font-bold text-4xl">
                                    stay in touch.
                                </h3>
                                <a
                                    className="text-lg"
                                    href="mailto:sarpongk247@gmail.com"
                                >
                                    sarpongk247@gmail
                                </a>
                                <p className="text-lg">+233 241 385 150</p>
                                <p className="text-lg">Kumasi, Ghana</p>
                            </div>
                            <div className="flex flex-col space-y-5">
                                <h1 className="text-5xl font-bold">GAS.</h1>
                                <p className="text-lg">Let's get creative</p>
                                <div className="flex items-center justify-start space-x-5 text-2xl text-white">
                                    <RiFacebookFill />
                                    <RiGithubFill />
                                    <RiTwitterFill />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-full bg-white relative flex items-center justify-center">
                        <nav className="flex flex-col items-start justify-center text-ash">
                            {homeLinks.map((link) => (
                                <Link
                                    to={`${link.to}`}
                                    className="text-3xl md:text-5xl font-Josefin font-semibold md:font-bold my-4 md:my-10 capitalize hover:text-blue-400 transition-colors"
                                    key={link.name}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <div
                            className="absolute text-4xl right-5 md:right-10 top-5 cursor-pointer text-ash"
                            onClick={() => setIsOpen(false)}
                        >
                            <RiCloseFill />
                        </div>
                    </div>
                </motion.div>
            </>
        </AnimatePresence>
    );
};

export default Navbar;
