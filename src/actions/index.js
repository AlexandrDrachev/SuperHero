
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

export const onUpdateArrayAddedHeroes = (id) => {
  return {
    type: 'ON_UPDATE_ARRAY_ADDED_HEROES',
    payload: id
  };
};

export const onAddedHeroCart = (arrHero, funcCartRemoved) => {
  return {
    type: 'ON_ADDED_HERO_CART',
    payload: arrHero,
    func: funcCartRemoved
  };
};

export const onHeroCartRemoved = (objHero) => {
  return {
    type: 'ON_HERO_CART_REMOVED',
    payload: objHero
  };
};

export const warningError = () => {
  return {
    type: 'WARNING_ERROR'
  };
};

export const returnNewId = () => {
  return {
    type: 'RETURN_NEW_ID'
  };
};
