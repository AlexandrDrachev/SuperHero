

//Me    490847258166664
//Dasha 665796377279843
// const baseUrl = 'https://superheroapi.com/api/490847258166664';
// const proxyUrl = 'https://cors-anywhere.herokuapp.com';

export const arrHero = [
  {
    id: 1,
    name: 'A-Bomb'
  },
  {
    id: 2,
    name: 'Abe Sapien'
  },
  {
    id: 3,
    name: 'Abin Sur'
  },
  {
    id: 4,
    name: 'Abomination'
  },
  {
    id: 5,
    name: 'Abraxas'
  },
  {
    id: 6,
    name: 'Absorbing Man'
  },
  {
    id: 7,
    name: 'Adam Monroe'
  },
  {
    id: 8,
    name: 'Adam Strange'
  },
  {
    id: 9,
    name: 'Agent 13'
  },
  {
    id: 10,
    name: 'Agent Bob'
  },
  {
    id: 11,
    name: 'Agent Zero'
  },
  {
    id: 12,
    name: 'Air-Walker'
  },
  {
    id: 13,
    name: 'Ajax'
  },
  {
    id: 14,
    name: 'Alan Scott'
  },
  {
    id: 15,
    name: 'Alex Mercer'
  },
  {
    id: 16,
    name: 'Alex Woolsly'
  },
  {
    id: 17,
    name: 'Alfred Pennyworth'
  },
  {
    id: 18,
    name: 'Alien'
  },
  {
    id: 19,
    name: 'Allan Quatermain'
  },
  {
    id: 20,
    name: 'Amazo'
  },
  {
    id: 21,
    name: 'Ammo'
  },
  {
    id: 22,
    name: 'Ando Masahashi'
  },
  {
    id: 23,
    name: 'Angel'
  },
  {
    id: 24,
    name: 'Angel'
  },
  {
    id: 25,
    name: 'Angel Dust'
  },
];

export default class ServiceApi {

  baseUrl = 'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/665796377279843';

  getUrl = (url) => fetch(`${url}`);

  getHero = async (id) => {
    return await this.getUrl(`${this.baseUrl}/${id}`)
      .then((res) => res.json());
  };
}









