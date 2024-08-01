export const FETCH_COUNTRY_DATA = 'FETCH_COUNTRY_DATA'
export const FETCH_COUNTRY_DATA_SUCCESS = 'FETCH_COUNTRY_DATA_SUCCESS'
export const FETCH_COUNTRY_DATA_FAILURE = 'FETCH_COUNTRY_DATA_FAILURE'

export const fetchCountryData = (iso: string, regionName: string) => ({
  type: FETCH_COUNTRY_DATA,
  payload: { iso, regionName },
})

export const fetchCountryDataSuccess = (data: unknown) => ({
  type: FETCH_COUNTRY_DATA_SUCCESS,
  payload: data,
})

export const fetchCountryDataFailure = (error: unknown) => ({
  type: FETCH_COUNTRY_DATA_FAILURE,
  payload: error,
})
