import Link from 'next/link'

import { motion } from 'framer-motion'

// next hooks
import { usePathname } from 'next/navigation'

const links = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/services', name: 'Services' },
  { id: 3, path: '/work', name: 'Work' },
  { id: 4, path: '/blog', name: 'Latest News' },
  { id: 5, path: '/about', name: 'About' },
  { id: 6, path: '/contact', name: 'Contact' },
]

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname()
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
export default Nav
