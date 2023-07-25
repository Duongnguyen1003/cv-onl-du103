import { Player } from '@lottiefiles/react-lottie-player';
import React, { Fragment, useEffect, useState } from 'react';
import heart from '../../assets/icons_json/heart.json';
import img_footer from '../../assets/svg_file/img_footer.svg';
import { Link } from 'react-router-dom';



const Footer = () => {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };
    return (
        <Fragment>
            <footer className="bg-[#F0F9FF] md:py-5 pt-5 pb-24 mt-5 relative font-Nunito text-dark_primary">
                <img className='absolute -top-14 left-0 rotate-180' src={img_footer} alt=""/>
                <article className="font-medium space-x-2 flex items-center justify-center">
                    <span>Make with</span>
                    <Player
                        autoplay
                        speed={1.5}
                        loop
                        background='transparent'
                        src={heart}
                        style={{ height: "20px", width: "20px" }}
                    ></Player>
                    <span>by me</span>
                </article>
                {showButton && (<button onClick={scrollToTop} title="Go to top" className="fixed bottom-24 md:bottom-[75px] right-7 text-center z-50 bg-[#00FF7F] shadow-lg cursor-pointer hover:bg-opacity-70 hover:shadow-[inset_5px_5px_20px_#cacaca, inset_-5px_-5px_20px_#f6f6f6;] rounded-tr-lg rounded-bl-lg p-3">
                    <Link to="#">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="#042154" viewBox="0 0 384 512">
                            <path
                                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                        </svg>
                    </Link>
                </button>)}
            </footer>
        </Fragment>

    )
}

export default Footer;
