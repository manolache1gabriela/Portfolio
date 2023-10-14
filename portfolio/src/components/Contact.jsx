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
            linkData: 'Iași, România',
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
    ]

    return (
        <div className='flex flex-col w-full items-center gap-8'>
            <div className='w-[90%] flex flex-col gap-8'>
                <h3 className='w-full font-[Poppins] text-center lg:text-left text-2xl lg:text-3xl font-bold text-tertiary'>Contact</h3>
                <h4 className='w-full lg:text-xl text-white lg:text-left text-center mb-4'>Let's connect and create something amazing together!</h4>
            </div>
            <div className='flex flex-col gap-4 text-3xl'>
                {
                    contacts.map(contact => (
                        <span className='flex items-center gap-4 font-[Poppins]'>
                            <FontAwesomeIcon className='text-white text-5xl' icon={contact.icon} />
                            <div className='flex flex-col gap-2'>
                                <p className='text-tertiary font-semibold'>{contact.name}</p>
                                <a className='text-white hover:text-secondary' target='blank' href={`${contact.link}`}>{contact.linkData}</a>
                            </div>
                        </span>
                    ))
                }


            </div>
        </div>
    )
}
