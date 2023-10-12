import React from 'react'

export default function Content() {
    return (
        <div className='bg-primary w-screen h-screen flex justify-center items-center'>
            <div className='w-3/4 h-3/4 flex flex-col gap-10 justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <div className='w-2/3 flex flex-col gap-4 justify-center items-start'>
                        <h1 className='text-secondary text-6xl font-[Poppins]'>Front-End React Developer</h1>
                        <h2 className='text-white text-3xl font-[Poppins]'>Hello, my name is <span className='text-secondary'>Gabriela Manolache</span>. <br /> I'm a passionate Front-End React Developer based in Iași, Romania. </h2>
                    </div>
                    <div className='w-96 h-96 border-2 border-secondary rounded-full flex justify-center items-center'>
                        img
                    </div>
                </div>
                <div className='w-full bg-red-900 items-center flex h-1/4 rounded-full'>Tech stack</div>
            </div>
        </div>
    )
}
