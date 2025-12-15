import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function FeaturedProjectsSwiper() {
    return (
        <Swiper spaceBetween={20} slidesPerView={1}>
            {[1, 2, 3].map((_, i) => (
                <SwiperSlide key={i}>
                    <div className="p-6 bg-black border border-white/10 rounded-lg">
                        <h3 className="text-xl font-semibold">
                            {/* TODO: project title */}
                            Project Title
                        </h3>
                        <p className="mt-2 text-gray-400">
                            {/* TODO: project description */}
                            Short description of the project and tech used.
                        </p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
