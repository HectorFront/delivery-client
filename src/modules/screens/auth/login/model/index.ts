import {ExecutorRequest} from "http/executor";
import {RequestUserLogin} from "http/requests";

type UserLoginProps = {
    username: string,
    password: string
};

export class ModelLogin {

    /**
     *
     * @param body
     */
    static userLogin(body: UserLoginProps) {
        const payload = new URLSearchParams({
            ...body,
            grant_type: 'password',
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET
        }).toString();
        return new Promise((resolve, reject) =>
            ExecutorRequest(new RequestUserLogin(payload))
                .then(resp => resolve(resp))
                .catch(err => reject(err.status)));
    }
}