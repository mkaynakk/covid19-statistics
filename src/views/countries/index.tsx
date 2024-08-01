import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCountryData } from '@/reducers/actions'
import Loading from '@/components/Loading/index'
import Error from '@/components/Error'
import NotFound from '@/components/NotFound'
import { TCountryData, TProvince } from '@/services/types'
import StatisticCard from '@/components/StatisticCard'
import ProvinceCard from '@/components/ProvinceCard'

const EditProductPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const data: TCountryData = useSelector((state: any) => state.country.data)
  const loading = useSelector((state: any) => state.country.loading)
  const error = useSelector((state: any) => state.country.error)

  const [iso, region_name]: any = id?.split('-')

  useEffect(() => {
    if (iso && region_name) {
      dispatch(fetchCountryData(iso, region_name))
    }
  }, [])

  if (loading) return <Loading />
  if (error) return <Error message='An error occurred, please try again later!' />
  if (!data)
    return (
      <NotFound
        title='No Data Found'
        message="We couldn't find any data to display."
        subMessage='Please try again later or contact support.'
      />
    )

  const {
    name,
    date,
    last_update,
    confirmed,
    confirmed_diff,
    deaths,
    deaths_diff,
    recovered,
    recovered_diff,
    active,
    active_diff,
    fatality_rate,
    provinces,
  } = data

  return (
    <div className='container mx-auto p-4'>
      <div className='bg-white shadow-lg rounded-lg p-6'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div>
            <h1 className='text-3xl font-bold mb-2'>
              {name} ({iso})
            </h1>
            <p className='text-gray-700'>Last Update: {new Date(last_update).toLocaleString()}</p>
          </div>
          <div className='mt-4 lg:mt-0'>
            <p className='text-lg font-semibold'>Date: {new Date(date).toLocaleDateString()}</p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6'>
          <StatisticCard
            title='Confirmed Cases'
            count={confirmed}
            diff={confirmed_diff}
            bgColor='bg-blue-100'
            textColor='text-blue-700'
          />
          <StatisticCard
            title='Deaths'
            count={deaths}
            diff={deaths_diff}
            bgColor='bg-red-100'
            textColor='text-red-700'
          />
          <StatisticCard
            title='Recovered'
            count={recovered}
            diff={recovered_diff}
            bgColor='bg-green-100'
            textColor='text-green-700'
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6'>
          <StatisticCard
            title='Active Cases'
            count={active}
            diff={active_diff}
            bgColor='bg-yellow-100'
            textColor='text-yellow-700'
          />
          <StatisticCard
            title='Fatality Rate'
            count={(fatality_rate * 100).toFixed(2)}
            bgColor='bg-purple-100'
            textColor='text-purple-700'
            isPercentage
          />
        </div>

        <div className='mt-6'>
          <h2 className='text-2xl font-bold mb-4'>Provinces</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {provinces.map((province: TProvince, index: number) => (
              <ProvinceCard key={index} province={province} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProductPage
