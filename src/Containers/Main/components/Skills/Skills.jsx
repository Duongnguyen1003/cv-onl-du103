import React, { Fragment } from 'react';
import bg_skills from '../../../../assets/images/bg-skills.png';
import line_svg from '../../../../assets/svg_file/line_under.svg';
import ItemSkill from './ItemSkill';

const Skills = () => {
    return (
        <Fragment>
            <section id="skills" style={{'--image-url': `url(${bg_skills})`}} className="bg-[image:var(--image-url)] min-h-min bg-fixed bg-repeat py-10 lg:my-5">
              
                <article className="container mx-auto max-w-7xl px-5 md:px-0 text-dark_primary">
                    <h2 style={{'--bg-url-item': `url(${line_svg})`}}
                        className="relative text-center font-Brygada text-4xl md:text-5xl font-semibold capitalize after:absolute after:-bottom-[30px] after:left-[50%] after:-right-[30px] after:-ml-[60px] after:h-7 after:w-[125px] after:bg-[image:var(--bg-url-item)] after:bg-no-repeat after:content-['']">
                        Kỹ năng
                    </h2>
                    <div className="cards pt-20 flex flex-wrap justify-center gap-5 md:gap-10 perspective-10 md:px-10 xl:px-0">
                       <ItemSkill />
                    </div>
                </article>
            </section>
        </Fragment>
    )
}

export default Skills;
