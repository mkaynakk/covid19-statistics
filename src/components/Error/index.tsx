import { ROUTES } from '@/routes/constants'
import { ErrorProps } from '@/components/Error/types'

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold text-red-600'>Error!</h1>
        <p className='text-xl text-red-500 mt-4'>{message}</p>
        <a
          href={ROUTES.HOME}
          className='mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600'
        >
          Go Home
        </a>
      </div>
    </div>
  )
}

export default Error
