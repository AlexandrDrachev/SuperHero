
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

export const addedUsersInState = (arrNewUsers) => {
  return {
    type: 'ADDED_USERS_IN_STATE',
    payload: arrNewUsers
  };
};

export const getWindowApp = (returnElement, dataStorage) => {
  return {
    type: 'GET_WINDOW_APP',
    payload: returnElement,
    dataUsers: dataStorage
  };
};

export const getWindowModal = (returnElement) => {
  return {
    type: 'GET_WINDOW_MODAL',
    payload: returnElement
  };
};

export const getNewWindowModal = (returnElement) => {
  return {
    type: 'GET_NEW_WINDOW_MODAL',
    payload: returnElement
  };
};

export const onGetUserAutorisation = (checkUserObj) => {
  return {
    type: 'ON_GET_USER_AUTORISATION',
    payload: checkUserObj
  };
};

export const getAdminPage = (userObj) => {
  return {
    type: 'GET_ADMIN_PAGE',
    user: userObj
  };
};

export const onGetRegistration = () => {
  return {
    type: 'ON_GET_REGISTRATION'
  };
};

export const getWindowModalRegistration = (returnElement) => {
  return {
    type: 'GET_WINDOW_MODAL_REGISTRATION',
    payload: returnElement
  };
};

export const onToggleUserLogin = () => {
  return {
    type: 'ON_TOGGLE_USERLOGIN'
  };
};

export const getWindowReModal = (returnElement) => {
  return {
    type: 'GET_WINDOW_RE_MODAL',
    payload: returnElement
  };
};

export const onUserExit = () => {
  return {
    type: 'ON_USER_EXIT'
  };
};

export const onRegistrationNewUser = () => {
  return {
    type: 'ON_REGISTRATION_NEW_USER'
  };
};

export const getUserInAdminSelect = (userObj) => {
  return {
    type: 'GET_USER_IN_ADMIN_SELECT',
    payload: userObj
  };
};

