'use client'

// icons
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri'

import Link from 'next/link'

const icons = [
  {
    id: 1,
    path: '/',
    name: <RiYoutubeFill />,
  },
  {
    id: 2,
    path: '/',
    name: <RiLinkedinFill />,
  },
  {
    id: 3,
    path: '/',
    name: <RiTwitterFill />,
  },
  {
    id: 4,
    path: '/',
    name: <RiFacebookFill />,
  },
  {
    id: 5,
    path: '/',
    name: <RiInstagramFill />,
  },
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon) => {
        return (
          <Link key={icon.id} href={icon.path}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}
export default Socials
