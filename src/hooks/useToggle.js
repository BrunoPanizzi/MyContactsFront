import { useState } from 'react'

export default function useToggle(v1, v2) {
  const [value, setValue] = useState(v1)

  function toggle() {
    setValue(prevValue => prevValue === v1 ? v2 : v1)
  }

  return [value, toggle]
}