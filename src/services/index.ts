import endpoints from '@/services/endpoints'
import { covidApiRequest } from '@/services/request'
import { IRequestModel, TReportsQuery, TTotalReportsQuery } from '@/services/types'

export const getRegionsService: IRequestModel = () => covidApiRequest.get(endpoints.getRegions())

export const getProvincesService: IRequestModel = () =>
  covidApiRequest.get(endpoints.getProvinces())

export const getReportsService: IRequestModel = (data) =>
  covidApiRequest.get(endpoints.getReports(data as TReportsQuery))

export const getTotalReportsService: IRequestModel = (data) =>
  covidApiRequest.get(endpoints.getTotalReports(data as TTotalReportsQuery))
