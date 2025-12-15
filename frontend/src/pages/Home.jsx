import { animate } from "motion";
import { useEffect, useState } from "react";
import FeaturedProjectsSwiper from "../components/FeaturedProjectsSwiper";
import HireMeModal from "../components/HireMeModal";
import Skills from "../components/Skills";
import Connect from "../components/Connect";
import SayHello from "../components/SayHello";
import ProjectsGrid from "../components/ProjectsGrid";



export default function Home() {
    // ✅ SINGLE source of truth for modal state
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const elements = document.querySelectorAll(".fade-up");

        if (elements.length > 0) {
            animate(
                elements,
                { opacity: [0, 1], y: [40, 0] },
                { duration: 0.8 }
            );
        }
    }, []);

    return (
        <main className="pt-32 space-y-40">

            {/* HERO */}
            <section className="relative w-full pt-10 pb-14">
                <div className="max-w-6xl mx-auto px-6">

                    {/* NAME + ROLE */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
                            Hi there, I’m Bibhuti Bhusan Naik
                        </h1>

                        <p
                            className="mt-3 text-lg sm:text-xl md:text-2xl"
                            style={{ color: "var(--muted)" }}
                        >
                            Aspiring Software Engineer
                        </p>
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col md:flex-row items-center gap-12 md:-mt-4">

                        {/* IMAGE — appears first on mobile */}
                        <div className="order-1 md:order-2 flex-1 flex justify-center">
                            <div
                                className="
            w-44 h-44 sm:w-52 sm:h-52 md:w-72 md:h-72
            rounded-full
            overflow-hidden
            border border-white/20
            shadow-xl
            group
          "
                            >
                                <img
                                    src="/bibhuti_image.jpg"
                                    alt="Profile"
                                    className="
              w-full h-full
              object-cover
              transition-transform duration-500 ease-out
              group-hover:scale-110
            "
                                />
                            </div>
                        </div>

                        {/* TEXT — appears below image on mobile */}
                        <div className="order-2 md:order-1 flex-1 text-center md:text-left">
                            <p
                                className="leading-relaxed max-w-lg mx-auto md:mx-0"
                                style={{ color: "var(--muted)" }}
                            >
                                I build scalable web applications with modern frontend frameworks,
                                clean backend architecture, and a strong focus on performance
                                and maintainability.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <a
                                    href="/Bibhuti_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded bg-white text-black font-semibold text-center"
                                >
                                    Resume
                                </a>

                                <button
                                    onClick={() => setShowModal(true)}
                                    className="px-6 py-3 rounded border border-white/20 hover:border-white/40 transition"
                                >
                                    Hire Me
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* MODAL */}
            <HireMeModal
                open={showModal}
                onClose={() => setShowModal(false)}
            />


            {/* TECH STACK */}
            <Skills />

            {/* PROJECTS */}
            <ProjectsGrid />


            {/* CONTACT */}
            <SayHello />


        </main>
    );
}
