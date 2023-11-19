import Link from 'next/link'
import { Button } from '../ui/button'
import { SmilePlus, Send } from 'lucide-react'

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri'

//components
import DevImg from '../DevImg'
import Badge from '../Badge'
import Socials from '../Socials'

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8 '>
          {/* text */}
          <div className='flex max-w-2xl flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[2px]'>
              Innovate with Fivexfast
            </div>
            <h1 className='h1 mb-4'>
              Unleash Your Digital Potential for Proven Results
            </h1>
            <p className='subtitle max-w-[600px] mx-auto xl:mx-0'>
              Welcome to Fivexfast, where strategic innovation meets proven
              results. In a digital world in constant flux, we&apos;re not just
              following trends; we&apos;re setting new standards. Explore how
              our data-driven strategies can unlock the full potential of your
              brand in the digital realm.
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row md:gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact us <Send size={18} />
                </Button>
              </Link>
              <Link href='/contact'>
                <Button variant='secondary' className='gap-x-2'>
                  Testimonial <SmilePlus size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          {/* image */}
          <div className='hidden xl:flex relative'>
            {/* badge 1 */}
            <Badge
              containerStles='absolute top-[10%] left-[12rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText={'Years Of Services'}
            />
            {/* badge 2 */}
            <Badge
              containerStles='absolute top-[57%] -right-8'
              icon={<RiTodoFill />}
              endCountNum={9}
              endCountText='k'
              badgeText={'Finished Projects'}
            />
            {/* badge 3 */}
            <Badge
              containerStles='absolute top-[77%] -left-[1rem]'
              icon={<RiTeamFill />}
              endCountNum={6}
              endCountText='k'
              badgeText={'Happy Clients'}
            />
            <div className='w-[500px] h-[500px] absolute -top-1 -right-2'></div>
            <DevImg
              containerStyles='w-[500px] h-[300px] bg-bottom'
              imgSrc='/assets/hero.png'
            />
          </div>
        </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  )
}
export default Hero
