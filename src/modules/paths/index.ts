import Home from 'modules/screens/home/path';
import ClientLogin from 'modules/screens/auth/login/path';
import ClientRegister from 'modules/screens/auth/register/path';

export const ROUTES = [
    ...ClientLogin,
    ...ClientRegister
];

export const PRIVATE_ROUTES = [
    ...Home
];