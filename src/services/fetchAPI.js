export async function getStates() {
  const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?view=nivelado');
  const json = await response.json();
  return json;
}

export async function getCity(stateId) {
  const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`);
  const json = await response.json();
  return json;
}

export async function getDistrict(cityId) {
  const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cityId}/distritos`);
  const json = await response.json();
  return json;
}
