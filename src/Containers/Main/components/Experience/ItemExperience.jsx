import React, { Fragment } from 'react';
import data from '../../../../data.json';
import Atropos from 'atropos/react';

const ItemExperience = () => {
    const experiences = data.experiences;
    
    return (
        <Fragment>
            {experiences.map((experience, index) =>{
                return (
                    <div className='group'>
                        <Atropos key={index}>
                            <div data-aos="fade-up"
                                data-aos-delay={index * 200}
                                className="p-5 shadow-lg bg-[#042154] bg-opacity-70 rounded-2xl sm:w-[360px] w-full group-hover:blur-sm hover:!blur-none" data-tilt>
                                <div className="w-full h-[230px]">
                                    <img src={experience.imageURL} alt="project_image"
                                        className="w-full h-full object-cover block rounded-2xl"/>
                                </div>
                                <div className="text-left space-y-2 mt-2 font-Nunito">
                                    <h3 className="text-2xl font-medium text-white capitalize">{experience.website}</h3>
                                    <p className="normal-case text-sm md:text-base text-[#b7c5d3]">{experience.content}</p>
                                    <ol className="space-x-2 text-sm">
                                        <li className="text-[#FF5733] inline-block">{experience.project.api}</li>
                                        <li className="text-[#00BAAD] inline-block">{experience.project.framework}</li>
                                        <li className="text-[#FFC300] inline-block">{experience.project.database}</li>
                                        <li className="text-[#FFA4E5] inline-block">{experience.project.css}</li>
                                    </ol>
                                </div>
                            </div>
                        </Atropos>
                    </div>
                    
                    )
                })}
        </Fragment>
    )
}

export default ItemExperience;
