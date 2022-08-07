import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

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
                        } text-4xl cursor-pointer`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <RiMenu3Fill />
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 2 }}
                    className={`${
                        isOpen ? "fixed" : "hidden"
                    } bg-white h-full w-full  z-50 shadow-lg grid grid-cols-2`}
                >
                    <div className="text-white grid grid-rows-2">
                        <div className="bg-green-200">
                            <img
                                src={require("../assets/pattern.png")}
                                alt="Pattern"
                                className="h-full w-full"
                            />
                        </div>
                        <div className="bg-blue-500 p-20 flex items-end justify-between leading-loose font-Josefin">
                            <div>
                                <h3 className="capitalize  font-bold text-4xl">
                                    stay in touch.
                                </h3>
                                <a href="mailto:sarpongk247@gmail.com">
                                    sarpongk247@gmail
                                </a>
                                <p>+233 241 385 150</p>
                                <p>Kumasi, Ghana</p>
                            </div>
                            <div>Second content</div>
                        </div>
                    </div>
                    <div className="relative text-ash flex flex-col items-start justify-center px-40 py-5">
                        {homeLinks.map((link) => (
                            <Link
                                to={`${link.to}`}
                                className="text-4xl font-Josefin font-bold my-10 capitalize"
                                key={link.name}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}.
                            </Link>
                        ))}
                        <div
                            className="absolute right-10 top-5 text-4xl cursor-pointer"
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
