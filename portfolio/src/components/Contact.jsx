import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {

    const contacts = [
        {
            name: 'Location',
            link: 'https://www.google.com/maps/place/Ia%C8%99i/@47.1560191,27.4221634,11z/data=!3m1!4b1!4m6!3m5!1s0x40cafb7cf639ddbb:0x7ccb80da5426f53c!8m2!3d47.1584549!4d27.6014418!16zL20vMDFmaGcz?entry=ttu',
            linkData: 'Iași, Romania',
            icon: faMapLocationDot,
        },
        {
            name: 'Mail',
            link: 'https://mail.google.com',
            linkData: 'manolachegabriela23@gmail.com',
            icon: faEnvelope,
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/gabriela-manolache-240916215/',
            linkData: 'Gabriela Manolache',
            icon: faLinkedin,
        },
        {
            name: 'Github',
            link: 'https://github.com/manolache1gabriela',
            linkData: 'Manolache Gabriela',
            icon: faGithub,
        },
        {
            name: 'Facebook',
            link: 'https://www.facebook.com/gabriela.manolache.739',
            linkData: 'Gabriela Manolache',
            icon: faFacebook,
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/mano.gabriela/',
            linkData: 'mano.gabriela',
            icon: faInstagram,
        },
    ]

    return (
        <div className='flex flex-col w-full items-center gap-8 py-10 px-[5%]' id='contact'>
            <div className='w-[90%] flex flex-col gap-8'>
                <h3 className='w-full font-[Poppins] text-center lg:text-left text-2xl lg:text-3xl font-bold text-tertiary'>Contact</h3>
                <h4 className='w-full lg:text-xl text-white lg:text-left text-center mb-4'>Let's connect and create something amazing together!</h4>
            </div>
            <div className='flex flex-col md:flex-row flex-wrap items-center gap-4 md:justify-evenly text-3xl'>
                {
                    contacts.map(contact => (
                        <span className='flex items-center justify-center flex-col md:flex-row gap-4 font-[Poppins] mr-2'>
                            <FontAwesomeIcon className='text-white text-5xl' icon={contact.icon} />
                            <div className='flex flex-col text-base md:text-xl gap-2'>
                                <p className='text-tertiary text-center md:text-left font-semibold'>{contact.name}</p>
                                <a className='text-white hover:text-secondary' target='blank' href={`${contact.link}`}>{contact.linkData}</a>
                            </div>
                        </span>
                    ))
                }


            </div>
        </div>
    )
}
