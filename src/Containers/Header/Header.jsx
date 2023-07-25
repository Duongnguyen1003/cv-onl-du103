import React,{ Fragment } from 'react';
// import { Link } from 'react-router-dom';
import IdSidebar from './components/Id-sidebar';
import IdNavbarMobile from './components/Id-navbar-mobile';
import bg_header from '../../assets/svg_file/bg-header.svg';
import HeaderContent from './components/Header-content';

const Header = () => {
    return (
        <Fragment>
            <header  style={{'--bg-url': `url(${bg_header})`}}
                className="bg-cover bg-no-repeat min-h-[571px] bg-right-bottom overflow-hidden bg-[image:var(--bg-url)]">
                <section className="container mx-auto max-w-7xl px-5 md:px-0">
                    <IdSidebar />
                    <IdNavbarMobile />
                    <HeaderContent />
                </section>
            </header>
        </Fragment>
        
    )
}

export default Header;
