import { render, screen, fireEvent, ByRoleOptions } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router, Route, Routes } from 'react-router-dom'
import MapChart from '@/components/MapChart'
import geography from '@/constants/world.json'

test('navigates to detail page on location click', () => {
  const setCountry = jest.fn()
  const history = createMemoryHistory()

  render(
    <Router location={history.location} navigator={history}>
      <Routes>
        <Route
          path='/'
          element={
            <MapChart setCountry={setCountry} externalClassName={'flex flex-col items-center'} />
          }
        />
        <Route path='/countries/:isoA3-:isoA2' element={<div>Country Detail Page</div>} />
      </Routes>
    </Router>,
  )

  // Find a specific country element
  const countryGeo = geography.objects.ne_110m_admin_0_countries.geometries.find(
    (geo) => geo.properties.ISO_A3 === 'USA',
  ) // Example for USA

  expect(countryGeo).toHaveProperty('properties')

  if (!countryGeo) return

  const countryLink = `countries/${countryGeo.properties.ISO_A3}-${countryGeo.properties.ISO_A2}`

  // Use a more flexible query method
  const linkElement = screen.getByRole('link', { name: countryLink } as ByRoleOptions)

  const locationHref = '/' + countryLink

  expect(linkElement).toHaveAttribute('href', locationHref)

  if (!linkElement) return

  fireEvent.mouseEnter(linkElement)
  fireEvent.click(linkElement)

  // Assert that the URL changes to the detail page
  expect(history.location.pathname).toBe(locationHref)
})
