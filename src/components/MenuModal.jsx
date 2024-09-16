import React from 'react'
import { Link } from 'react-scroll';


export default function MenuModal({ setOpen, open }) {

    const links = [
        {
            name: 'Home',
            path: 'home',
        },
        {
            name: 'About',
            path: 'about',
        },
        {
            name: 'Projects',
            path: 'projects',
        },
        {
            name: 'Contact',
            path: 'contact',
        },
    ];

    return (
        <div className='flex flex-col'>
            <div className={open ? 'nav-open bg-[#182639] h-[90vh] flex items-center justify-center w-full py-4' : ' '}>
                <ul className='flex flex-col items-center gap-4 text-2xl font-poppins text-white '>
                    {links.map((link, index) => (
                        <Link
                            onClick={() => { setOpen(false) }}
                            className='hover:text-secondary cursor-pointer'
                            to={`${link.path}`}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            key={index}
                        >{link.name}</Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}
