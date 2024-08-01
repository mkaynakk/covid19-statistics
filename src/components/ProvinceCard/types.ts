export interface ProvinceCardProps {
  province: {
    region: { province: string; lat: string; long: string }
    confirmed: number
    deaths: number
    active: number
    fatality_rate: number
    last_update: string
  }
}
