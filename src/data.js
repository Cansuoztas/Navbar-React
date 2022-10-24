import React from 'react'
import {  FaLinkedin,FaGithub, FaBehance, FaTwitter,} from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/f-cansu-%C3%B6zta%C5%9F-9545a3243/',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://github.com/Cansuoztas',
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaTwitter/>,
  },
  {
    id: 4,
    url: 'https://www.behance.net/',
    icon: <FaBehance />,
  },
]
