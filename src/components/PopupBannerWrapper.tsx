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
      onClose={handleClose}
    />
  )
}