import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


export default function Projects() {

    const projects = [
        {
            name: 'Audiophile',
            finished: 'September 2023',
            skills: ['React', 'SCSS'],
            description: 'My first programming project: an e-Commerce application, named Audiophile, where audio items can be purchased.',
            linkRepo: 'https://github.com/manolache1gabriela/Audiophile',
            linkProject: 'https://audiophile-19.netlify.app',
        },
        {
            name: 'Paws and Guess',
            finished: 'October 2023',
            skills: ['React', 'Tailwind CSS'],
            description: 'A dog breed guessing game, with the scope of learning how to use an API.',
            linkRepo: 'https://github.com/manolache1gabriela/Dog-Guesser',
            linkProject: 'https://dog-guesser.netlify.app',
        },
        {
            name: 'Gifty',
            finished: 'In progress',
            skills: ['React', 'Tailwind CSS', 'Redux', 'TypeScript'],
            description: 'An app, made in collaboration with a friend, where you can make a wishlist, from which your friends and family can claim a present to give you, or they can create their own wishlist.',
            linkRepo: 'https://github.com/manolache1gabriela/Gifty',
            linkProject: 'when finished',
        },
        {
            name: 'Online Kitchen',
            finished: 'In progress',
            skills: ['React Native', 'Tailwind CSS', 'Redux'],
            description: 'Using Spoonacular API and React Native I intend to make a cooking recipes application.',
            linkRepo: 'https://github.com/manolache1gabriela/Online-Kitchen',
            linkProject: 'when finished',
        },
    ]

    return (
        <div className='flex items-center flex-col gap-8 justify-center py-16' id='projects'>
            <div className='text-white font-poppins flex items-center flex-col gap-8 w-[90%]'>
                <h3 className='w-full font-poppins text-center lg:text-left text-2xl lg:text-3xl font-bold text-tertiary'>Portfolio</h3>
                <p className='font-poppins text-secondary text-center w-full lg:text-left lg:text-4xl text-3xl'>Each task is a canvas of individual innovation &#127912;</p>
            </div>
            <div className='w-[90%] flex flex-col lg:flex-row gap-8 font-poppins flex-wrap'>
                {
                    projects.map(project => (
                        <div className='w-full lg:w-[48%] border-2 border-secondary justify-between px-4 py-8 flex flex-col gap-6'>
                            <div className='flex flex-col justify-between gap-2'>
                                <h4 className='text-tertiary text-3xl'>{project.name} <span className='text-secondary text-lg'>{`(${project.finished})`}</span></h4>
                                <p className='text-white text-lg'>{project.description}</p>
                            </div>
                            <div className='flex gap-4 flex-wrap'>
                                {project.skills.map(skill => (
                                    <div className='border-2 bg-white bg-opacity-20 border-tertiary w-[45%] md:w-[30%] flex items-center justify-center h-10 rounded-xl'>
                                        <span className='text-white hover:text-secondary'>{skill}</span>
                                    </div>
                                ))}
                            </div>
                            <div className='flex gap-8 items-center text-2xl text-white'>
                                <span> Code: <a target='blank' href={project.linkRepo}><FontAwesomeIcon className='text-3xl hover:text-secondary' icon={faGithub} /></a></span>
                                <span> Live Demo: <a target='blank' href={project.linkProject}><FontAwesomeIcon className=' hover:text-secondary' icon={faArrowUpRightFromSquare} /></a></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
