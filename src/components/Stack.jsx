import React from 'react';

export default function Stack() {
	return (
		<div className='w-auto lg:w-[850px] py-8 bg-white bg-opacity-10 items-center flex justify-between flex-col lg:flex-row rounded-[2rem] px-4 lg:px-10'>
			<span className='text-white text-xl text-center leading-[58px] w-full md:w-1/2 lg:w-2/12 lg:leading-normal lg:border-b-0 lg:px-0 font-poppins border-b-2 px-4 lg:border-r-2 lg:pr-4'>
				Tech Stack
			</span>
			<div className='flex mt-4 gap-4 w-full flex-wrap items-center justify-center lg:mt-0 lg:w-[80%]'>
				<div className='flex gap-2 hover:animate-bounce'>
					<img
						className='w-[60px]'
						src='./assets/html.svg'
						alt='html logo'
					/>
					<img
						className='w-[60px]'
						src='./assets/css.svg'
						alt='css logo'
					/>
				</div>
				<div className='flex gap-2 hover:animate-bounce'>
					<img
						className='w-[60px]'
						src='./assets/js.svg'
						alt='javascript logo'
					/>
					<img
						className='w-[60px]'
						src='./assets/ts.svg'
						alt='typescript logo'
					/>
				</div>
				<div className='flex gap-2 hover:animate-bounce'>
					<img
						className='w-[60px]'
						src='./assets/react.svg'
						alt='react logo'
					/>
					<div className='w-[60px] rounded-2xl bg-white flex pt-1 items-center justify-center '>
						<img
							className='w-[50px]'
							src='./assets/vue.svg'
							alt='vue logo'
						/>
					</div>
				</div>
				<div className='flex gap-2 hover:animate-bounce'>
					<img
						className='w-[60px]'
						src='./assets/sass.svg'
						alt='sass logo'
					/>
					<img
						className='w-[60px]'
						src='./assets/tailwind.svg'
						alt='tailwind logo'
					/>
				</div>
				<div className='flex h-[61.69px] gap-2 hover:animate-bounce'>
					<div className='w-[60px] rounded-2xl bg-gray-700 flex items-center justify-center '>
						<img
							className='w-[50px]'
							src='./assets/nodejs.svg'
							alt='node logo'
						/>
					</div>
					<div className='w-[60px] rounded-2xl bg-white flex items-center justify-center '>
						<img
							className='w-[50px]'
							src='./assets/mongodb.svg'
							alt='mongo logo'
						/>
					</div>
				</div>
				<div className='flex h-[61.69px] gap-2 hover:animate-bounce'>
					<div className='w-[60px] rounded-2xl bg-gray-600 flex items-center justify-center '>
						<img
							className='w-[55px]'
							src='./assets/express.svg'
							alt='express logo'
						/>
					</div>
					<div className='w-[60px] rounded-2xl bg-[#99425B] flex items-center justify-center '>
						<img
							className='w-[50px]'
							src='./assets/jest.svg'
							alt='mongo logo'
						/>
					</div>
				</div>
				<div className='flex h-[61.69px] gap-2 hover:animate-bounce'>
					<div className='w-[60px] rounded-2xl bg-[#4e5b92] flex items-center justify-center overflow-hidden'>
						<img
							className='w-[80px]'
							src='./assets/php.png'
							alt='php logo'
						/>
					</div>
					<div className='w-[60px] rounded-2xl bg-white flex items-center justify-center '>
						<img
							className='w-[50px]'
							src='./assets/laravel.png'
							alt='laravel logo'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
