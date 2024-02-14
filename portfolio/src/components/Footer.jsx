import React from 'react';
import { Link } from 'react-scroll';

export default function Footer() {
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
    <div className='bg-white bg-opacity-10 py-4 px-8 lg:py-8 lg:px-16'>
      <div className='flex flex-col justify-center md:justify-between items-center md:flex-row gap-4'>
        <a className='flex justify-center md:justify-start' href='/'>
          <img
            className='w-2/3 lg:w-3/4 h-12'
            src='./assets/logo.svg'
            alt='personal logo'
          />
        </a>
        <ul className='flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8 text-lg font-poppins text-white'>
          {links.map((link) => (
            <Link
              className='hover:text-secondary cursor-pointer'
              to={`${link.path}`}
              key={link.name}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
      <p className='text-secondary text-[14px] mt-8 font-poppins text-center md:text-right'>
        Inspiration: <br />
        <a
          className=' hover:text-tertiary italic'
          target='blank'
          href='https://www.stefantopalovic.com'>
          Stefan Topalovic
        </a>{' '}
        <br />
        <a
          className=' hover:text-tertiary italic'
          target='blank'
          href='https://www.claudiupopa.ro'>
          Claudiu Popa
        </a>
      </p>
      <p className='text-slate-400 mt-4 text-[10px] font-poppins text-center'>
        Copyright © 2023. All rights are reserved
      </p>
    </div>
  );
}
