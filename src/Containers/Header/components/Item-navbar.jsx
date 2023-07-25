import React, { useState, Fragment } from 'react';
import { Link } from "react-scroll";
import "./index.css";
import data from '../../../data.json';

const ItemNavbar = () => {
    const [navbar, setShowNavBar] = useState(false);
    
//   const changeBackground = () =>{
//     if(window.scrollY >=80 ){
//         setShowNavBar(true);
//     }else{
//         setShowNavBar(false);
//     }
//     console.log(window.scrollY)
//   }

//   window.addEventListener("scroll", changeBackground);

  const listMenus = data.listMenu;

    return (
        <Fragment>
            <article className="sidebar">
                <nav className={navbar ? 'navbar active' : 'navbar'}>
                    <ul className="md:flex md:justify-end md:space-y-0 space-y-3 pt-20 md:pt-0">
                    {listMenus && listMenus.map((listMenu, index) =>{
                        return (
                            <li className="" key={index}>
                                <Link className="btn-hover-effect list-link font-bold" 
                                        to={listMenu.toLink}
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={200}
                                >
                                    {listMenu.name}
                                    <span className="btn-hover-effect-border"></span>
                                </Link>
                            </li>
                        )
                    })}
                    </ul>
                </nav>
            </article>
        </Fragment>
    )
}

export default ItemNavbar;
