import { useState, useRef, useEffect } from 'react'

export default function useAnimatedExit(shouldAppear) {
  const [shouldRender, setShouldRender] = useState(shouldAppear)
  const elementRef = useRef(null)

  useEffect(() => {
    if (shouldAppear) {
      setShouldRender(true)
    }

    if (!shouldAppear) {
      elementRef.current?.addEventListener('animationend', () => {
        setShouldRender(false)
      })
    }
  }, [shouldAppear])

  return [elementRef, { shouldRender }]
}
