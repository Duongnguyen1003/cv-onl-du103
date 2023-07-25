/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';
import line_svg from '../../../../assets/svg_file/line_under.svg';
import img_experience from '../../../../assets/svg_file/img_experience.svg';
import ItemExperience from './ItemExperience';

const Experience = () => {
    return (
        <Fragment>
            <section className='relative' id="experience">
                <img className='absolute top-0 -right-30 -z-10' src={img_experience} alt="image experience"/>
                <article className="container mx-auto text-center max-w-7xl px-5 md:px-0 py-5 md:pt-5 lg:pb-10 text-dark_primary">
                    <h2 style={{'--bg-url-item': `url(${line_svg})`}}
                        className="relative text-center font-Brygada text-4xl md:text-5xl font-semibold capitalize after:absolute after:-bottom-9 after:left-[50%] after:-right-[30px] after:-ml-[60px] after:h-7 after:w-[125px] after:bg-[image:var(--bg-url-item)] after:bg-no-repeat after:content-['']">
                        Kinh nghiệm
                    </h2>
                    <div className="mt-16 flex flex-wrap gap-10 justify-center">
                        <ItemExperience />
                    </div>
                </article>
            </section>
        </Fragment>
    )
}

export default Experience;
