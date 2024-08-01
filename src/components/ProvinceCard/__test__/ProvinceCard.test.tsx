import { render, screen } from '@testing-library/react'
import ProvinceCard from '@/components/ProvinceCard'
import { TProvince } from '@/services/types'

const province: TProvince = {
  date: '2023-03-09',
  confirmed: 1928913,
  deaths: 15683,
  recovered: 0,
  confirmed_diff: 0,
  deaths_diff: 0,
  recovered_diff: 0,
  last_update: '2023-03-10 04:21:03',
  active: 1913230,
  active_diff: 0,
  fatality_rate: 0.0081,
  region: {
    iso: 'USA',
    name: 'US',
    province: 'Washington',
    lat: '47.4009',
    long: '-121.4905',
  },
}

test('renders ProvinceCard with correct data', () => {
  render(<ProvinceCard province={province} />)

  expect(screen.getByText('Washington')).toBeInTheDocument()
  expect(screen.getByText('Confirmed: 1928913')).toBeInTheDocument()
  expect(screen.getByText('Deaths: 15683')).toBeInTheDocument()
  expect(screen.getByText('Active: 1913230')).toBeInTheDocument()
  expect(screen.getByText('Fatality Rate: 0.81%')).toBeInTheDocument()
  expect(screen.getByText('Last Update: 3/10/2023, 4:21:03 AM')).toBeInTheDocument()
  expect(screen.getByText('Coordinates: 47.4009, -121.4905')).toBeInTheDocument()
})
