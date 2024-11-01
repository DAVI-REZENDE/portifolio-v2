import { Hero } from '@/components/hero'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { HomeIcon } from 'lucide-react'

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {
              name: 'Home',
              link: '#home',
              icon: <HomeIcon />,
            },
          ]}
        />
        <Hero />
      </div>
    </main>
  )
}
