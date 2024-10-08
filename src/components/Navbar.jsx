import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import MenuModal from './MenuModal';
import { Link } from 'react-scroll';

export default function Navbar() {
	const [open, setOpen] = useState(false);

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
		<div className='fixed top-0 w-full z-30'>
			<div className='w-full bg-[#182639] flex flex-col items-center justify-center'>
				<div className='w-full h-[90px] md:w-[90%] flex items-center justify-center lg:border-b-0 border-b-[1px]  border-secondary'>
					<div className='flex flex-col items-center justify-between w-full py-6'>
						<div className='flex justify-between px-4 items-center w-full'>
							<a href='/'>
								<img
									className='w-2/3 lg:w-3/4 h-12'
									src='./assets/logo.svg'
									alt='personal logo'
								/>
							</a>
							<ul className='lg:flex items-center gap-8 text-xl font-poppins text-white hidden'>
								{links.map((link) => (
									<Link
										className='hover:text-secondary cursor-pointer'
										to={`${link.path}`}
										spy={true}
										key={link.name}
										smooth={true}
										offset={-100}
										duration={500}>
										{link.name}
									</Link>
								))}
							</ul>
							<span className='text-secondary text-2xl lg:hidden'>
								{!open && (
									<FontAwesomeIcon
										onClick={() => {
											setOpen(!open);
										}}
										icon={faBars}
									/>
								)}
								{open && (
									<FontAwesomeIcon
										onClick={() => {
											setOpen(!open);
										}}
										icon={faCircleXmark}
									/>
								)}
							</span>
						</div>
					</div>
				</div>
			</div>
			{open &&
				<MenuModal setOpen={setOpen} open={open} />
			}
		</div>
	);
}
