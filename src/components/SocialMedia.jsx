import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialMedia = () => {
  const links = [
    {
      id: 1,
      label: 'LinkedIn',
      icon: <FaLinkedin size={30} />,
      href: 'https://www.linkedin.com',
      download: false,
      bgColor: 'bg-blue-600',
    },
    {
      id: 2,
      label: 'GitHub',
      icon: <FaGithub size={30} />,
      href: 'https://www.github.com',
      download: false,
      bgColor: 'bg-gray-800',
    },
    {
      id: 3,
      label: 'Email',
      icon: <HiOutlineMail size={30} />,
      href: 'mailto:someone@example.com',
      download: false,
      bgColor: 'bg-red-500',
    },
    {
      id: 4,
      label: 'Resume',
      icon: <BsFillPersonLinesFill size={30} />,
      href: '/resume.pdf', // Change to the path of your resume
      download: true,
      bgColor: 'bg-green-700',
    },
  ];

  return (
    <div className='fixed top-[35%] left-0 flex flex-col z-10'>
      <ul>
        {links.map(({ id, label, icon, href,download, bgColor }) => (
          <li
            key={id}
        className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${bgColor} hover:bg-opacity-60 duration-500`}
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              target='_blank'
              download={download}
              rel='noreferrer'
            >
              {label} {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
