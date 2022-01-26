import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';

export default function ProviderHook({ children }) {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const STORE_CONTEXT = {
    states, cities, districts, setStates, setCities, setDistricts,
  };

  return (
    <Context.Provider value={STORE_CONTEXT}>
      {children}
    </Context.Provider>
  );
}

ProviderHook.propTypes = {
  children: PropTypes.element.isRequired,
};
