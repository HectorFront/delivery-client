/** @name Dependencies */
import {memo, useReducer} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Internal */
import * as S from '../styles';
import {reducer} from "utils/reducer/useReducer";

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
export const INITIAL_STATE = {
    user: null,
    password: null
}

const ClientRegister = memo((props: ChildComponentProps) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <S.Container>
            <h1>Register</h1>
        </S.Container>
    )
});

export default withRouter(ClientRegister);