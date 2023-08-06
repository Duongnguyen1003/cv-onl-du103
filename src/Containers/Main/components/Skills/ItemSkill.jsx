import React, { Fragment } from 'react';
import data from '../../../../data.json';

const ItemSkill = () => {
    const skills = data.skills;
    
    return (
        <Fragment>
            {skills.map((skill,index) =>{
                return (
                    <div key={index} data-aos="fade-up" data-aos-delay={index * 200}
                     className="framework-card before:right-auto w-[180px] md:w-[220px] h-[140px] md:h-[180px] group">
                            <div className="space-y-2 -mt-5 md:mt-0">
                                <img className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-center object-contain mx-auto group-hover:scale-125 duration-500" 
                                src={skill.imageURL} alt={`logo-skill-${skill.name}`}/>
                                <p className="text-base md:text-lg font-medium capitalize">{skill.name}</p>
                                <span className='w-24 bg-[#F2B138] h-1 mx-auto block rounded-full'></span>
                            </div>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default ItemSkill;
