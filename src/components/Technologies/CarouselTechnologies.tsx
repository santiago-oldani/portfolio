import type { IconType } from 'react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

interface CarouselProps {
    cardsInfo: TechCategory[];
    setIndexTechItem: React.Dispatch<React.SetStateAction<{ category: number; item: number; }>>;
}

interface TechItem {
    name: string;
    img: string;
    description: string;
}

interface TechCategory {
    title: string;
    icon: IconType;
    color: string;
    items: TechItem[];
}

const CarouselTechnologies: React.FC<CarouselProps> = ({ cardsInfo, setIndexTechItem }) => {
    return (
        <div className="w-full flex justify-center gap-[12px] h-[100%]"> {/* Contenedor para centrar el Swiper */}
            <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                className="w-full h-fit sm:w-[350px] pb-22"
            >
                {cardsInfo.map((category, key) => {
                    const Icon = category.icon;
                    return (
                        <SwiperSlide key={key} className="flex justify-center items-center">
                            {/* Eliminamos el w-[300px] de aquí y dejamos w-full para que use el ancho del Swiper */}
                            <div className='flex flex-col items-center justify-start border border-solid border-[#e5e5e5] shadow-md rounded-[40px] py-[30px] px-[15px] gap-[50px] w-full bg-white mb-6 min-h-[340px] h-auto'>

                                <div className='flex flex-col items-center justify-center'>
                                    <Icon size={25} color={category.color} />
                                    <h3 className='font-semibold m-[0px] text-[18px]'>{category.title}</h3>
                                </div>

                                <div className="flex flex-row items-center gap-[20px] flex-wrap w-full justify-center">
                                    {category.items.map((item, index) => (
                                        <div key={index} className="flex flex-col items-center gap-[10px] justify-center">
                                            <div
                                                onMouseEnter={() => setIndexTechItem({ category: key, item: index })}
                                                className="border border-solid border-[#e5e5e5] transition-all duration-300 ease-in-out hover:border-[#00aeffff] hover:shadow-2xl rounded-[12px] p-[10px] cursor-pointer"
                                            >
                                                <img src={item.img} alt={item.name} className='w-[30px] h-[30px]' />
                                            </div>
                                            <h5 className='text-[10px]'>{item.name}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
}

export default CarouselTechnologies;