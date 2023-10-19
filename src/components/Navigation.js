import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        // <nav className='nav'>
        //     <button className='menu-toggle' onClick={toggleMenu}>Toggle Menu</button>
        //     <ul className='navList'>
        //         <li><Link className='active' to={'/'} ><span className='fa fa-home fa-lg'>Home</span></Link></li>
        //         <li><Link className='active' to={'/news'}><span className='fa fa-newspaper-o'>News</span></Link></li>
        //         <li><Link className='active' to={'/about'}><span className='fa fa-info fa-lg'>About</span></Link></li>
        //         <li><Link className='active' to={'/contact'}><span className='fa fa-address-card fa-lg'>Contact</span></Link></li>
        //     </ul>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Moviehay.com</a>
            <button className="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#my-nav-bar"
                aria-controls="my-nav-bar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="my-nav-bar">
                <ul className='navList'>
                    <li><Link className='active' to={'/'} ><span className='fa fa-home fa-lg'>Home</span></Link></li>
                    <li><Link className='active' to={'/news'}><span className='fa fa-newspaper-o'>News</span></Link></li>
                    <li><Link className='active' to={'/about'}><span className='fa fa-info fa-lg'>About</span></Link></li>
                    <li><Link className='active' to={'/contact'}><span className='fa fa-address-card fa-lg'>Contact</span></Link></li>
                    
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function toggleMenu() {
    const navList = document.querySelector('.navList');
    if (navList.style.display === 'none' || navList.style.display === '') {
        navList.style.display = 'flex';
    } else {
        navList.style.display = 'none';
    }
}





