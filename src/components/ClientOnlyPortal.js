import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const ClientOnlyPortal = ({ children }) => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.body

    setMounted(true)
  }, [])

  return mounted ? createPortal(children, ref.current) : null
}

export default ClientOnlyPortal
