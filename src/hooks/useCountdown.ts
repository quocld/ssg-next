'use client'

import { useEffect, useState } from 'react'

interface ICountdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<ICountdown>({
    days: 30,
    hours: 18,
    minutes: 20,
    seconds: 11
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) seconds--
        else {
          seconds = 59
          if (minutes > 0) minutes--
          else {
            minutes = 59
            if (hours > 0) hours--
            else {
              hours = 23
              if (days > 0) days--
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return { timeLeft }
}
