import Home from 'modules/home/path';
import ClientLogin from 'modules/auth/login/path';
import ClientRegister from 'modules/auth/register/path';

export const ROUTES_AUTH = [
    ...ClientLogin,
    ...ClientRegister
];

export const ROUTES_APP = [
    ...Home
];