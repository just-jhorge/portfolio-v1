import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </motion.div>
            </AnimatePresence>
        </BrowserRouter>
    );
};

export default App;
