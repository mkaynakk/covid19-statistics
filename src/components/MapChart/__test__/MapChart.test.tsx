import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import MapChart from '@/components/MapChart'
import geography from '@/constants/world.json'

test('renders MapChart without crashing', () => {
  const setCountry = jest.fn()

  render(
    <Router>
      <MapChart setCountry={setCountry} externalClassName={'flex flex-col items-center'} />
    </Router>,
  )
  const links = screen.getAllByRole('link')

  expect(links.length).toBe(geography.objects.ne_110m_admin_0_countries.geometries.length)

  links.forEach((link) => {
    expect(link).toBeInTheDocument()
  })
})
