// app/page.tsx
import Image from 'next/image'
import heroImg from '../../public/flicker.png'

export default function HomePage() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden rounded-lg">
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="hero-container space-y-4">
          <div className='focus-wrapper'>
            <div className='focus-ring'><div className="red-dot"></div>
            </div>
              <div className='focus-text'>
                <h2 className="hero text-4xl md:text-5xl font-extrabold">Birds</h2>
                <p className="sub-hero stext-lg md:text-xl">By Drew</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
