import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href='/' className='inline-block'>
      <Image
        src='assets/logo-dark.svg'
        priority
        alt='fivexfast'
        width='343'
        height='54'
        className='w-[140px] dark:hidden '
      />
      <Image
        src='assets/logo-light.svg'
        priority
        alt='fivexfast'
        width='381'
        height='60'
        className='w-[140px] hidden dark:block'
      />
    </Link>
  )
}
export default Logo
