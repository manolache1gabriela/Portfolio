import React from 'react'
import { Link } from 'react-scroll';


export default function MenuModal({ setOpen }) {

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
            <div className=' bg-white bg-opacity-5 flex items-center justify-center w-full py-4'>
                <ul className='flex flex-col items-center gap-4 text-2xl font-poppins text-white '>
                    {links.map(link => (
                        <Link
                            onClick={() => { setOpen(false) }}
                            className='hover:text-secondary cursor-pointer'
                            to={`${link.path}`}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >{link.name}</Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}
