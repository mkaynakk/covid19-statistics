import { useState } from 'react'
import MapChart from '@/components/MapChart'
import Tooltip from 'react-tooltip'

const RootPage = () => {
  const [country, setCountry] = useState('')

  return (
    <>
      <MapChart setCountry={setCountry} externalClassName={'flex flex-col items-center'} />
      <Tooltip>{country}</Tooltip>
    </>
  )
}

export default RootPage
