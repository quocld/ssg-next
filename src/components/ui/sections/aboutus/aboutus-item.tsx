import { Icon } from 'iconsax-react'

export interface IAboutUsItem {
  title: string
  desc: string
  icon: Icon
}

export function AboutUsItem(item: IAboutUsItem) {
  return (
    <div className='flex flex-row gap-2.5 lg:gap-10'>
      <div className='flex flex-row gap-1.5 lg:gap-6'>
        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#E3FCFF] transition-colors duration-200 hover:bg-blue-300 lg:h-[3.125rem] lg:w-[3.125rem]'>
          <item.icon
            className='scale-75 lg:scale-100'
            color='black'
            variant='Bold'
            size={24}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <h4 className='font-sans text-[1.5rem] leading-[1.875rem] font-bold'>
            {item.title}
          </h4>
          <p className='text-[0.875rem] leading-[140%] text-[#757575]'>
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  )
}
