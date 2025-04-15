'use client'
import { useCounterNumber } from '@/hooks'

export interface IParameterItem {
  title: string
  number: number
  numerical_abbreviations?: string
}

export function ParameterItem(item: IParameterItem) {
  const { count, counterRef } = useCounterNumber({
    target: item.number
  })
  return (
    <div>
      <h3
        ref={counterRef}
        className='flex items-end text-[2.75rem] leading-none font-bold tracking-[-0.0625rem] text-[#079BEE] lg:text-[5rem]'
      >
        {count}
        {item.numerical_abbreviations && (
          <span className='text-[1.25rem] leading-none font-bold tracking-[-0.0625rem] lg:text-[2.5rem]'>
            {item.numerical_abbreviations}
          </span>
        )}
        +
      </h3>
      <p className='text-[1.5rem] leading-[1.875rem] font-bold'>{item.title}</p>
    </div>
  )
}
