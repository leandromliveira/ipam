import { SET_STATES, SET_CITIES, SET_DISTRICTS } from '../actions';

const INITIAL_STATE = {
  states: [],
  cities: [],
  districts: [],
};

// eslint-disable-next-line default-param-last
export default function location(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_STATES:
      return ({
        ...state,
        states: payload,
      });
    case SET_CITIES:
      return ({
        ...state,
        cities: payload,
      });
    case SET_DISTRICTS:
      return ({
        ...state,
        districts: payload,
      });
    default:
      return state;
  }
}
