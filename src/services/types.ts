import { AxiosResponse } from 'axios'

export type TReportsQuery = {
  city_name?: string
  region_province?: string
  iso?: string
  region_name?: string
  q?: string
  date?: string
}

export type TTotalReportsQuery = {
  date?: string
  iso?: string
}

export type TProvince = {
  date: string
  confirmed: number
  deaths: number
  recovered: number
  confirmed_diff: number
  deaths_diff: number
  recovered_diff: number
  last_update: string
  active: number
  active_diff: number
  fatality_rate: number
  region: {
    iso: string
    name: string
    province: string
    lat: string
    long: string
  }
}

export type TProvinces = TProvince[]

export type TCountryData = {
  name: string
  date: string
  last_update: string
  confirmed: number
  confirmed_diff: number
  deaths: number
  deaths_diff: number
  recovered: number
  recovered_diff: number
  active: number
  active_diff: number
  fatality_rate: number
  provinces: TProvinces
}

export interface IRequestModel {
  /**
   *
   * @param {D} data
   * @returns {Promise<AxiosResponse<R>>}
   */ <R, D = void>(data?: D): Promise<AxiosResponse<R>>
}
