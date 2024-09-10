const url = 'http://127.0.0.1:3000/';
const path = 'V1/';

export const enviroment = {
  pathHome: '',
  pathLogin: path + '',
  pathRegister: path + 'register',
  pathEmployee: path + 'employee',
};

export const api = {
  apiLogin: url + path + 'login',
  apiRegister: url + path + 'register',
  apiAuthToken: url + path + 'authToken',
};
