'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const PopupBanner = dynamic(() => import('./PopupBanner'))

export default function PopupBannerWrapper() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleClose = () => {
    // Popup banner closed
  };

  if (!isClient) return null

  return (
    <PopupBanner
      message="오피스아트에 오신 것을 환영합니다!"
      onClose={handleClose}
    />
  )
}