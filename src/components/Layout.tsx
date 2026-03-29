import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}
