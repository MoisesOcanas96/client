export const USER_DEFAULT_INFO = {
  name: '',
  age: null,
  email: '',
  userType: '',
  joinDate: '',
}

export const MOCK_USERS = [
  {
    id: 0,
    name: 'Juan Perez',
    age: 29,
    email: 'juan.perez@gmail.com',
    userType: 'admin',
    joinDate: '23/10/2022',
  },
  {
    id: 1,
    name: 'Carlos Alcaraz',
    age: 20,
    email: 'carlitos.alz25@gmail.com',
    userType: 'client',
    joinDate: '08/12/2020',
  },
  {
    id: 2,
    name: 'Juancho Hernangomez',
    age: 31,
    email: 'juancho1998@gmail.com',
    userType: 'developer',
    joinDate: '16/05/2019',
  }
];

export const API_URL = 'http://localhost:8082/api/users';

export const USER_TYPES = ['admin', 'client', 'developer'];
