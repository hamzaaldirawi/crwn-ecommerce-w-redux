import { call, put, takeLatest, all } from 'redux-saga/effects';
// takeEvery listen to every action
// takeLatest listen to last action
// take with while is async function // apply delay
import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { 
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'

export function* fetchCollectionsStartAsync() {
    try {
        const CollectionRef = firestore.collection('collections');
        const snapshot = yield CollectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsStartAsync)
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
  }