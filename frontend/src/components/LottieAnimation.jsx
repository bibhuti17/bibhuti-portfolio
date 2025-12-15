import Lottie from "lottie-react";

export default function LottieAnimation({ animationData }) {
    return (
        <Lottie
            animationData={animationData}
            loop
            className="w-64 mx-auto"
        />
    );
}
