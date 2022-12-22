/** @name Dependencies */
import {memo, useReducer} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
/** @name Internal */
import * as S from './styles';
import {MenuHeader} from "./components/menuHeader";
/** @name External */
import {CardMenu} from "components";
import {reducer} from "utils/reducer/useReducer";

interface ChildComponentProps extends RouteComponentProps<any> {}

/** @name Constants */
export const INITIAL_STATE = {
}

const ClientLogin = memo((props: ChildComponentProps) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <S.Content>
            <MenuHeader/>
            <S.Topic>Promoções</S.Topic>
            <S.List>
                <CardMenu/>
                <CardMenu/>
                <CardMenu/>
            </S.List>
        </S.Content>
    )
});

export default withRouter(ClientLogin);