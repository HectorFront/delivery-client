/** @name Dependencies */
import {memo, useReducer} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Internal */
import * as S from './styles';
import {reducer} from "utils/reducer/useReducer";
/** @name External */

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
export const INITIAL_STATE = {
}

const ClientLogin = memo((props: ChildComponentProps) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <S.Content>
        </S.Content>
    )
});

export default withRouter(ClientLogin);