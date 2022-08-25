import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()
  useEffect(() => {
    ; (async () => {
      const response = await fetch('http://localhost:8000/welcome', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
      if (response.status === 504) {
        navigate('/')
      }
    })()
  })

  return <div>Signed in</div>
}

export default Welcome
