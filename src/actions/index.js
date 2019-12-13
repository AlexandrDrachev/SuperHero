
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

export const onChangeUserDisable = () => {
  return {
    type: 'ON_CHANGE_USER_DISABLE'
  };
};

export const onChangeUserStatusAdmin = () => {
  return {
    type: 'ON_CHANGE_USER_STATUS_ADMIN'
  };
};

export const changeUserAutorisationSave = (bool) => {
  return {
    type: 'CHANGE_USER_AUTORISATION_SAVE',
    payload: bool
  };
};

export const getUserSaveFromData = (userSaveObj, bool) => {
  return {
    type: 'GET_USER_SAVE_FROM_DATA',
    payload: userSaveObj,
    bool: bool
  };
};

export const getDataGame = () => {
  return {
    type: 'GET_DATA_GAME'
  };
};

export const onChangePlayerX = () => {
  return {
    type: 'ON_CHANGE_PLAYER_X'
  };
};

export const onChangePlayer0 = () => {
  return {
    type: 'ON_CHANGE_PLAYER_0'
  };
};

export const onReadyPlayerX = (objHero) => {
  return {
    type: 'ON_READY_PLAYER_X',
    payload: objHero
  };
};

export const onReadyPlayer0 = (objHero) => {
  return {
    type: 'ON_READY_PLAYER_0',
    payload: objHero
  };
};

export const onField = () => {
  return {
    type: 'ON_FIELD'
  };
};

export const updateActivePlayer = () => {
  return {
    type: 'UPDATE_ACTIVE_PLAYER'
  };
};

export const onHistoryNextStep = (newStep) => {
  return {
    type: 'ON_HISTORY_NEXT_STEP',
    payload: newStep
  };
};

export const updatePlayerXScore = (idx) => {
  return {
    type: 'UPDATE_PLAYER_X_SCORE',
    payload: idx
  };
};

export const updatePlayer0Score = (idx) => {
  return {
    type: 'UPDATE_PLAYER_0_SCORE',
    payload: idx
  };
};

export const isWinner = (player) => {
  return {
    type: 'IS_WINNER',
    payload: player
  };
};

export const onTryAgain = () => {
  return {
    type: 'ON_TRY_AGAIN'
  };
};

export const onNewGame = () => {
  return {
    type: 'ON_NEW_GAME'
  };
};

export const onGetGamePage = () => {
  return {
    type: 'ON_GET_GAME_PAGE'
  };
};

export const onExitGamePage = () => {
  return {
    type: 'ON_EXIT_GAME_PAGE'
  };
};

export const onBackOneStepHistory = () => {
  return {
    type: 'ON_BACK_ONE_STEP_HISTORY'
  };
};

export const onForvardOneStepHistory = () => {
  return {
    type: 'ON_FORVARD_ONE_STEP_HISTORY'
  };
};

