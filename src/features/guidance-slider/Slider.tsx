// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/navigation'
// @ts-ignore
import 'swiper/css/pagination'

import '@/features/guidance-slider/styles.css'

import slides from '@/features/guidance-slider/slides'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Slider: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-black"
                >
                    ✕
                </button>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    style={{}}
                    spaceBetween={40}
                    className="mt-8"
                >
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="mb-6 h-48 w-full rounded-xl object-cover shadow"
                                />
                                <h2 className="mb-3 text-2xl font-bold text-gray-800">
                                    {slide.title}
                                </h2>
                                <p className="mb-4 px-4 text-base text-gray-600">
                                    {slide.description}
                                </p>
                                <div className="custom-swiper-pagination mt-4" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Slider
