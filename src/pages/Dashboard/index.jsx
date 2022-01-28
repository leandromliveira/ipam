import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCities, actionDistricts, actionStates } from '../../redux/actions';
import Context from '../../services/Context';
import { getCity, getDistrict, getStates } from '../../services/fetchAPI';

export default function Dashboard() {
  const dispatch = useDispatch();

  const {
    states, cities, districts, setStates, setCities, setDistricts,
  } = useContext(Context);

  const [stateId, setStateId] = useState('');
  const [cityId, setCityId] = useState('');

  const estados = useSelector((state) => state.location.states);
  const cidades = useSelector((state) => state.location.cities);
  const distritos = useSelector((state) => state.location.districts);

  useEffect(async () => {
    const response = await getStates();
    response.unshift({ id: '', nome: 'selecione' });
    dispatch(actionStates(response));
  }, []);

  useEffect(() => {
    setStates(estados);
  }, [estados]);

  useEffect(() => {
    setCities(cidades);
  }, [cidades]);

  useEffect(() => {
    setDistricts(distritos);
  }, [distritos]);

  useEffect(async () => {
    const response = await getCity(stateId);
    if (response.length > 0) { response.unshift({ id: '', nome: 'selecione' }); }
    dispatch(actionCities(response));
  }, [stateId]);

  useEffect(async () => {
    const response = await getDistrict(cityId);
    dispatch(actionDistricts(response));
  }, [cityId]);

  return (
    <div className="Container">
      <form>
        <label htmlFor="state">
          Estado:
          {' '}
          <select id="state" onChange={(event) => setStateId(event.target.value)}>
            {states.map((state) => (
              <option key={state.id} value={state.id}>{state.nome}</option>
            ))}
          </select>
        </label>
        <label htmlFor="city">
          Município:
          {' '}
          <select id="city" onChange={(event) => setCityId(event.target.value)}>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>{city.nome}</option>
            ))}
          </select>
        </label>
      </form>
      <div className="region-details">
        {districts[0] && (
          <>
            <p>
              microrregião:
              {' '}
              {districts[0].municipio.microrregiao.nome}
            </p>
            <p>
              mesorregião:
              {' '}
              {districts[0].municipio.microrregiao.mesorregiao.nome}
            </p>
            <p>
              UF:
              {' '}
              {districts[0].municipio.microrregiao.mesorregiao.UF.sigla}
            </p>
            <p>
              região:
              {' '}
              {districts[0].municipio.microrregiao.mesorregiao.UF.regiao.nome}
            </p>
          </>
        )}
      </div>
      <div>
        {districts[0] && (
          <>
            <p>Distritos:</p>
            <div className="district-list">
              {districts.map((district) => (
                <p key={district.id} className="district">
                  {district.nome}
                </p>
              ))}
            </div>
          </>

        )}
      </div>
    </div>
  );
}
