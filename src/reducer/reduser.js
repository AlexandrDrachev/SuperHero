
// export let usersData = [{statusAdmin: true, name: 'Admin', password: 123456, email: 'alexfront.front@gmail.com'}];
// const dataStorage = JSON.stringify(usersData);
// localStorage.setItem("dataStorage", dataStorage);

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
    userAutorisationSave: false,
    isAdministrator: false,
    userIsBlock: false,
    userRegistration: false,
    userInAdminSelect: {
      email: "rtgergertg",
      name: "Admin",
      password: "123456",
      statusAdmin: true,
      userDisable: false,
    },
//STATE_IN_GAME----------
    game: {
      loading: true,
      btnPlay: true,
      btnSlide: true,
      playerX: {
        player: {},
        btnChangePlayer: false,
        btnAddedPlayer: true,
        playerReady: false
      },
      player0: {
        player: {},
        btnChangePlayer: true,
        btnAddedPlayer: true,
        playerReady: false
      }
    }
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
        users: action.dataUsers,
        userRegistration: false
      };
    case 'GET_WINDOW_MODAL':
      return {
        ...state,
        window: action.payload,
        registration: false
      };
    case 'GET_NEW_WINDOW_MODAL':
      return {
        ...state,
        window: action.payload,
        registration: false,
        userLogin: false
      };
    case 'ON_GET_USER_AUTORISATION':
      return {
        ...state,
        userAutorisation: action.payload,
        autorisation: true,
        registration: false
      };
    case 'GET_USER_BLOCK_PAGE':
      return {
        ...state,
        userAutorisation: action.payload,
        isAdministrator: false,
        registration: false,
        autorisation: true,
        userIsBlock: true
      };
    case 'GET_ADMIN_PAGE':
      return {
        ...state,
        userAutorisation: action.user,
        isAdministrator: true,
        userLogin: false
      };
    case 'ON_GET_REGISTRATION':
      return {
        ...state,
        registration: true,
        autorisation: false
      };
    case 'GET_WINDOW_MODAL_REGISTRATION':
      return {
        ...state,
        window: action.payload,
        registration: true,
        autorisation: false,
        isAdministrator: false,
        userLogin: false
      };
    case 'GET_WINDOW_RE_MODAL':
      return {
        ...state,
        window: action.payload
      };
    case 'ON_TOGGLE_USERLOGIN':
      return {
        ...state,
        userLogin: true
      };
    case 'ON_USER_EXIT':
      return {
        ...state,
        isAdministrator: false,
        autorisation: false,
        userAutorisationSave: false,
        registration: false,
        userAutorisation: {}
      };
    case 'ON_REGISTRATION_NEW_USER':
      return {
        ...state,
        autorisation: true,
        registration: false,
        userRegistration: true
      };
    case 'GET_USER_IN_ADMIN_SELECT':
      return {
        ...state,
        userInAdminSelect: action.payload
      };
    case 'ON_CHANGE_USER_DISABLE':
      return {
        ...state,
        userInAdminSelect: {
          ...state.userInAdminSelect,
          userDisable: !state.userInAdminSelect.userDisable
        }
      };
    case 'ON_CHANGE_USER_STATUS_ADMIN':
      return {
        ...state,
        userInAdminSelect: {
          ...state.userInAdminSelect,
          statusAdmin: !state.userInAdminSelect.statusAdmin
        }
      };
    case 'CHANGE_USER_AUTORISATION_SAVE':
      return {
        ...state,
        userAutorisationSave: action.payload
      };
    case 'GET_USER_SAVE_FROM_DATA':
      return {
        ...state,
        autorisation: true,
        userAutorisationSave: action.bool,
        userAutorisation: action.payload
      };
    case 'GET_DATA_GAME':
        return {
            ...state,
            game: {
                ...state.game,
                loading: false
            }
        };
      case 'ON_FETCH_PLAYER_X':
        return {
            ...state,
            game: {
                ...state.game,
                playerX: {
                    ...state.game.playerX,
                    player: action.payload
                }
            }
        };
    case 'ON_CHANGE_PLAYER_X':
      return {
          ...state,
          game: {
              ...state.game,
              btnSlide: false,
              playerX: {
                  ...state.game.playerX,
                  btnChangePlayer: true,
                  btnAddedPlayer: false
              }
          }
      };
    case 'ON_READY_PLAYER_X':
      return {
          ...state,
          game: {
              ...state.game,
              btnSlide: true,
              playerX: {
                  ...state.game.playerX,
                  player: action.payload,
                  playerReady: true,
                  btnAddedPlayer: true,
                  btnChangePlayer: true
              },
              player0: {
                  ...state.game.player0,
                  btnChangePlayer: false
              }
          }
      };
    case 'ON_CHANGE_PLAYER_0':
          return {
              ...state,
              game: {
                  ...state.game,
                  btnSlide: false,
                  player0: {
                      ...state.game.player0,
                      btnChangePlayer: true,
                      btnAddedPlayer: false
                  }
              }
          };

    default:
      return state;
  }
};

export default reducer;

