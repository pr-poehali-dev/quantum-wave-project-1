import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{background: 'radial-gradient(ellipse at 30% 20%, #3d0f20 0%, #0d0005 60%, #000000 100%)'}}>
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.4}
          squareSize={48}
          borderColor="#2a0a15"
          hoverFillColor="#3d0f20"
        />
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}