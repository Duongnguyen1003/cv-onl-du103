import React, { Fragment, useEffect, useState } from 'react'
import { Link } from "react-scroll";
import data from '../../../data.json'

const IdNavbarMobile = () => {
    const [showNavbar, setNavbar] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        });
    }, []);

    const nav_mobiles = data.nav_mobile;

    return (
        <Fragment>
        {showNavbar && (
            <article className="fixed bottom-0 right-0 left-0 bg-dark_primary z-50 md:hidden py-2 backdrop-blur-md duration-300">
                <nav className="flex flex-row space-x-5 p-2 justify-around max-[400px]:justify-center font-Nunito">
                    {nav_mobiles && nav_mobiles.map((nav_mobile, index) =>{
                        return (
                            <li className="cursor-pointer list-none" key={index} >
                                        <Link to={nav_mobile.toLink} className="flex items-center justify-center"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={200}
                                >
                                    <div>
                                    <img src={nav_mobile.icon}
                                    className="mx-auto w-6 h-6 max-[280px]:w-4 max-[280px]:h-4"
                                        alt=""/>
                                        <span
                                            className="capitalize text-base text-white font-medium font-Nunito max-[400px]:text-sm max-[330px]:text-xs max-[280px]:text-[10px]">{nav_mobile.name}</span>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </nav>
            </article>
        )}
        </Fragment>
    )
}

export default IdNavbarMobile;
