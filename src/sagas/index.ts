import { takeLatest, call, put, Effect } from 'redux-saga/effects'
import {
  fetchCountryDataSuccess,
  fetchCountryDataFailure,
  FETCH_COUNTRY_DATA,
} from '@/reducers/actions'
import { getReportsService, getTotalReportsService } from '@/services/index'
import countryList from '@/constants/world.json'
import { Action } from '@/sagas/types'
import { TCountryData } from '@/services/types'

function* fetchCountryDataSaga(action: Action): Generator<Effect, void, any> {
  try {
    let data: TCountryData | null = null
    const { iso, regionName } = action.payload

    const regionInfo = countryList.objects.ne_110m_admin_0_countries.geometries.find(
      (country) => country.properties.ISO_A3 === iso,
    )

    const responseTotalReports = yield call(getTotalReportsService, { iso })
    const responseReport = yield call(getReportsService, { iso, regionName })
    data = {
      ...responseTotalReports.data.data,
      name: regionInfo?.properties?.NAME ?? '',
      provinces: responseReport.data.data,
    }

    yield put(fetchCountryDataSuccess(data))
  } catch (error) {
    yield put(fetchCountryDataFailure(error))
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_COUNTRY_DATA, fetchCountryDataSaga)
}

export default rootSaga
