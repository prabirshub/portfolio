import Image from 'next/image'

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        fill
        priority
        alt='Hero banner'
        className='object-contain -rotate-6 mt-3'
      />
    </div>
  )
}
export default DevImg
