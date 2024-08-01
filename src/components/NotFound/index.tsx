import { ROUTES } from '@/routes/constants'
import { NotFoundProps } from '@/components/NotFound/types'

const NotFound: React.FC<NotFoundProps> = ({ title, message, subMessage }) => {
  return (
    <div className='flex items-center justify-center h-[75vh]'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold text-gray-700'>{title}</h1>
        <p className='text-xl text-gray-500 mt-4'>{message}</p>
        <p className='text-gray-400 mt-2'>{subMessage}</p>
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

export default NotFound
