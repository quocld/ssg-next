'use client'
import { useState, useRef, useCallback, useEffect } from 'react'

export const useCounterNumber = ({
  target,
  duration = 1000
}: {
  target: number
  duration?: number
}) => {
  const [count, setCount] = useState(0)
  const [hasCounted, setHasCounted] = useState(false)
  const counterRef = useRef<HTMLDivElement | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startCounting = useCallback(() => {
    let current = 0
    const step = Math.ceil(target / (duration / 50))

    intervalRef.current = setInterval(() => {
      current += step
      if (current >= target) {
        clearInterval(intervalRef.current!)
        setHasCounted(true)
        setCount(target)
      } else {
        setCount(current)
      }
    }, 50)
  }, [target, duration])

  useEffect(() => {
    if (hasCounted || !counterRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(counterRef.current)

    return () => {
      observer.disconnect()
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [hasCounted, startCounting])

  return { count, counterRef }
}
