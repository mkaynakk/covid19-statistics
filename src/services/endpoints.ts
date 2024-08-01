import qs from 'qs'
import { TReportsQuery, TTotalReportsQuery } from '@/services/types'

export default {
  getRegions: () => '/regions',
  getProvinces: () => '/provinces',
  getReports: (data: TReportsQuery) => `/reports?${qs.stringify(data, { skipNulls: true })}`,
  getTotalReports: (data: TTotalReportsQuery) =>
    `/reports/total?${qs.stringify(data, { skipNulls: true })}`,
}
