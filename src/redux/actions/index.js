export const SET_STATES = 'SET_STATES';

export const SET_CITIES = 'SET_CITIES';

export const SET_DISTRICTS = 'SET_DISTRICTS';

export const actionStates = (payload) => ({ type: SET_STATES, payload });

export const actionCities = (payload) => ({ type: SET_CITIES, payload });

export const actionDistricts = (payload) => ({ type: SET_DISTRICTS, payload });
