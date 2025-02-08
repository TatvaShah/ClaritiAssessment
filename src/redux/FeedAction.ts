import {
  fetchDataStart,
  fetchDataEnd,
  fetchDataSuccess,
  fetchDataFailure,
  refreshStart,
  refreshSuccess,
  refreshFailure,
} from './FeedSlice';

export const fetchMoreData = (moreLoader: boolean) => async (dispatch: (arg0: { payload: any; type: "feed/fetchDataEnd" | "feed/fetchDataStart" | "feed/fetchDataSuccess" | "feed/fetchDataFailure"; }) => void, getState: () => { (): any; new(): any; feed: { page: any; }; }) => {
  const { page } = getState().feed;
  if (moreLoader) {
    dispatch(fetchDataEnd());
  } else {
    dispatch(fetchDataStart());
  }
  try {
    const newData = Array.from({ length: 10 }).map((_, i) => ({
      id: `${page * 10 + i}`,
      title: `Item ${page * 10 + i}`,
      description: 'This is a sample description.',
      image: 'https://picsum.photos/200',
      pin: false,
    }));
    setTimeout(() => {
      dispatch(fetchDataSuccess(newData));
    }, 2000);
  } catch (error) {
    dispatch(fetchDataFailure());
  }
};

export const refreshData = () => async (dispatch: (arg0: { payload: any; type: "feed/refreshStart" | "feed/refreshSuccess" | "feed/refreshFailure"; }) => void) => {
  dispatch(refreshStart());
  try {
    const newData = Array.from({length: 10}).map((_, i) => ({
      id: `${i}`,
      title: `Item ${i}`,
      description: 'This is a sample description.',
      image: 'https://picsum.photos/200',
      pin: false,
    }));
    setTimeout(() => {
      dispatch(refreshSuccess(newData));
    }, 2000);
  } catch (error) {
    dispatch(refreshFailure());
  }
};
