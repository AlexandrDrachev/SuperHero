
export let usersData = [{name: 'Admin', password: 123456, email: 'alexfront.front@gmail.com'}];

export const initialState =
  {
    idHero: 460,
    imgHero: '',
    nameHero: '',
    genderHero: '',
    raceHero: '',
    publisherHero: '',
    inputId: '',
    count: 0,
    randomId: 99,
    randomIdHero: null,
    randomImgHero: '',
    randomNameHero: '',
    randomShow: false,
    arrTableHeroes: [],
    objHero: {},
    countAddedHero: 0,
    objTableCartHero: {},
    error: false,
    users: [],
    autorisation: false,
    registration: false,
    administrator: false,
    userLogin: false,
    window: null,
    userAutorisation: {},
    adminPage: null,
    isAdministrator: false
  };

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'INC':
      return {
        ...state,
        count: state.count + 1
      };
    case 'FETCH_HERO_REQUEST':
      return state;
    case 'FETCH_HERO_SUCCESS':
      const { id, image, name, appearance, biography } = action.payload;
      return {
        ...state,
        idHero: id,
        imgHero: image.url,
        nameHero: name,
        genderHero: appearance.gender,
        raceHero: appearance.race,
        publisherHero: biography.publisher,
        objHero: action.payload,
        objTableCartHero: {
          id: id,
          avatar: image.url,
          name: name,
          publisher: biography.publisher
        },
      };
    case 'FETCH_RANDOM_HERO_SUCCESS':
      const { randomId, randomPayload } = action;
      return {
        ...state,
        randomIdHero: randomPayload.id,
        randomImgHero: randomPayload.image.url,
        randomNameHero: randomPayload.name,
        randomId: randomId,
        count: state.count + 1
      };
    case 'ON_TOGGLE_ID_HERO':
      return {
        ...state,
        idHero: action.payload
      };
    case 'ON_TOGGLE_RANDOM_SHOW':
      return {
        ...state,
        randomShow: !state.randomShow
      };
    case 'ON_UPDATE_ARRAY_ADDED_HEROES':

      const indexHero = state.arrTableHeroes.findIndex(({id}) => id === action.payload);
      if (indexHero === -1) {
        return {
          ...state,
          arrTableHeroes: [
            ...state.arrTableHeroes,
            state.objTableCartHero
          ],
          countAddedHero: state.countAddedHero + 1
        };
      }

      return {...state};
    case 'ON_HERO_CART_REMOVED':
      return {
        ...state,
        arrTableHeroes: [
          ...state.arrTableHeroes.filter(({id}) => id !== action.payload.id)
        ],
        countAddedHero: state.countAddedHero - 1
      };
    case 'WARNING_ERROR':
      return {
        ...state,
        error: true
      };
    case 'RETURN_NEW_ID':
      return {
        ...state,
        idHero: 460
      };
    case 'ADDED_USERS_IN_STATE':
      return {
        ...state,
        users: action.payload
      };

    case 'GET_WINDOW_APP':
      return {
        ...state,
        window: action.payload,
        users: action.dataUsers
      };

    case 'GET_WINDOW_MODAL':
      return {
        ...state,
        window: action.payload
      };

    case 'ON_GET_USER_AUTORISATION':
      return {
        ...state,
        userAutorisation: action.payload,
        autorisation: true
      };

    case 'GET_ADMIN_PAGE':
      return {
        ...state,
        adminPage: action.payload,
        userAutorisation: action.user,
        isAdministrator: true
      };

    default:
      return state;
  }
};

export default reducer;

