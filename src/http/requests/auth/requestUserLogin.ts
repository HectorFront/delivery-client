import {ConstructorRequest} from '../../constructor';
import {APIRoutes} from 'constants/api/routes';

export class RequestUserLogin extends ConstructorRequest {
    /**
     *
     * @param body
     */
    constructor(body) {
        const url: string = APIRoutes.LOGIN;
        const headers: Headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        super({ url, headers, method: 'POST', body });
    }
}