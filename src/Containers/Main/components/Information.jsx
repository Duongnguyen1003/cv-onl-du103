import React, { Fragment } from 'react';
import line_svg from '../../../assets/svg_file/line_under.svg';
import about_svg from '../../../assets/svg_file/about.svg';
import bg_information from '../../../assets/svg_file/bg-information.svg';
import data from '../../../data.json'

const Information = () => {

    const informations = data.informations;

    return (
        <Fragment>
            <section className="relative text-dark_primary" >
                <img className="absolute top-0 right-0" src={bg_information} alt=""/>
                <article className="container mx-auto text-center max-w-7xl px-5 md:px-0 py-5 md:pt-20 lg:py-10 relative">
                    <span id="information" className="-mt-[100px] pb-[100px] block"></span>
                    <h2
                        style={{'--bg-url-item': `url(${line_svg})`}}
                            className="relative text-center font-Brygada text-4xl md:text-5xl font-semibold capitalize after:absolute after:-bottom-9 after:left-[50%] after:-right-[30px] after:-ml-[60px] after:h-7 after:w-[125px] after:bg-no-repeat after:content-[''] after:bg-[image:var(--bg-url-item)]">
                            Thông tin
                    </h2>
                    <p className="mx-auto py-10 px-5 md:px-20 text-justify md:text-center text-base md:font-medium lg:text-lg">
                        Xin chào, tên tôi là Dương (Dương Dương / mập ) và tôi có niềm đam mê
                        phát triển và xây dựng layout website. Tôi bắt đầu vào cuối năm
                        2019 khi tôi học và được thầy cô giao code những website cá nhân đầu
                        tiên của bản thân. Trải nghiệm này đã khơi dậy sự quan tâm của tôi
                        trong lĩnh vực này, và kể từ đó, tôi đã mài giũa kỹ năng, học hỏi thêm
                        nhiều kỹ năng cho bản thân được tốt hơn
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-20 md:gap-y-10 items-center">
                        <div data-aos="fade-right"
                        data-aos-duration="600"
                        data-aos-offset="120">
                            <img className="mx-auto block md:mt-0 w-[90%] md:w-full h-full sm:mx-0"
                                src={about_svg} alt="about" />
                        </div>
                        <div className="mt-10 w-full md:w-[70%] lg:w-[45%] rounded-lg bg-[#042154] pr-5 pb-6 text-center mx-auto" data-aos="fade-left"
                        data-aos-duration="600"
                        data-aos-offset="120">
                            <div
                                className="-mt-5 ml-5 md:-ml-5 space-y-5 rounded-md border border-[#042154] bg-white p-5 shadow-md">
                                { informations && informations.map((information, index) =>{
                                    return(
                                        <div className="relative" key={index}>
                                            <p
                                                className="absolute mb-0 ml-2 mr-0 -mt-3 flex items-center justify-start space-x-2 bg-white py-2 pt-0 pb-0 pl-2 pr-2 font-medium text-gray-600">
                                                <img className="w-6 h-6" src={information.icon} alt={`${information.icon_tittle}`}/>

                                                <span>{information.tittle}</span>
                                            </p>
                                            <span
                                                className="mt-2 block w-full rounded-md border border-gray-300 bg-white p-4 md:text-center text-right pr-10 text-base placeholder-gray-400 focus:border-black focus:outline-none">{information.detail}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </Fragment>
    )
}

export default Information;
