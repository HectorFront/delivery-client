/** @name Dependencies */
import {memo, useReducer} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Internal */
import * as S from '../styles';
import {reducer} from "./reducer/useReducer";

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
const INITIAL_STATE = {
    user: null,
    password: null
}

const ClientLogin = memo((props: ChildComponentProps) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <S.Container>
            teste
        </S.Container>
    )
});

export default withRouter(ClientLogin);