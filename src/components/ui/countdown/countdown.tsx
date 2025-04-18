'use client'

import { useTranslations } from 'next-intl'

import { useCountdown } from '@/hooks'
import { formatTime } from '@/utils'

export default function CountdownTimer() {
  const { timeLeft } = useCountdown()
  const t = useTranslations('countdown')

  return (
    <div className='flex w-full items-center lg:min-w-[50rem]'>
      <div className='flex w-full items-center justify-between gap-1 rounded-[21px] bg-white px-6 py-[1.625rem] text-center text-black shadow-lg sm:gap-[3.25rem] sm:px-10 sm:py-[1.625rem]'>
        {Object.entries(timeLeft).map(([key, value], index) => (
          <div key={key} className='flex items-center gap-1 sm:gap-[3.25rem]'>
            <TimeBox value={value} label={t(key)} />
            {index < Object.keys(timeLeft).length - 1 && (
              <span className='text-4xl sm:text-6xl'>:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className='flex flex-col items-center gap-1'>
      <div className='font-playfair w-[4rem] font-mono text-[2.25rem] font-black sm:text-[3.75rem]'>
        {formatTime(value)}
      </div>
      <span className='text-sm font-bold capitalize sm:text-base'>{label}</span>
    </div>
  )
}
