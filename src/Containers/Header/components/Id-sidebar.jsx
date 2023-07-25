import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Link } from "react-scroll";
import "./index.css";
import data from '../../../data.json';
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";

const IdSidebar = () => {
    const [navbar, setShowNavBar] = useState(false);
    const [showNav, setShowNav] = useState(false);
    
  const changeBackground = () =>{
    if(window.scrollY >=80 ){
        setShowNavBar(true);
    }else{
        setShowNavBar(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  const listMenus = data.listMenu;

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setShowNav(false);
      }else{
        setShowNav(true);
      }     
    };

    document.addEventListener("mousedown", handler);
    
    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });


    return (
        <Fragment>
            <article className={showNav ? "sidebar active1" : "sidebar "} ref={menuRef}>
                <nav className={navbar ? 'navbar active' : 'navbar'}>
                    <ul className="md:flex md:justify-end md:space-y-0 space-y-10 pt-20 md:pt-0">
                        {listMenus && listMenus.map((listMenu, index) =>{
                            return (
                                <li className="cursor-pointer" key={index} >
                                    <Link onClick={() => setShowNav(false)} className="btn-hover-effect list-link font-bold" 
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
            <div className="flex items-center justify-end z-50 md:hidden">
            {showNav ? (
                <HiOutlineMenuAlt2
                  onClick={() => setShowNav(!showNav)}
                  className="md:hidden block w-14 h-14 p-2 cursor-pointer z-[9999] transition-right"
                />
              ) : (
                <HiOutlineMenuAlt3
                  onClick={() => setShowNav(!showNav)}
                  className="md:hidden block w-14 h-14 p-2 cursor-pointer z-[9999]"
                />
              )}
            </div>
        </Fragment>
    )
}

export default IdSidebar;
