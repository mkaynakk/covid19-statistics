import { ProvinceCardProps } from '@/components/ProvinceCard/types'

const ProvinceCard: React.FC<ProvinceCardProps> = ({ province }) => {
  return (
    <div className='bg-gray-100 p-4 rounded-lg shadow'>
      <h3 className='text-xl font-bold'>{province.region.province}</h3>
      <p>Confirmed: {province.confirmed}</p>
      <p>Deaths: {province.deaths}</p>
      <p>Active: {province.active}</p>
      <p>Fatality Rate: {(province.fatality_rate * 100).toFixed(2)}%</p>
      <p>Last Update: {new Date(province.last_update).toLocaleString()}</p>
      <p className='text-gray-500 text-sm'>
        Coordinates: {province.region.lat}, {province.region.long}
      </p>
    </div>
  )
}

export default ProvinceCard
