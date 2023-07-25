import React, { Fragment } from 'react';
import arrow_down from '../../assets/svg_file/arrow_down.svg';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education';
import Information from './components/Information';

const Main = () => {
    return (
        <Fragment>
            <main className="mt-10 md:mt-20 lg:mt-0 overflow-hidden">
                <div className="container mx-auto">
                    <img className="mx-auto animate-bounce" src={arrow_down} alt="arrow_down" />
                </div>
                <Information />
                <Education />
                <Skills />
                <Experience />
            </main>
        </Fragment>
    )
}

export default Main;
