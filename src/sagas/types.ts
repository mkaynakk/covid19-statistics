export interface Action {
  type: string
  payload: {
    iso: string
    regionName: string
  }
  error?: null | string
}
