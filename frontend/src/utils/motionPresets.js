export const fadeUp = {
    initial: { opacity: 0, transform: "translateY(40px)" },
    animate: { opacity: 1, transform: "translateY(0)" },
    transition: { duration: 0.6, easing: "ease-out" }
};

export const hoverScale = {
    whileHover: { transform: "scale(1.05)" },
    transition: { duration: 0.3 }
};
