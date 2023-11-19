import DevImg from '../DevImg'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react'

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Fivexfast Digital Marketing Solutions LLP',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+91 900 48 30 626',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'info@fivexfast.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Since 06 Jun, 2022',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Master on Computer Science',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Pune, Maharshtra, India',
  },
]

const About = () => {
  return <div>About</div>
}
export default About
