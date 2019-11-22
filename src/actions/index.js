
export const heroRequested = () => {
  return {
    type: 'FETCH_HERO_REQUEST'
  };
};

export const heroLoaded = (objHero) => {
  return {
    type: 'FETCH_HERO_SUCCESS',
    payload: objHero
  };
};

export const viewRandomHero = (objHero) => {
  return {
    type: 'FETCH_RANDOM_HERO_SUCCESS',
    randomPayload: objHero,
    randomId: Math.floor(Math.random()*731)
  };
};

export const heroError = (error) => {
  return {
    type: 'FETCH_HERO_FAILURE',
    payload: error
  };
};

export const increment = () => {
  return {
    type: 'INC'
  };
};

export const onToggleIdHero = (value) => {
  return {
    type: 'ON_TOGGLE_ID_HERO',
    payload: value
  };
};

export const onToggleRandomShow = () => {
  return {
    type: 'ON_TOGGLE_RANDOM_SHOW'
  };
};

export const onUpdateObjectAddedHeroes = () => {
  return {
    type: 'ON_UPDATE_OBJECT_ADDED_HEROES'
  };
};
