import geography from '@/constants/world.json'
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
} from 'react-simple-maps'
import { Link } from 'react-router-dom'
import { MapChartProps } from '@/components/MapChart/types'

const MapChart: React.FC<MapChartProps> = ({ setCountry, externalClassName }) => {
  return (
    <div data-tip='' className={externalClassName}>
      <ComposableMap
        projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }}
        style={{
          maxHeight: '600px',
          maxWidth: '800px',
        }}
      >
        <ZoomableGroup>
          <Sphere id='map' fill='#fff' stroke='#fff' strokeWidth={0.5} />
          <Graticule stroke='#e0e0e0' strokeWidth={0.5} />
          <Geographies geography={geography}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryLink = `countries/${geo.properties.ISO_A3}-${geo.properties.ISO_A2}`
                return (
                  <Link to={countryLink} key={geo.rsmKey} aria-label={countryLink}>
                    <Geography
                      geography={geo}
                      onMouseEnter={() => setCountry?.(geo.properties.NAME)}
                      onMouseLeave={() => setCountry?.('')}
                      style={{
                        default: {
                          fill: '#48b2dc',
                          stroke: '#606060',
                          outline: 'none',
                        },
                        hover: {
                          fill: '#C80036',
                          stroke: '#C80036',
                          outline: 'none',
                        },
                        pressed: {
                          fill: '#E42',
                          stroke: '#E42',
                          outline: 'none',
                        },
                      }}
                    />
                  </Link>
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}

export default MapChart
