import searchReducer from '../../../reducers/searchReducer';
import { FETCH_MOVIES } from '../../../actions/types';

describe('is search reducers works', () => {
  it('handles actions of type FETCH_MOVIES ', () => {
    const action = {
      type: FETCH_MOVIES,
    };

    const newState = searchReducer({}, action);

    expect(newState).toMatchObject({ loading: true });
  });

  it('handles action with unknown type', () => {
    const newState = searchReducer({}, { type: 'unknown_type' });

    expect(newState).toMatchObject({});
  });
});
