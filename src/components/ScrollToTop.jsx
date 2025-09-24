import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    // Disable scroll restoration completely
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    
    // Force immediate position reset before any rendering
    const html = document.documentElement
    const body = document.body
    
    // Set position immediately without any transition
    html.style.scrollBehavior = 'auto'
    body.style.scrollBehavior = 'auto'
    
    // Direct property assignment for instant positioning
    html.scrollTop = 0
    body.scrollTop = 0
    window.scrollY = 0
    
    // Force a layout recalculation
    html.offsetHeight
  }, [pathname])

  return null
}

export default ScrollToTop