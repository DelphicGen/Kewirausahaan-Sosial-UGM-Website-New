import React, {useEffect, useRef} from 'react';
import logo from '../../images/header_image/logo2.png';
import './Nav.css';

const Nav = () => {

    const navRef = useRef(null);
    const hamburgerRef = useRef(null);

    const hamburgerToogle = (hamburger, nav) => {
        hamburger.classList.toggle('open');
        nav.classList.toggle('show');
    }

    useEffect(() => {
        let hamburger = hamburgerRef.current;
        let nav = navRef.current;
        hamburger.addEventListener('click', () => hamburgerToogle(hamburger, nav))

        return () => {
            hamburger.removeEventListener('click', () => hamburgerToogle(hamburger, nav));
        }
    }, [])

    return (
        <React.Fragment>
            <nav className="navbar flex justify-between items-center">
                <img src={logo} alt="logo-ks" className="navbar__logo h-auto" />
                <ul className="navbar__links text-base sm:flex hidden relative">
                    <li className="navbar_item font-medium mr-8">
                        <a className="navbar__link" href="/">Home</a>
                    </li>
                    <li className="navbar_item font-medium mr-8">
                        <a className="navbar__link" href="/events">Event</a>
                    </li>
                    <li className="navbar_item font-medium">
                        <a className="navbar__link" href="/articles">Blog</a>
                    </li>
                </ul>

                <div ref={hamburgerRef} className="navbar__hamburger relative block sm:hidden">
                    <div className="navbar__line relative bg-white"></div>
                    <div className="navbar__line relative bg-white"></div>
                    <div className="navbar__line relative bg-white"></div>
                </div>
            </nav>


            <ul ref={navRef} className="navbar__links2 text-base relative w-full sm:hidden block">
                    <li className="navbar_item font-medium mr-8">
                        <a className="navbar__link" href="/">Home</a>
                    </li>
                    <li className="navbar_item font-medium mr-8">
                        <a className="navbar__link" href="/events">Event</a>
                    </li>
                    <li className="navbar_item font-medium">
                        <a className="navbar__link" href="/articles">Blog</a>
                    </li>
            </ul>
        </React.Fragment>
    )
}

export default Nav
