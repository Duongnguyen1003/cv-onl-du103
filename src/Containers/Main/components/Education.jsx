import React, { Fragment } from 'react';
import line_svg from '../../../assets/svg_file/line_under.svg';
import bg_education from '../../../assets/svg_file/bg-education.svg';
import learn_school_svg from '../../../assets/svg_file/learn_school.svg';
import image_education from '../../../assets/svg_file/experience.svg';
import img_education from '../../../assets/svg_file/img_education.svg';
import data from '../../../data.json';


const Education = () => {
    const educations = data.educations;

    return (
        <Fragment>
            <section className='relative text-dark_primary' id="education">
                <img className='absolute bottom-0 left-0' src={img_education} alt=""/>
                <article style={{'--image-url-bg': `url(${bg_education})`}} className="bg-[image:var(--image-url-bg)] pt-10 bg-cover bg-no-repeat lg:py-10">
                    <div className="container mx-auto flex justify-center flex-wrap gap-x-20 items-center max-w-7xl space-y-10 md:space-y-20">
                        <div className="space-y-10 mt-10 w-9/12 mx-auto md:w-[60%] lg:w-[45%]">
                            <h2 style={{'--bg-url-item': `url(${line_svg})`}}
                                className="relative ml-32 text-left font-Brygada text-4xl md:text-5xl font-semibold capitalize after:absolute after:-bottom-[30px] after:left-5 after:z-10 after:h-7 after:w-[125px] after:bg-[image:var(--bg-url-item)] after:bg-no-repeat after:content-['']">
                                Học vấn
                            </h2>
                            <div className="z-30 font-Nunito">
                                <div className="relative">
                                    <div
                                        className="absolute -left-12 -top-14 md:-left-24 md:-top-24 md:h-[180px] h-28 md:w-[180px] w-28 rounded-full bg-gradient-to-l from-[#E6EFFF] to-[#E6EFFF]">
                                    </div>
                                    <div
                                        className="absolute -right-12 -bottom-[370px] md:-right-20 md:-bottom-[310px] md:h-[180px] h-28 md:w-[180px] w-28 rounded-full bg-gradient-to-r from-[#F2B138] to-[#F2B138]">
                                    </div>
                                </div>
                                <div className="space-y-10 rounded-lg bg-[#ffffff21] p-5 shadow-md backdrop-blur mx-auto md:mx-0">
                                    <div >
                                    {educations.map((education,index) =>{
                                        return (
                                        <div key={index} className="py-2 tracking-wide">
                                            <h3 className="flex items-center justify-start space-x-2">
                                                <img className="h-6 w-6" src={learn_school_svg} alt="icon_learn_school"/>
                                                <span className="text-base placeholder-gray-400 font-medium">{education.name}</span>
                                            </h3>
                                            <div className="space-x-2 pl-8 md:pl-14">
                                                <span className="font-medium block md:inline-block">Thời gian:</span>
                                                <span className="block md:inline-block">{education.date}</span>
                                            </div>
                                            <div className="space-x-2 pl-8 md:pl-14">
                                                <span className="font-medium block md:inline-block">GPA:</span>
                                                <span className="block md:inline-block">{education.gpa}</span>
                                            </div>
                                        </div>
                                        )
                                    })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className="mx-auto mt-10 md:mt-0 w-full h-full" src={image_education} alt="about" />
                        </div>
                    </div>
                </article>
            </section>  
        </Fragment>
    )
}

export default Education;
