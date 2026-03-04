import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProjectButtons from './ProjectButtons';

interface Languages {
    name: string;
    icon: React.ReactNode;
    color: string;
}

interface FrontAndBack {
    frontend: string;
    backend: string;
}

interface ArrayProjects {
    title: string;
    img: string;
    languages: Languages[];
    description: string;
    demo: FrontAndBack;
    code: FrontAndBack;
}

interface PropsCarouselProjects {
    featuredProjects: ArrayProjects[];
}

const CarouselProjects: React.FC<PropsCarouselProjects> = ({ featuredProjects }) => {
    return (
        <div className="w-full flex justify-center h-[85%]">
            <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                /* Ajustamos el ancho del Swiper: este manda sobre el tamaño de la card */
                className="w-[90%] max-w-[500px] h-fit min-h-[470px] pb-4"
            >
                {featuredProjects.map((project, index) => {
                    return (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <div
                                className="flex flex-col items-start justify-start w-full min-h-[420px] h-auto border border-solid rounded-2xl shadow-lg border-[#e5e5e5] hover:shadow-md bg-white overflow-hidden"
                            >
                                <img src={project.img} alt={project.title} className="w-full object-cover max-[450px]:h-[130px] h-[200px] rounded-t-[18px]" />

                                <div className='flex flex-col flex-1 w-full items-start p-[20px] gap-[15px] overflow-visible'>
                                    <h3 className='text-[20px] text-[#000] max-[450px]:text-[16px] font-bold shrink-0'>{project.title}</h3>

                                    <div className='flex-1 w-full overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar max-h-[120px]'>
                                        <h4 className='font-medium text-[14px] max-[450px]:text-[12px] mb-4 text-gray-700'>{project.description}</h4>

                                        <div className='flex flex-wrap w-full items-center justify-center gap-y-[15px] gap-x-[25px] pb-4'>
                                            {project.languages.map((lang, langIdx) => (
                                                <div key={langIdx} className="flex flex-col items-center">
                                                    <span style={{ color: lang.color }} className="text-2xl">
                                                        {lang.icon}
                                                    </span>
                                                    <p className="text-[12px] mt-1">{lang.name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="w-full pt-4 border-t border-gray-100 shrink-0">
                                        <ProjectButtons demo={project.demo} code={project.code} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
}

export default CarouselProjects;