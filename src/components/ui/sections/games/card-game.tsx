import classNames from 'classnames'
import Image from 'next/image'

export default function CardGame({
  name,
  desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image,
  index
}: {
  name: string
  desc?: string
  image: string
  index: number
}) {
  return (
    <div
      className={classNames(
        'relative h-full min-h-[16.75rem] w-full max-w-[25.625rem] cursor-pointer overflow-hidden rounded-lg shadow-2xl transition-transform duration-200 hover:scale-[105%]',
        { 'card-transform': index % 2 === 1 }
      )}
    >
      <Image
        src={image}
        width={410}
        height={560}
        alt='Card Image'
        className='h-full w-full object-cover'
        title='Card Image'
      />
      <div className='bg-opacity-50 absolute inset-0 flex items-end justify-center pr-[1.125rem] pb-[0.625rem] pl-2 break-words md:px-8 md:pb-10'>
        <div className='flex flex-col gap-1 md:gap-4'>
          <h3 className='text-[1.5rem] leading-[1.875rem] font-bold tracking-[-0.0625rem] md:text-[3rem] lg:leading-[3.75rem]'>
            {name}
          </h3>
          <p className='text-[0.75rem] leading-[0.9375rem] tracking-[0.0625rem] md:text-[0.875rem] lg:leading-[1.225rem]'>
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}
