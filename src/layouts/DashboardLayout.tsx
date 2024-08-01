import { Link } from 'react-router-dom'
import logo from '@/assets/covid-logo.svg'
import { ROUTES } from '@/routes/constants'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className='w-screen bg-white shadow-md'>
        <nav className='mx-auto grid grid-cols-3 container items-center py-2' aria-label='Global'>
          <div className='flex items-center gap-x-12 justify-self-start'>
            <Link to={ROUTES.HOME} className='md:-m-1.5 p-1.5 shrink-0'>
              <img src={logo} alt='logo' className='h-8 w-auto' />
            </Link>
          </div>
          <div className='justify-self-center'>
            <span className='block uppercase text-base sm:text-2xl font-extrabold'>
              Covid-19 Statistics
            </span>
          </div>
          <div className='flex gap-x-3 sm:gap-x-5 justify-self-end items-center'>
            <span className='mr-3 sm:mr-0 text-sm sm:text-small text-nowrap'>Mehmet Kaynak</span>
          </div>
        </nav>
      </header>
      <div className='flex flex-col sm:flex-row max-w-[1400px] mx-auto'>
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  )
}
