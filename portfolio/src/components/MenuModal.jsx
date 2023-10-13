import React from 'react'

export default function MenuModal() {
    return (
        <div className='flex flex-col '>
            <div className=' bg-white bg-opacity-5 flex items-center justify-center w-full py-4'>
                <ul className='flex flex-col items-center gap-4 text-2xl font-[Poppins] text-white '>
                    <li><a className='hover:text-secondary' href="/">Home</a></li>
                    <li><a className='hover:text-secondary' href="#about">About</a></li>
                    <li><a className='hover:text-secondary' href="#projects">Projects</a></li>
                    <li><a className='hover:text-secondary' href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
