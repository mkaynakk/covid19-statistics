import { createBrowserRouter } from 'react-router-dom'
import WrappedPage from '@/views/WrappedPage'
import CountryDetailPage from '@/views/countries/index'
import Root from '@/views/index'
import { ROUTES } from '@/routes/constants'
import NotFound from '@/components/NotFound'

export default () => {
  return createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <WrappedPage element={<Root />} />,
    },
    {
      path: ROUTES.COUNTRY_DETAIL,
      element: <WrappedPage element={<CountryDetailPage />} />,
    },
    {
      path: '*',
      element: (
        <WrappedPage
          element={
            <NotFound
              title='404'
              message='Page Not Found'
              subMessage='The page you are looking for does not exist.'
            />
          }
        />
      ),
    },
  ])
}
