import { animate } from "motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        animate("nav", { opacity: [0, 1], y: [-20, 0] }, { duration: 0.6 });
    }, []);

    function scrollTo(id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setOpen(false); // close menu after click (mobile)
    }

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/10 bg-black/60">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

                {/* LOGO */}
                <Link
                    to="/"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setOpen(false);
                    }}
                >
                    <img
                        src="/bibhuti-logo.svg"
                        alt="Bibhuti Logo"
                        className="h-8 w-auto"
                    />
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-8 font-grotesk text-base font-semibold text-gray-200">
                    <button onClick={() => scrollTo("tech")} className="hover:text-white transition">Tech</button>
                    <button onClick={() => scrollTo("projects")} className="hover:text-white transition">Projects</button>
                    <button onClick={() => scrollTo("contact")} className="hover:text-white transition">Contact</button>
                    <button onClick={() => scrollTo("connect")} className="hover:text-white transition">Connect</button>
                    <Link to="/resources" className="hover:text-white transition">Resources</Link>
                </div>

                {/* HAMBURGER (MOBILE) */}
                <button
                    className="md:hidden text-2xl text-white"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Toggle navigation"
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden border-t border-white/10 bg-black/90">
                    <div className="flex flex-col px-6 py-4 gap-4 text-gray-200 font-semibold">
                        <button onClick={() => scrollTo("tech")}>Tech</button>
                        <button onClick={() => scrollTo("projects")}>Projects</button>
                        <button onClick={() => scrollTo("contact")}>Contact</button>
                        <button onClick={() => scrollTo("connect")}>Connect</button>
                        <Link to="/resources" onClick={() => setOpen(false)}>Resources</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
