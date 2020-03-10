
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
      gamePageApp: false,
      loading: true,
      btnPlay: true,
      btnSlide: true,
      field: false,
      playerX: {
        name: 'Player X',
        score: [],
        player: {
          name: '',
          image: ''
        },
        btnChangePlayer: false,
        btnAddedPlayer: true,
        playerReady: false
      },
      player0: {
        name: 'Player 0',
        score: [],
        player: {
          name: '',
          image: ''
        },
        btnChangePlayer: true,
        btnAddedPlayer: true,
        playerReady: false
      },
      activePlayer: {player: {image: '', name: '' }},
      stepCount: 0,
      stepPlayerX: false,
      historyStep: [
        { players: [null, null, null, null, null, null, null, null, null] }
      ],
      winner: {
        status: false,
        message: '...pending'
      }
    }
  };

const reducer = (state = initialState, action) => {
  switch (action.type) {

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
        userAutorisation: {},
        game: {
          ...state.game,
          gamePageApp: false
        }
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
    case 'ON_READY_PLAYER_0':
      return {
        ...state,
        game: {
          ...state.game,
          btnSlide: true,
          btnPlay: false,
          player0: {
            ...state.game.player0,
            player: action.payload,
            btnChangePlayer: true,
            btnAddedPlayer: true,
            playerReady: true
          }
        }
      };
    case 'ON_FIELD':
      return {
        ...state,
        game: {
          ...state.game,
          field: true,
          activePlayer: state.game.playerX,
          stepPlayerX: true
        }
      };
    case 'UPDATE_ACTIVE_PLAYER':
      return {
        ...state,
        game: {
          ...state.game,
          activePlayer: state.game.stepPlayerX ? state.game.playerX : state.game.player0,
        }
      };
    case 'ON_HISTORY_NEXT_STEP':
      return {
        ...state,
        game: {
          ...state.game,
          stepPlayerX: !state.game.stepPlayerX,
          stepCount: state.game.stepCount + 1,
          historyStep: [
            ...state.game.historyStep,
            action.payload
          ]
        }
      };
    case 'UPDATE_PLAYER_X_SCORE':
      return {
        ...state,
        game: {
          ...state.game,
          playerX: {
            ...state.game.playerX,
            score: [
              ...state.game.playerX.score,
              action.payload.toString()
            ]
            // score: state.game.playerX.score + action.payload.toString()
          }
        }
      };
    case 'UPDATE_PLAYER_0_SCORE':
      return {
        ...state,
        game: {
          ...state.game,
          player0: {
            ...state.game.player0,
            score: [
              ...state.game.player0.score,
              action.payload.toString()
            ]
            // score: state.game.player0.score + +action.payload.toString()
          }
        }
      };
    case 'IS_WINNER':
      return {
        ...state,
        game: {
          ...state.game,
          winner: {
            ...state.game.winner,
            status: true,
            message: action.payload
          }
        }
      };
    case 'ON_TRY_AGAIN':
      return {
        ...state,
        game: {
          ...state.game,
          stepCount: 0,
          stepPlayerX: true,
          historyStep: [
            {players: [null, null, null, null, null, null, null, null, null]}
          ],
          activePlayer: state.game.playerX,
          playerX: {
            ...state.game.playerX,
            score: []
          },
          player0: {
            ...state.game.player0,
            score: []
          },
          winner: {
            status: false,
            message: '...pending'
          }
        }
      };
    case 'ON_NEW_GAME':
      return {
        ...state,
        idHero: 460,
        game: {
          gamePageApp: true,
          loading: true,
          btnPlay: true,
          btnSlide: true,
          field: false,
          playerX: {
            name: 'Player X',
            score: [],
            player: {
              name: '',
              image: ''
            },
            btnChangePlayer: false,
            btnAddedPlayer: true,
            playerReady: false
          },
          player0: {
            name: 'Player 0',
            score: [],
            player: {
              name: '',
              image: ''
            },
            btnChangePlayer: true,
            btnAddedPlayer: true,
            playerReady: false
          },
          activePlayer: {player: {image: '', name: '' }},
          stepCount: 0,
          stepPlayerX: false,
          historyStep: [
            {players: [null, null, null, null, null, null, null, null, null]}
          ],
          winner: {
            status: false,
            message: '...pending'
          }
        }
      };
    case 'ON_GET_GAME_PAGE':
      return {
        ...state,
        game: {
          ...state.game,
          gamePageApp: true
        }
      };
    case 'ON_EXIT_GAME_PAGE':
      return {
        ...state,
        game: {
          ...state.game,
          gamePageApp: false
        }
      };
    case 'ON_BACK_ONE_STEP_HISTORY':
      return {
        ...state,
        game: {
          ...state.game,
          stepCount: state.game.stepCount - 1
        }
      };
    case 'ON_FORVARD_ONE_STEP_HISTORY':
      return {
        ...state,
        game: {
          ...state.game,
          stepCount: state.game.stepCount + 1
        }
      };

    default:
      return state;
  }
};

export default reducer;

