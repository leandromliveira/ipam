import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionStates } from '../../redux/actions';
import Context from '../../services/Context';
import { getStates } from '../../services/fetchAPI';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { states, setStates } = useContext(Context);

  useEffect(async () => {
    const response = await getStates();
    dispatch(actionStates(response));
    setStates(useSelector((state) => state.location.states));
  }, []);
  return (
    <form>
      <label htmlFor="state">
        Estado:
        {' '}
        <select id="state">
          {states.map((state) => (
            <option key={state.id} value={state.id}>{state.nome}</option>
          ))}
        </select>
      </label>
    </form>
  );
}
