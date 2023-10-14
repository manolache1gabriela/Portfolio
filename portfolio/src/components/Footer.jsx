import React from 'react'

export default function Footer() {
    return (
        <div className='bg-white bg-opacity-10 py-4 px-8 lg:py-8 lg:px-16'>
            <div className='flex flex-col justify-center md:justify-between items-center md:flex-row gap-4'>
                <a className='flex justify-center md:justify-start' href="/">
                    <img className='w-2/3 lg:w-3/4 h-12' src="./assets/logo.svg" alt="personal logo" />
                </a>
                <ul className='flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8 text-lg font-[Poppins] text-white'>
                    <li><a className='hover:text-secondary' href="/">Home</a></li>
                    <li><a className='hover:text-secondary' href="#about">About</a></li>
                    <li><a className='hover:text-secondary' href="#projects">Projects</a></li>
                    <li><a className='hover:text-secondary' href="#contact">Contact</a></li>
                </ul>
            </div>
            <p className='text-secondary text-[14px] mt-8 font-[Poppins] text-center md:text-right' >Inspiration: <br />
                <a className=' hover:text-tertiary italic' target='blank' href="https://www.stefantopalovic.com">Stefan Topalovic</a> <br />
                <a className=' hover:text-tertiary italic' target='blank' href="https://www.claudiupopa.ro">Claudiu Popa</a>
            </p>
            <p className='text-slate-400 mt-4 text-[10px] font-[Poppins] text-center'>Copyright © 2023. All rights are reserved</p>
        </div>
    )
}
